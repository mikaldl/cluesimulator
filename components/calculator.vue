<template>
  <div class="flex justify-center items-center mt-8 content-start flex-wrap">
    <div class="w-full flex self-start justify-center items-center content-center mb-8">
      <span class="py-2" :class="{'border-b border-white': screen == 'opening'}" @click="screen = 'opening'">
        Casket opening
      </span>
      <span class="px-2 font-bold ">
        |
      </span>
      <span class="py-2" :class="{'border-b border-white': screen == 'droptable'}" @click="screen = 'droptable'">
        Drop table
      </span>
    </div>

    <div class="w-full flex justify-center" v-if="screen == 'opening'">
      <div class="lg:w-1/2 w-full flex flex-col self-start">
        <div class="w-full text-white pb-12 px-12 lg:px-0">
          <div class="font-lg font-bold pb-6">Luck enhancers</div>

          <div>
            <p-check class="p-default p-curve" v-model="enhancers.ring">Tier 4 luck</p-check>
            <p-check class="p-default p-curve" v-model="enhancers.blm">Bad luck mitigation</p-check>
            <p-check class="p-default p-curve" v-model="enhancers.osh">Orlando Smith's hat</p-check>
          </div>
        </div>

        <div class="clue-modal m-auto lg:m-none">
          <div class="items flex text-center">
            <div class="flex items-center justify-center w-1/6" v-for="roll in lastOpening">
                            <span v-if="roll.table == 'rare'"
                                  v-tooltip="{content: roll.item + ' (1/' + roll.rarity + ')', trigger: 'hover focus click',  placement: 'bottom-center', classes: ['info']}">
                                <img v-if="itemLog[roll.item].info.id"
                                     :src="'http://services.runescape.com/m=itemdb_rs/obj_big.gif?id=' + itemLog[roll.item].info.id"
                                     :class="{'rare-item': roll.rarity < 1000, 'super-rare-item': roll.rarity >= 1000 && roll.rarity < 5000, 'ultra-rare-item': roll.rarity >= 5000}"
                                     alt="">
                                <span v-else>R</span>
                            </span>

              <span v-if="roll.table == 'nonrare'"
                    v-tooltip="{content: roll.amount + ' ' + roll.item, trigger: 'hover focus click',  placement: 'bottom-center', classes: ['info']}">
                                <img v-if="itemLog[roll.item].info.id"
                                     :src="'http://services.runescape.com/m=itemdb_rs/obj_big.gif?id=' + itemLog[roll.item].info.id"
                                     alt="">
                                <span v-else>N</span>
                            </span>

              <span v-if="roll.table == 'garbage'"
                    v-tooltip="{content: roll.amount + ' ' + roll.item, trigger: 'hover focus click',  placement: 'bottom-center', classes: ['info']}">
                                 <img v-if="itemLog[roll.item].info.id"
                                      :src="'http://services.runescape.com/m=itemdb_rs/obj_big.gif?id=' + itemLog[roll.item].info.id"
                                      alt="">
                                <span v-else>G</span>
                            </span>
            </div>
          </div>

          <div class="button">
            <button @click="open()">
              Open casket
            </button>

            <div class="text-center mt-5">
              <p-check class="p-default p-curve" v-model="autoOpen">AFK Opening</p-check>
            </div>
          </div>
        </div>
      </div>

      <div class="item-log text-white p-8 pb-0">
        <div class="text-xl pb-4">
          Received items ({{ opened }} clues<span v-if="currentRareHits > 0">, 1/{{ ((currentTotalHits / currentRareHits) * (currentTotalHits/opened)).toFixed(2) }} rdt</span>):
        </div>

        <div :class="['inventory', level]" v-if="inventory && inventory.length > 0">
          <div class="relative inline-block">
            <img :src="'./' + level + '-inventory.png'" :alt="level">
            <div class="collection">
              {{ Object.keys(knownItems).length }}
            </div>
            <div class="items absolute inset-0 flex flex-wrap flex-col content-start">
              <div v-for="(info, item) in inventoryLog" class="item w-1/6"
                   v-tooltip="{content: info.rarity, trigger: 'hover focus click', placement: 'bottom-center', classes: ['info']}"
                   :style="{visibility: item !== '-1' ? 'show' : 'hidden'}"
                   :data-item="item">
                {{ info.amount }}
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div v-for="item in sortedItemLog">
            <img v-if="item.info.id"
                 :src="'http://services.runescape.com/m=itemdb_rs/obj_sprite.gif?id=' + item.info.id"
                 alt="">
            {{item.info.name}}: {{ item.amount }} <span v-if="item.rarity">(1/{{item.rarity}})</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center" v-else>
      <droptable :type="level" :items="itemList" :table="rareTableScheme" :numerator="rareNumerator" :denominator="rareDenominator" />
    </div>
  </div>
</template>

<script>
  import seedrandom from "seedrandom"
  import {mapFields} from "vuex-map-fields"
  import map from "lodash/map"
  import orderBy from "lodash/orderBy"
  import find from "lodash/find"
  import droptable from "./droptable"

  const mapFieldsFromDotNotation = (namespaceProp, fields) => {
    return Object.keys(fields).reduce((prev, key) => {
      const path = fields[key];
      const field = {
        get() {
          const namespace = this[namespaceProp];
          const getterPath = `${namespace}/getField`;
          return this.$store.getters[getterPath](path);
        },
        set(value) {
          const namespace = this[namespaceProp];
          const mutationPath = `${namespace}/updateField`;
          this.$store.commit(mutationPath, {path, value});
        }
      };
      prev[key] = field;
      return prev;
    }, {});
  };

  export default {
    components: {
      droptable
    },
    props: {
      level: {
        default() {
          return 'master'
        }
      }
    },

    data() {
      return {
        screen: 'opening',
        lastOpening: [],
        itemLog: {},
        inventoryLog: {},
        knownItems: [],
        placeholders: 0,
        opened: 0,
        enhancers: {
          ring: true,
          blm: true,
          osh: false
        },
        autoOpen: false,
        currentRareHits: 0,
        currentTotalHits: 0
      }
    },

    static() {
      return {
        currentLuckMeter: [],
        currentBLM: 0,
        autoOpenMethod: null,
      }
    },

    mounted() {
      let log = {};

      map(this.inventory, item => {
        let info = find(this.itemList, {name: item})
        if (info || item === -1) {
          log[item] = {amount: 0, rarity: item + "<br/>"}
          if (item === -1) {
            this.placeholders++;
          }
        } else {
          console.log("not found item", item, info)
        }
      })

      this.inventoryLog = log;
    },

    watch: {
      autoOpen(val) {
        if (this.autoOpenMethod) {
          clearInterval(this.autoOpenMethod)
        }

        if (val) {
          this.autoOpenMethod = setInterval(() => {
            this.open()
          }, 5)
        }
      },
      screen(val) {
        if(val !== 'opening' && this.autoOpen) {
          this.autoOpen = false;
        }
      }
    },

    computed: {
      ...mapFieldsFromDotNotation("level", {
        inventory: "inventory.items",

        loadedLevel: "level",
        rollAmount: "rolls",

        // Default numbers for rare droptable
        rareNumerator: "tables.rare.rate.numerator",
        rareDenominator: "tables.rare.rate.denominator",

        // Bad luck mitigation
        blmIncreaser: "enhancers.blm.value",
        blmMax: "enhancers.blm.max",
        blmMath: "enhancers.blm.math",

        // Tier 4 luck
        ringIncreaser: 'enhancers.ring.value',
        ringMath: 'enhancers.ring.math',

        // Orlando parameters
        oshRarity: 'enhancers.orlando.rarity',
        oshItem: 'enhancers.orlando.item',

        // Table schemes
        rareTableScheme: "tables.rare.items",
        nonRareTableScheme: "tables.nonrare.items",
        garbageTableScheme: "tables.garbage.items"
      }),
      ...mapFields('items', {
        // List of all known clue items
        itemList: "list",
      }),

      sortedItemLog() {
        return orderBy(this.itemLog, ['rarity', 'amount'], ['desc', 'desc'])
      }
    },

    methods: {
      open() {
        let amountOfRolls = Array.isArray(this.rollAmount) ? (Math.floor(Math.random() * (this.rollAmount[1] - this.rollAmount[0] + 1)) + this.rollAmount[0]) : this.rollAmount;

        console.log('CURRENT BAD LUCK MITIGATION', this.enhancers.blm, this.currentBLM)

        let hadRareRoll = false,
          rolls = []

        for (let i = 1; i <= amountOfRolls; i++) {
          console.log("")
          console.log("================")
          console.log("")
          console.log("")
          console.log("Rolling for slot:", i)

          let roll = this.roll(this.currentBLM, hadRareRoll, i === amountOfRolls)

          this.currentTotalHits++;

          if (roll.isRare) {
            console.log("IS RARE")
            this.currentRareHits++;

            // Only had rare roll upon non-coin drops to trigger global
            if (roll.item !== "100k coins" && roll.item !== '200k coins' && roll.item !== '500k coins') {
              hadRareRoll = true
            }
          }

          console.log("Rolled item:", roll.item)
          if (roll.rarity) {
            console.log("Rolled rarity:", "1/" + roll.rarity)
          }

          rolls.push(roll)
        }

        // If we didn't have any rare rolls, moditfy the denominator.
        if(!hadRareRoll) {
          if (this.enhancers.blm) {
            this.currentBLM = this.calculateBadLuckMitigation(this.currentBLM)

            console.log("Increased Bad Luck Mitigation:", this.currentBLM)
          }
        } else {
          // Reset numerator to default
          this.currentBLM = 0
            if(this.enhancers.blm) {
              console.log("Resetted Bad Luck Mitigation to 0")
            }
        }

        if (this.enhancers.osh) {
          let roll = this.simulateHit(1, this.oshRarity);

          if (roll.passed) {
            rolls.push({
              table: "rare",
              isRare: true,
              item: this.oshItem,
              rarity: this.oshRarity,
              amount: 1
            })
          }
        }

        this.lastOpening = rolls
        this.addToItemLog(this.lastOpening)
        this.opened++
      },

      roll(blm, hadRareRoll, isLastRoll) {
        // Calculate the new denominator according to user input.
        let rareDenominator = this.rareDenominator
        let numerator = this.rareNumerator

        if (this.enhancers.ring) {
          rareDenominator = Math.round(this.doDirtyMaths(rareDenominator + " " + this.ringMath + " " + this.ringIncreaser))
        }

        // Whenever we have some BLM modifier, substract it from the denominator.
        if (blm !== 0) {
            rareDenominator += blm
        }

        console.log("Your rare loot table chance was: " + numerator + "/" + rareDenominator)

        // Check if we rolled rare droptable.
        let roll = this.simulateHit(numerator, rareDenominator)

        this.currentLuckMeter = [[numerator, rareDenominator]];

        // If we have a number below the numerator, we hit the rare table!
        if (roll.passed) {
          console.log("Hit on the rare table with number: " + roll.number)

          // Perform an item hit now.
          return {
            table: "rare",
            isRare: true,
            item: this.simulateTableHit(this.rareTableScheme),
            rarity: this.calculateRarity(JSON.parse(JSON.stringify(this.currentLuckMeter))),
            mitigation: numerator,
            amount: 1
          }
        } else {
          // If we didnt hit rare table or had a 200k/500k miss, roll last item for global
          if (!hadRareRoll && isLastRoll) {
            // Perform a hit on decent table
            let hit = this.simulateTableHit(this.nonRareTableScheme)

            return {
              table: "nonrare",
              isRare: false,
              item: hit.item,
              amount: hit.amount
            }
          }

          let hit = this.simulateTableHit(this.garbageTableScheme)

          return {
            table: "garbage",
            isRare: false,
            item: hit.item,
            amount: hit.amount
          }
        }
      },

      simulateHit(numerator, denominator, isSameTable, customFailOdd) {
        let seed = this.generateSeed();
        let hit = denominator * seed
        console.log(denominator, seed, hit)
        let roll = {
          passed: hit <= numerator,
          number: hit
        }

        if (!isSameTable || (isSameTable && roll.passed)) {
          this.currentLuckMeter.push([roll.passed ? numerator : (customFailOdd ? customFailOdd : (denominator - numerator)), denominator])
        }

        console.log("HIT", hit, "ON", denominator, "SEED", seed, "PASSED", hit < numerator)
        return roll
      },

      generateSeed() {
        let rng = seedrandom();
        return rng();
      },

      simulateTableHit(scheme) {
        // First we check how many chances we got on the first level
        let totalWeight = scheme.length
        let roll = Math.floor(this.generateSeed() * totalWeight)
        console.log("Rolled rare table index:", roll, totalWeight)
        let result = scheme[roll]

        this.currentLuckMeter.push([1, totalWeight])

        // Whenever we get string, return the item
        if (typeof result === "string") {
          return result

          // Whenever we get a string, pick a random from the list since the chances of those are equal
        } else if (Array.isArray(result)) {
          this.currentLuckMeter.push([1, result.length])
          let scope = result[Math.floor(Math.random() * result.length)]

          while (Array.isArray(scope)) {
            this.currentLuckMeter.push([1, scope.length])
            scope = scope[Math.floor(Math.random() * scope.length)]
          }

          return scope
          // Whenever we get an object, simulate hits till done.
        } else if (typeof result === "object") {
          if (result.amount) {
            if (Array.isArray(result.amount)) {
              return {
                item: result.item,
                amount: this.getRandomArbitrary(result.amount[0], result.amount[1])
              }
            }
            return {item: result.item, amount: result.amount}
          }

          return this.simulateSubTableHit(result)
        }
      },

      simulateSubTableHit(roll) {
        let hit = this.simulateHit(roll.numerator, roll.denominator, roll.same, roll.miss && typeof roll.miss !== "string" ? roll.miss.custom : null)
        console.log(roll.numerator, roll.denominator, hit)

        if (hit.passed) {
          // Whenever we get a string, pick a random from the list since the chances of those are equal
          if (Array.isArray(roll.hit)) {
            this.currentLuckMeter.push([1, roll.hit.length])
            return roll.hit[Math.floor(Math.random() * roll.hit.length)]
          }
          return roll.hit
        }

        if (typeof roll.miss === "string" || roll.miss.amount) {
          return roll.miss
        }

        if (Array.isArray(roll.miss)) {
          this.currentLuckMeter.push([1, roll.miss.length])
          return roll.miss[Math.floor(Math.random() * roll.miss.length)]
        }

        if (roll.miss.custom && !roll.miss.miss) {
          return roll.miss.hit;
        }

        return this.simulateSubTableHit(roll.miss)
      },

      calculateBadLuckMitigation(current) {
        // Convert the current whenever it's below zero to check the max BLM factor.
        if (this.blmMax > (current < 0 ? (current * -1) : current)) {
          return this.doDirtyMaths(current + " " + this.blmMath + " " + this.blmIncreaser)
        }

        return current
      },

      getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      },

      calculateRarity(rolls) {
        console.log(rolls);
        //1 / ((100/1386)*(1/42)*(89/90))
        let math = "1 / ("

        rolls.map((roll, index) => {
          math = math + ((index > 0 ? "*" : "") + "(" + roll[0] + "/" + roll[1] + ")");
        })

        return Math.round(this.doDirtyMaths(math + ")"))
      },

      doDirtyMaths(calculation) {
        console.log("DIRTY MATHS", calculation)
        return new Function("return " + calculation)()
      },

      addToItemLog(items) {
        let log = {}
        map(items, item => {
          if (item.item in this.inventoryLog) {
            this.inventoryLog[item.item].amount++;
            this.inventoryLog[item.item].rarity = this.inventoryLog[item.item].rarity + "#" + (this.opened + 1) + " (1/" + item.rarity + ")<br/>"

            if (!(item.item in this.knownItems)) {
              this.knownItems[item.item] = 0;

              if ((Object.keys(this.knownItems).length + this.placeholders) === this.inventory.length) {
                alert("You've completed the " + this.level + " treasure trail log in " + (this.opened + 1) + " clues!")
                this.autoOpen = false;
              }
            }
          }

          let current = 0
          let knownItem = {}
          if (item.item in this.itemLog) {
            current = this.itemLog[item.item].amount
            knownItem = this.itemLog[item.item].info
          } else {
            let info = find(this.itemList, {name: item.item})
            if (info) {
              knownItem = info
            }
          }

          if (!(item.item in log)) {
            log[item.item] = {amount: current, info: knownItem, rarity: !item.rarity ? 0 : item.rarity}
          }

          log[item.item].amount = log[item.item].amount + item.amount
        })

        this.itemLog = {...this.itemLog, ...log}
      }
    }
  }
</script>

<style lang="scss">
  .inventory {
    &.hard {
      .collection {
        right: 102px;
      }
    }

    .collection {
      position: absolute;
      top: 43px;
      right: 106px;
      letter-spacing: -1px;
      font-size: 14px;
      text-align: right;
    }

    img {
      max-width: none;
    }

    .items {
      padding: 65px 28px 0;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      .item {
        height: 36px;
        margin-bottom: 2px;
        padding-right: 6px;
        padding-top: 4px;
        font-size: 85%;
        text-align: right;
      }
    }
  }
</style>
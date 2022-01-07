import {getField, updateField} from "vuex-map-fields"

export const state = () => ({
  level: "elite",
  rolls: [4, 6],
  inventory: {
    items: [
      "Robin hood tunic",
      "Cat staff",
      "Dragon sq shield kit (or)",
      "Bandos crozier",
      "Rune platelegs (Ancient)",
      "Rune plateskirt (Armadyl)",
      "Rune full helm (Bandos)",
      "Bandos vambraces",
      "Armadyl chaps",
      "Steel dragon mask",
      "Ice dye",
      "Third-age druidic robe top",
      "Robin hood tights",
      "Dragon cane",
      "Dragon full helm kit (sp)",
      "Ancient crozier",
      "Rune plateskirt (Ancient)",
      "Rune full helm (Armadyl)",
      "Rune kiteshield (Bandos)",
      "Bandos body",
      "Armadyl coif",
      "Mithril dragon mask",
      "Third-age dye",
      "Third-age druidic robe bottom",
      "Dragon staff",
      "Fury ornament kit",
      "Dragon platelegs kit (sp)",
      "Armadyl stole",
      "Rune full helm (Ancient)",
      "Rune kiteshield (Armadyl)",
      "Ancient vambraces",
      "Bandos chaps",
      "Black dragon mask",
      "Sack of effigies",
      "Blood dye",
      "Guthix bow",
      "Penguin staff",
      "Dragon full helm kit (or)",
      "Dragon platebody kit (sp)",
      "Bandos stole",
      "Rune kiteshield (Ancient)",
      "Rune platebody (Bandos)",
      "Ancient body",
      "Bandos coif",
      "Frost dragon mask",
      "Backstab cape",
      "Third-age druidic staff",
      "Zamorak bow",
      "Bat staff",
      "Dragon platelegs kit (or)",
      "Dragon sq shield kit (sp)",
      "Ancient stole",
      "Rune platebody (Armadyl)",
      "Rune platelegs (Bandos)",
      "Ancient chaps",
      "Armadyl vambraces",
      "Bronze dragon mask",
      "Shadow dye",
      "Third-age druidic cloak",
      "Saradomin bow",
      "Wolf staff",
      "Dragon platebody kit (or)",
      "Armadyl crozier",
      "Rune platebody (Ancient)",
      "Rune platelegs (Armadyl)",
      "Rune plateskirt (Bandos)",
      "Ancient coif",
      "Armadyl body",
      "Iron dragon mask",
      "Barrows dye",
      "Third-age druidic wreath"
    ]
  },

  tables: {
    rare: {
      rate: {
        numerator: 100,
        denominator: 1400
      },
      items: [
        {
          name: "Effigy table",
          numerator: 1,
          denominator: 5,
          hit: "Starved ancient effigy", // added
          miss: "10k coins"
        },
        [
          "Robin hood tunic",
          "Robin hood tights"
        ],
        {
          name: "Dye table",
          numerator: 1,
          denominator: 22,
          hit: "Shadow dye",
          miss: {
            numerator: 1,
            denominator: 22,
            hit: "Ice dye",
            miss: {
              numerator: 1,
              denominator: 11,
              hit: "Barrows dye",
              miss: "Elite reroll token"
            }
          }
        },
        "Fury ornament kit",
        {
          name: 'Blood dye table',
          numerator: 1,
          denominator: 70,
          hit: "Blood dye",
          miss: [
            "Dragon cane",
            "100k coins"
          ]
        },
        [
          "Black dragon mask",
          "Frost dragon mask",
          "Bronze dragon mask",
          "Iron dragon mask",
          "Steel dragon mask",
          "Mithril dragon mask"
        ],
        {
          name: 'Third-age dye table',
          numerator: 1,
          denominator: 70,
          hit: "Third-age dye",
          miss: {
            numerator: 1,
            denominator: 40,
            hit: "Sack of effigies",
            miss: {
              numerator: 1,
              denominator: 20,
              hit: "Backstab cape",
              miss: "Triskelion fragment"
            }
          }
        },
        "Rune full helm (Armadyl)",
        "Rune platebody (Armadyl)",
        "Rune platelegs (Armadyl)",
        "Rune kiteshield (Armadyl)",
        "Rune plateskirt (Armadyl)",
        {
          name: 'Third-age druidic table',
          numerator: 1,
          denominator: 51,
          hit: [
            "Third-age druidic wreath",
            "Third-age druidic robe top",
            "Third-age druidic robe bottom",
            "Third-age druidic cloak",
            "Third-age druidic staff"
          ],
          miss: [
            "Guthix bow",
            "Saradomin bow",
            "Zamorak bow"
          ]
        },
        "Rune full helm (Bandos)",
        "Rune platebody (Bandos)",
        "Rune platelegs (Bandos)",
        "Rune kiteshield (Bandos)",
        "Rune plateskirt (Bandos)",
        "Rune full helm (Ancient)",
        "Rune platebody (Ancient)",
        "Rune platelegs (Ancient)",
        "Rune kiteshield (Ancient)",
        "Rune plateskirt (Ancient)",
        "Armadyl body",
        "Armadyl coif",
        "Armadyl chaps",
        "Armadyl vambraces",
        "Bandos body",
        "Bandos coif",
        "Bandos chaps",
        "Bandos vambraces",
        "Ancient body",
        "Ancient coif",
        "Ancient chaps",
        "Ancient vambraces",
        "Armadyl stole",
        "Bandos stole",
        "Ancient stole",
        "Armadyl crozier",
        "Bandos crozier",
        "Ancient crozier",
        "Cat staff",
        "Bat staff",
        "Dragon staff",
        "Penguin staff",
        "Wolf staff",
        "Dragon full helm kit (or)",
        "Dragon platebody kit (or)",
        "Dragon platelegs kit (or)",
        "Dragon sq shield kit (or)",
        "Dragon full helm kit (sp)",
        "Dragon platebody kit (sp)",
        "Dragon platelegs kit (sp)",
        "Dragon sq shield kit (sp)"
      ]
    },

    // Non Rare Table is hit whenever you fail for Rare Table, if not hitted in previous rolls.
    // This is the GLOBAL droptable
    nonrare: {
      items: [
        {item: "Coins", amount: 10000},
        {item: "Biscuits", amount: [2, 27]},
        {item: "Teleport scrolls", amount: [1, 10]},
        {item: "God pages", amount: [1, 3]},
        {item: "Firelighters", amount: [1, 3]},
        {item: "God arrows", amount: [20, 110]},
        {item: "Meerkat pouches", amount: [2, 6]}
      ]
    },

    // Garbage Table is hit whenever you got a Rare Table hit in previous rolls, but not in this current roll.
    // This is the COMMON droptable.
    // Proof: https://discordapp.com/channels/332595657363685377/332595657363685377/596313960412610571
    garbage: {
      items: [
        {item: "Huge plated rune salvage", amount: 1},
        {item: "Palm tree seed", amount: 1},
        {item: "Papaya tree seed", amount: 1},
        {item: "Grapevine seed", amount: 1},
        {item: "Yew seed", amount: 1},
        {item: "Super restore potion", amount: 9},
        {item: "Antifire potion", amount: 9},
        {item: "Water talisman", amount: 8},
        {item: "Swamp lizard", amount: 15},
        {item: "Runite stone spirit", amount: 5},
        {item: "Unicorn horn", amount: 15},
        {item: "Royal dragonhide", amount: 15},
        {item: "Onyx bolt tips", amount: 12},
        {item: "Uncut dragonstones", amount: 2},
        {item: "Battlestaff", amount: 8},
        {item: "Mahogany planks", amount: 40},
        {item: "Dragon helm", amount: 1}
      ]
    }
  },

  enhancers: {
    // TIER 4 LUCK
    ring: {
      value: 0.99,
      math: "*"
    },

    // BAD LUCK MITIGATION (+25 to numerator on fail, max 75)
    blm: {
      value: 25,
      math: "-",
      max: 75
    },

    orlando: {
      rarity: 90,
      item: "Reward casket (hard)"
    }
  }
})

export const getters = {
  getField
}

export const mutations = {
  updateField
}
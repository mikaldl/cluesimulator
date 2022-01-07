import {getField, updateField} from 'vuex-map-fields';

export const state = () => ({
  level: "master",
  rolls: 6,
  inventory: {
    items: [
      'Flaming sword token',
      'Pyjama top',
      'Ring of trees',
      'Stylish glasses (green)',
      'Dragonstone dragon mask',
      'Reaper ornament kit',
      'Tuxedo cravat',
      'Heated tea flask',
      'Barrows dye',
      'Second-Age platelegs',
      'Second-Age range coif',
      'Elemental impetus',
      'Pyjama bottoms',
      'Round glasses (black)',
      'Half-moon spectacles (black)',
      'Onyx dragon mask',
      'Soul ornament kit',
      'Evening bolero',
      'Elemental battlestaff',
      'Ice dye',
      'Second-Age sword',
      'Second-Age range top',
      'Golden thread',
      'Pyjama slippers',
      'Round glasses (blue)',
      'Half-moon spectacles (blue)',
      'Hydrix dragon mask',
      'Tuxedo jacket',
      'Evening dipped skirt',
      'Pack yak mask',
      'Third-age dye',
      'Second-Age mage mask',
      'Second-Age range legs',
      'Box of clue scrolls',
      'Heavy chest',
      'Round glasses (green)',
      'Half-moon spectacles (green)',
      'Gilded boater',
      'Tuxedo trousers',
      'Evening shoes',
      'Sack of effigies',
      'Blood dye',
      'Second-Age robe top',
      'Second-Age bow',
      'Hobby unicorn (white)',
      'Bag of clues',
      'Stylish glasses (black)',
      'Adamant dragon mask',
      'Gilded cavalier',
      'Tuxedo shoes',
      'Evening gloves',
      'Backstab cape',
      'Second-Age full helm',
      'Second-Age robe bottom',
      'Orlando Smith\'s hat',
      'Hobby unicorn (black)',
      'Ring of coins',
      'Stylish glasses (blue)',
      'Rune dragon mask',
      'Samurai kasa',
      'Tuxedo gloves',
      'Evening masquerade mask',
      'Shadow dye',
      'Second-Age platebody',
      'Second-Age staff',
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
          name: 'Orlando Smith\'s table',
          numerator: 1,
          denominator: 180,
          hit: "Orlando Smith's hat", // added
          miss: "Elemental battlestaff" // added
        },
        [
          "Golden thread", // added
          "Elemental impetus" // added
        ],
        {
          name: 'Dye table',
          numerator: 1,
          denominator: 28,
          hit: "Shadow dye", // added
          miss: {
            numerator: 1,
            denominator: 19,
            hit: "Ice dye", // added
            miss: {
              numerator: 1,
              denominator: 14,
              hit: "Barrows dye", // added
              miss: "Master reroll token" // added
            }
          }
        },
        [
          "Round glasses (black)", // added
          "Round glasses (green)", // added
          "Round glasses (blue)" // added
        ],
        {
          name: 'Third-age dye table',
          numerator: 1,
          denominator: 85,
          hit: "Third-age dye", // added
          miss: {
            numerator: 1,
            denominator: 60,
            hit: "Sack of effigies", // added
            miss: {
              numerator: 1,
              denominator: 30,
              hit: "Backstab cape", // added
              miss: "Triskelion fragment" // added
            }
          }
        },
        "Flaming sword token", // added
        {
          name: 'Blood dye table',
          numerator: 1,
          denominator: 90,
          hit: "Blood dye", // added
          miss: "200k coins" // added
        },
        [
          "Half-moon spectacles (black)", // added
          "Half-moon spectacles (green)", // added
          "Half-moon spectacles (blue)" // added
        ],
        {
          name: 'Effigy table',
          numerator: 1,
          denominator: 5,
          hit: "Starved ancient effigy", // added
          miss: "Triskelion fragment" // added
        },
        [
          "Stylish glasses (black)", // added
          "Stylish glasses (green)", // added
          "Stylish glasses (blue)" // added
        ],
        {
          name: 'Second-age table',
          numerator: 1,
          denominator: 300,
          same: true,
          hit: [
            "Second-Age full helm", // added
            "Second-Age platebody", // added
            "Second-Age platelegs" // added
          ],
          miss: {
            numerator: 1,
            denominator: 300,
            same: true,
            hit: [
              "Second-Age mage mask", // added
              "Second-Age robe top", // added
              "Second-Age robe bottom" // added
            ],
            miss: {
              numerator: 1,
              denominator: 300,
              same: true,
              hit: [
                "Second-Age range coif", // added
                "Second-Age range top", // added
                "Second-Age range legs" // added
              ],
              miss: {
                numerator: 1,
                denominator: 300,
                same: true,
                hit: "Second-Age sword", // added
                miss: {
                  numerator: 1,
                  denominator: 300,
                  same: true,
                  hit: "Second-Age staff", // added
                  miss: {
                    numerator: 1,
                    denominator: 300,
                    same: true,
                    hit: "Second-Age bow", // added
                    miss: {
                      numerator: 195,
                      denominator: 300,
                      hit: "Master reroll token", // added
                      miss: {
                        custom: 99,
                        hit: "500k coins" // added
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "Pyjama slippers", // added
        "Heavy chest", // added
        "Bag of clues", // added
        "Box of clue scrolls",
        "Ring of coins", // added
        "Ring of trees", // added
        "Hobby unicorn (white)", // added
        "Hobby unicorn (black)", // added
        "Pyjama top", // added
        "Pyjama bottoms", // added
        "Adamant dragon mask", // added
        "Rune dragon mask", // added
        "Dragonstone dragon mask",
        "Onyx dragon mask", // added
        "Hydrix dragon mask", // added
        "Gilded boater", // added
        "Gilded cavalier", // added
        "Samurai kasa", // added
        "Reaper ornament kit", // added
        "Soul ornament kit", // added
        "Tuxedo jacket", // added
        "Tuxedo trousers", // added
        "Tuxedo shoes", // added
        "Tuxedo gloves", // added
        "Tuxedo cravat", // added
        "Evening bolero", // added
        "Evening dipped skirt", // added
        "Evening shoes", // added
        "Evening gloves", // added
        "Evening masquerade mask", // added
        "Heated tea flask", // added
        "Pack yak mask", // added
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
        {item: "Battlestaff", amount: 15},
        {item: "Crystal keys", amount: 2},
        {item: "Dragon arrowheads", amount: 100},
        {item: "Hydrix bolt tips", amount: 25},
        {item: "Onyx bolt tips", amount: 25},
        {item: "Papaya tree seed", amount: 1},
        {item: "Runite stone spirit", amount: 7},
        {item: "Water talisman", amount: 10},
        {item: "Wines of zamorak", amount: 4},
        {item: "100k coins", amount: 1},
        {item: "Yew seed", amount: 1},
        {item: "Dragon helm", amount: 1},
        {item: "Mahogany planks", amount: 60},
        {item: "Palm tree seed", amount: 1},
        {item: "Prayer renewals", amount: 4},
        {
          numerator: 1,
          denominator: 94,
          same: true,
          hit: {item: "Uncut onyx", amount: 1}, // added
          miss: {item: "Uncut dragonstones", amount: 2}
        },
        {item: "Weapon poison++ potions", amount: 2},
        {item: "Wines of saradomin", amount: 4},
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
      math: "+",
      max: 75
    },


    orlando: {
      rarity: 100,
      item: 'Reward casket (elite)'
    }
  }
})

export const getters = {
  getField
};

export const mutations = {
  updateField
};

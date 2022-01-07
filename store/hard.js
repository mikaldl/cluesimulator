import {getField, updateField} from 'vuex-map-fields';

export const state = () => ({
  level: "hard",
  rolls: [4, 6],
  inventory: {
    items: [
      'Robin hood hat',
      'Rune platebody (g)',
      'Rune platelegs (Zamorak)',
      'Rune plateskirt (Guthix)',
      'Rune kiteshield (Saradomin)',
      'Rune kiteshield (h1)',
      'Blue dragonhide chaps (t)',
      'Rune full helm (h1)',
      'Saradomin vambraces',
      'Guthix chaps',
      'Saradomin stole',
      'Rune cane',
      'Rune platelegs (h2)',
      'Rune platelegs (h4)',
      'Bandos cloak',
      'White unicorn mask',
      'Amulet of fury (t)',
      'Rune platelegs (gilded)',
      'Third-age range chaps',
      'Third-age platelegs',
      'Rune platebody (t)',
      'Rune platelegs (g)',
      'Rune plateskirt (Zamorak)',
      'Rune kiteshield (Guthix)',
      'Rune full helm (Saradomin)',
      'Rune kiteshield (h2)',
      'Blue dragonhide body (g)',
      'Rune full helm (h2)',
      'Saradomin body',
      'Guthix coif',
      'Saradomin crozier',
      'Top hat',
      'Rune plateskirt (h2)',
      'Rune plateskirt (h4)',
      'Ancient cloak',
      'Black unicorn mask',
      'Backstab cape',
      'Rune plateskirt (gilded)',
      'Third-age vambraces',
      'Third-age platebody',
      'Rune platelegs (t)',
      'Rune plateskirt (g)',
      'Rune kiteshield (Zamorak)',
      'Rune full helm (Guthix)',
      'Tan cavalier',
      'Rune kiteshield (h3)',
      'Blue dragonhide chaps (g)',
      'Rune full helm (h3)',
      'Saradomin chaps',
      'Zamorak vambraces',
      'Guthix stole',
      'Rune platebody (h1)',
      'Rune platebody (h3)',
      'Rune platebody (h5)',
      'Armadyl mitre',
      'Green dragon mask',
      'Sack of effigies',
      'Rune full helm (gilded)',
      'Third-age robe top',
      'Third-age full helmet',
      'Rune plateskirt (t)',
      'Rune kiteshield (g)',
      'Rune full helm (Zamorak)',
      'Rune platebody (Saradomin)',
      'Dark cavalier',
      'Rune kiteshield (h4)',
      'Enchanted hat',
      'Rune full helm (h4)',
      'Saradomin coif',
      'Zamorak body',
      'Guthix crozier',
      'Rune platelegs (h1)',
      'Rune platelegs (h3)',
      'Rune platelegs (h5)',
      'Bandos mitre',
      'Blue dragon mask',
      'Shadow dye',
      'Rune kiteshield (gilded)',
      'Third-age robe',
      'Third-age kiteshield',
      'Rune kiteshield (t)',
      'Rune full helm (g)',
      'Rune platebody (Guthix)',
      'Rune platelegs (Saradomin)',
      'Black cavalier',
      'Rune kiteshield (h5)',
      'Enchanted top',
      'Rune full helm (h5)',
      'Guthix vambraces',
      'Zamorak chaps',
      'Zamorak stole',
      'Rune plateskirt (h1)',
      'Rune plateskirt (h3)',
      'Rune plateskirt (h5)',
      'Ancient mitre',
      'Red dragon mask',
      'Barrows dye',
      'Third-age range coif',
      'Third-age mage hat',
      -1,
      'Rune full helm (t)',
      'Rune platebody (Zamorak)',
      'Rune platelegs (Guthix)',
      'Rune plateskirt (Saradomin)',
      'Pirate\'s hat',
      'Blue dragonhide body (t)',
      'Enchanted robe',
      'Amulet of glory (t)',
      'Guthix body',
      'Zamorak coif',
      'Zamorak crozier',
      'Rune platebody (h2)',
      'Rune platebody (h4)',
      'Armadyl cloak',
      'Fox mask',
      'Explosive barrel',
      'Rune platebody (gilded)',
      'Third-age range top',
      'Third-age amulet',
    ],
  },
  tables: {
    rare: {
      rate: {
        numerator: 100,
        denominator: 1600
      },
      items: [
        {
          name: "Sack of effigies table",
          numerator: 1,
          denominator: 30,
          hit: "Sack of effigies", // added
          miss: {
            numerator: 1,
            denominator: 120,
            hit: "Explosive barrel", // added
            miss: "2500 coins" // added
          }
        },
        [
          'Green dragon mask',
          'Blue dragon mask',
          'Red dragon mask'
        ],
        {
          name: "Backstab table",
          numerator: 1,
          denominator: 15,
          hit: "Backstab cape", // added
          miss: "5k coins"
        },
        [
          'Fox mask',
          'White unicorn mask',
          'Black unicorn mask'
        ],
        {
          name: "Dye table",
          numerator: 1,
          denominator: 10,
          hit: "Shadow dye",
          miss: {
            numerator: 1,
            denominator: 5,
            hit: 'Barrows dye',
            miss: '10k coins'
          }
        },
        'Rune full helm (Guthix)',
        'Rune platebody (Guthix)',
        'Rune platelegs (Guthix)',
        'Rune kiteshield (Guthix)',
        'Rune plateskirt (Guthix)',
        {
          name: "Third-age table",
          numerator: 10,
          denominator: 11,
          hit: [
            'Rune full helm (gilded)',
            'Rune platebody (gilded)',
            'Rune platelegs (gilded)',
            'Rune plateskirt (gilded)',
            'Rune kiteshield (gilded)',
            'Super energy potion',
            'Super restore potion',
            'Antifire potion',
            'Super set potion',
            'Starved ancient effigy'
          ],
          miss: [
            'Third-age full helmet',
            'Third-age platebody',
            'Third-age platelegs',
            'Third-age kiteshield',
            'Third-age mage hat',
            'Third-age robe top',
            'Third-age robe',
            'Third-age amulet',
            'Third-age range coif',
            'Third-age range top',
            'Third-age range chaps',
            'Third-age vambraces',
          ]
        },
        'Rune full helm (Saradomin)',
        'Rune platebody (Saradomin)',
        'Rune platelegs (Saradomin)',
        'Rune kiteshield (Saradomin)',
        'Rune plateskirt (Saradomin)',
        'Rune full helm (Zamorak)',
        'Rune platebody (Zamorak)',
        'Rune platelegs (Zamorak)',
        'Rune kiteshield (Zamorak)',
        'Rune plateskirt (Zamorak)',
        'Rune full helm (g)',
        'Rune platebody (g)',
        'Rune platelegs (g)',
        'Rune kiteshield (g)',
        'Rune plateskirt (g)',
        'Rune full helm (t)',
        'Rune platebody (t)',
        'Rune platelegs (t)',
        'Rune kiteshield (t)',
        'Rune plateskirt (t)',
        'Rune full helm (h1)',
        'Rune platebody (h1)',
        'Rune platelegs (h1)',
        'Rune kiteshield (h1)',
        'Rune plateskirt (h1)',
        'Rune full helm (h2)',
        'Rune platebody (h2)',
        'Rune platelegs (h2)',
        'Rune kiteshield (h2)',
        'Rune plateskirt (h2)',
        'Rune full helm (h3)',
        'Rune platebody (h3)',
        'Rune platelegs (h3)',
        'Rune kiteshield (h3)',
        'Rune plateskirt (h3)',
        'Rune full helm (h4)',
        'Rune platebody (h4)',
        'Rune platelegs (h4)',
        'Rune kiteshield (h4)',
        'Rune plateskirt (h4)',
        'Rune full helm (h5)',
        'Rune platebody (h5)',
        'Rune platelegs (h5)',
        'Rune kiteshield (h5)',
        'Rune plateskirt (h5)',
        'Blue dragonhide body (g)',
        'Blue dragonhide chaps (g)',
        'Blue dragonhide body (t)',
        'Blue dragonhide chaps (t)',
        'Enchanted hat',
        'Enchanted top',
        'Enchanted robe',
        'Saradomin crozier',
        'Zamorak crozier',
        'Guthix crozier',
        'Saradomin stole',
        'Zamorak stole',
        'Guthix stole',
        'Armadyl mitre',
        'Bandos mitre',
        'Ancient mitre',
        'Armadyl cloak',
        'Bandos cloak',
        'Ancient cloak',
        'Guthix body',
        'Guthix coif',
        'Guthix chaps',
        'Guthix vambraces',
        'Saradomin body',
        'Saradomin coif',
        'Saradomin chaps',
        'Saradomin vambraces',
        'Zamorak body',
        'Zamorak coif',
        'Zamorak chaps',
        'Zamorak vambraces',
        'Tan cavalier',
        'Black cavalier',
        'Dark cavalier',
        'Pirate\'s hat',
        'Robin hood hat',
        'Amulet of fury (t)',
        'Amulet of glory (t)',
        'Top hat',
        'Rune cane'
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
        {item: 'Medium spiky rune salvage', amount: 1},
        {item: 'Medium bladed rune salvage', amount: 1},
        {item: 'Large bladed rune salvage', amount: 1},
        {item: 'Medium plated rune salvage', amount: 1},
        {item: 'Large plated rune salvage', amount: 1},
        {item: 'Huge plated rune salvage', amount: 1},
        {item: 'Black dragonhide', amount: 5},
        {item: 'Mystic air staff', amount: 1},
        {item: 'Mystic fire staff', amount: 1},
        {item: 'Mystic earth staff', amount: 1},
        {item: 'Mystic water staff', amount: 1},
        {item: 'Mahogany planks', amount: 24},
        {item: 'Rune arrows', amount: 150},
        {item: 'Law rune', amount: 75},
        {item: 'Nature rune', amount: 75},
        {item: 'Blood rune', amount: 75},
        {item: 'Astral rune', amount: 75}
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
      value: 1,
      math: "+",
      max: 100
    },

    orlando: {
      rarity: 90,
      item: 'Reward casket (medium)'
    }
  }
})

export const getters = {
  getField
};

export const mutations = {
  updateField
};

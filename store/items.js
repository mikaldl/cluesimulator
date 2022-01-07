import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
    list: [
        /***
         *
         * RARE DROP TABLE
         *
         */
        {
            id: 33294,
            name: "Barrows dye"
        },
        {
            id: 33298,
            name: "Third-age dye"
        },
        {
            id: 33296,
            name: "Shadow dye"
        },
        {
            id: 41887,
            name: "Ice dye"
        },
        {
            id: 36274,
            name: "Blood dye"
        },
        {
            id: 41820,
            name: "Elemental impetus"
        },
        {
            id: 41843,
            name: "Golden thread"
        },
        {
            id: 41885,
            name: "Elemental battlestaff"
        },
        {
            id: 41984,
            name: "Evening masquerade mask"
        },
        {
            id: 41980,
            name: "Evening shoes"
        },
        {
            id: 41982,
            name: "Evening gloves"
        },
        {
            id: 41978,
            name: "Evening dipped skirt"
        },
        {
            id: 41976,
            name: "Evening bolero"
        },
        {
            id: 41987,
            name: "Heated tea flask"
        },
        {
            id: 28547,
            name: "Triskelion fragment"
        },
        {
            id: 41956,
            name: "Reaper ornament kit"
        },
        {
            id: 41961,
            name: "Soul ornament kit"
        },
        
        {
            id: 41818,
            name: "Elite reroll token"
        },
        {
            id: 41819,
            name: "Master reroll token"
        },
        {
            id: 41809,
            name: "Flaming sword token"
        },
        {
            id: 41906,
            name: "Ring of coins"
        },
        {
            id: 24860,
            name: "500k coins"
        },
        {
            id: 617,
            name: "200k coins"
        },
        {
            id: 617,
            name: "5k coins"
        },
        {
            id: 18778,
            name: "Starved ancient effigy"
        },
        {
            id: 41954,
            name: "Samurai kasa"
        },
        {
            id: 41966,
            name: "Tuxedo jacket"
        },
        {
            id: 41968,
            name: "Tuxedo trousers"
        },
        {
            id: 41970,
            name: "Tuxedo shoes"
        },
        {
            id: 41972,
            name: "Tuxedo gloves"
        },
        {
            id: 41974,
            name: "Tuxedo cravat"
        },
        {
            id: 41943,
            name: "Pack yak mask"
        },
        {
            id: 41946,
            name: "Gilded boater"
        },
        {
            id: 41948,
            name: "Gilded cavalier"
        },
        {
            id: 41940,
            name: "Hydrix dragon mask"
        },
        {
            id: 41934,
            name: "Onyx dragon mask"
        },
        {
            id: 41937,
            name: "Rune dragon mask"
        },
        {
            id: 41931,
            name: "Dragonstone dragon mask"
        },
        {
            id: 41928,
            name: "Adamant dragon mask"
        },
        {
            id: 41892,
            name: "Hobby unicorn (white)"
        },
        {
            id: 41894,
            name: "Hobby unicorn (black)"
        },
        {
            id: 41896,
            name: "Pyjama top"
        },
        {
            id: 41898,
            name: "Pyjama bottoms"
        },
        {
            id: 41900,
            name: "Pyjama slippers"
        },
        {
            id: 41902,
            name: "Heavy chest"
        },
        {
            id: 41904,
            name: "Bag of clues"
        },
        {
            id: 41986,
            name: "Box of clue scrolls"
        },
        {
            id: 41908,
            name: "Ring of trees"
        },
        {
            id: 41910,
            name: "Round glasses (black)"
        },
        {
            id: 41912,
            name: "Round glasses (green)"
        },
        {
            id: 41847,
            name: "Robin hood tights"
        },
        
        {
            id: 41845,
            name: "Robin hood tunic"
        },
        {
            id: 41914,
            name: "Round glasses (blue)"
        },
        {
            id: 41916,
            name: "Stylish glasses (black)"
        },
        {
            id: 41918,
            name: "Stylish glasses (green)"
        },
        {
            id: 41920,
            name: "Stylish glasses (blue)"
        },
        {
            id: 41922,
            name: "Half-moon spectacles (black)"
        },
        {
            id: 41924,
            name: "Half-moon spectacles (green)"
        },
        {
            id: 41926,
            name: "Half-moon spectacles (blue)"
        },
        {
            id: 41995,
            name: "Orlando Smith\'s hat"
        },
        {
            id: 33518,
            name: "Sack of effigies"
        },
        {
            id: 33520,
            name: "Backstab cape"
        },
        {
            id: 41861,
            name: "Second-Age full helm"
        },
        {
            id: 41863,
            name: "Second-Age platebody"
        },
        {
            id: 41865,
            name: "Second-Age platelegs"
        },
        {
            id: 41867,
            name: "Second-Age sword"
        },
        {
            id: 41869,
            name: "Second-Age mage mask"
        },
        {
            id: 41871,
            name: "Second-Age robe top"
        },
        {
            id: 41873,
            name: "Second-Age robe bottom"
        },
        {
            id: 41875,
            name: "Second-Age staff"
        },
        {
            id: 41877,
            name: "Second-Age range coif"
        },
        {
            id: 41879,
            name: "Second-Age range top"
        },
        {
            id: 41881,
            name: "Second-Age range legs"
        },
        {
            id: 41883,
            name: "Second-Age bow"
        },
        {
            id: 42004,
            name: "Reward casket (elite)"
        },
        {
            id: 42002,
            name: "Reward casket (medium)"
        },
        {
            id: 42003,
            name: "Reward casket (hard)"
        },
        {
            id: 7330,
            name: "Firelighters"
        },
        {
            id: 19467,
            name: "Biscuits"
        },
        {
            id: 19475,
            name: "Teleport scrolls"
        },
        {
            id: 19603,
            name: "God pages"
        },
        {
            id: 19152,
            name: "God arrows"
        },
        {
            id: 19622,
            name: "Meerkat pouches"
        },
        {
            id: 1391,
            name: "Battlestaff"
        },
        {
            id: 989,
            name: "Crystal keys"
        },
        {
            id: 11237,
            name: "Dragon arrowheads"
        },
        {
            id: 31867,
            name: "Hydrix bolt tips"
        },
        {
            id: 9194,
            name: "Onyx bolt tips"
        },
        {
            id: 5288,
            name: "Papaya tree seed"
        },
        {
            id: 44808,
            name: "Runite stone spirit"
        },
        {
            id: 1631,
            name: "Uncut dragonstones"
        },
        {
            id: 1444,
            name: "Water talisman"
        },
        {
            id: 245,
            name: "Wines of zamorak"
        },
        {
            id: 24860,
            name: "Coins"
        },
        {
            id: 24860,
            name: "100k coins"
        },
        {
            id: 24860,
            name: "10k coins"
        },
        {
            id: 24860,
            name: "20k coins"
        },
        {
            id: 24860,
            name: "25k coins"
        },
        {
            id: 24860,
            name: "2500 coins"
        },
        {
            id: 5315,
            name: "Yew seed"
        },
        {
            id: 1149,
            name: "Dragon helm"
        },
        {
            id: 8782,
            name: "Mahogany planks"
        },
        {
            id: 5289,
            name: "Palm tree seed"
        },
        {
            id: 21630,
            name: "Prayer renewals"
        },
        {
            id: 6571,
            name: "Uncut onyx"
        },
        {
            id: 5940,
            name: "Weapon poison++ potions"
        },
        {
            id: 28255,
            name: "Wines of saradomin"
        },
        {
            id: 10149,
            name: 'Swamp lizard'
        },
        {
            id: 3024,
            name: 'Super restore potion'
        },
        {
            id: 3016,
            name: 'Super energy potion'
        },
        {
            id: 28264,
            name: 'Grapevine seed'
        },
        {
            id: 1487,
            name: 'Unicorn horn'
        },
        {
            id: 24372,
            name: 'Royal dragonhide'
        },
        {
            id: 10470,
            name: 'Saradomin stole'
        },
        {
            id: 10472,
            name: 'Guthix stole'
        },
        {
            id: 10474,
            name: 'Zamorak stole'
        },
        {
            id: 19392,
            name: 'Armadyl stole'
        },
        {
            id: 19394,
            name: 'Bandos stole'
        },
        {
            id: 19396,
            name: 'Ancient stole'
        },
        {
            id: 10440,
            name: 'Saradomin crozier'
        },
        {
            id: 10442,
            name: 'Guthix crozier'
        },
        {
            id: 10444,
            name: 'Zamorak crozier'
        },
        {
            id: 19362,
            name: 'Armadyl crozier'
        },
        {
            id: 19364,
            name: 'Bandos crozier'
        },
        {
            id: 19366,
            name: 'Ancient crozier'
        },
        {
            id: 19281,
            name: 'Green dragon mask'
        },
        {
            id: 19284,
            name: 'Blue dragon mask'
        },
        {
            id: 19287,
            name: 'Red dragon mask'
        },
        {
            id: 19290,
            name: 'Black dragon mask'
        },
        {
            id: 19293,
            name: 'Frost dragon mask'
        },
        {
            id: 19296,
            name: 'Bronze dragon mask'
        },
        {
            id: 19299,
            name: 'Iron dragon mask'
        },
        {
            id: 19302,
            name: 'Steel dragon mask'
        },
        {
            id: 19305,
            name: 'Mithril dragon mask'
        },
        {
            id: 19333,
            name: 'Fury ornament kit'
        },
        {
            id: 19346,
            name: 'Dragon full helm kit (or)'
        },
        {
            id: 19348,
            name: 'Dragon platebody kit (or)'
        },
        {
            id: 19350,
            name: 'Dragon platelegs kit (or)'
        },
        {
            id: 19352,
            name: 'Dragon sq shield kit (or)'
        },
        {
            id: 19354,
            name: 'Dragon full helm kit (sp)'
        },
        {
            id: 19356,
            name: 'Dragon platebody kit (sp)'
        },
        {
            id: 19358,
            name: 'Dragon platelegs kit (sp)'
        },
        {
            id: 19360,
            name: 'Dragon sq shield kit (sp)'
        },
        {
            id: 2452,
            name: 'Antifire potion'
        },
        {
            id: 47314,
            name: 'Huge plated rune salvage'
        },
        {
            id: 19428,
            name: 'Rune platebody (Bandos)'
        },
        {
            id: 19431,
            name: 'Rune platelegs (Bandos)'
        },
        {
            id: 19434,
            name: 'Rune plateskirt (Bandos)'
        },
        {
            id: 19437,
            name: 'Rune full helm (Bandos)'
        },
        {
            id: 19440,
            name: 'Rune kiteshield (Bandos)'
        },
        {
            id: 19317,
            name: 'Third-age druidic robe top'
        },
        {
            id: 19314,
            name: 'Third-age druidic wreath'
        },
        {
            id: 19320,
            name: 'Third-age druidic robe bottom'
        },
        {
            id: 19308,
            name: 'Third-age druidic staff'
        },
        {
            id: 19311,
            name: 'Third-age druidic cloak'
        },
        {
            id: 19323,
            name: 'Dragon staff'
        },
        {
            id: 41889,
            name: 'Dragon cane'
        },
        {
            id: 19325,
            name: 'Penguin staff'
        },
        {
            id: 19327,
            name: 'Bat staff'
        },
        {
            id: 19329,
            name: 'Wolf staff'
        },
        {
            id: 19331,
            name: 'Cat staff'
        },
        {
            id: 2436,
            name: 'Super set potion'
        },
        {
            id: 10330,
            name: 'Third-age range top'
        },
        {
            id: 10332,
            name: 'Third-age range chaps'
        },
        {
            id: 10334,
            name: 'Third-age range coif'
        },
        {
            id: 10336,
            name: 'Third-age vambraces'
        },
        {
            id: 10338,
            name: 'Third-age robe top'
        },
        {
            id: 10340,
            name: 'Third-age robe'
        },
        {
            id: 10342,
            name: 'Third-age mage hat'
        },
        {
            id: 10344,
            name: 'Third-age amulet'
        },
        {
            id: 10346,
            name: 'Third-age platelegs'
        },
        {
            id: 10348,
            name: 'Third-age platebody'
        },
        {
            id: 10350,
            name: 'Third-age full helmet'
        },
        {
            id: 10352,
            name: 'Third-age kiteshield'
        },
        {
            id: 3481,
            name: 'Rune platebody (gilded)'
        },
        {
            id: 3483,
            name: 'Rune platelegs (gilded)'
        },
        {
            id: 3485,
            name: 'Rune plateskirt (gilded)'
        },
        {
            id: 3486,
            name: 'Rune full helm (gilded)'
        },
        {
            id: 3488,
            name: 'Rune kiteshield (gilded)'
        },
        {
            id: 33516,
            name: 'Explosive barrel'
        },
        {
            id: 19275,
            name: 'White unicorn mask'
        },
        {
            id: 19278,
            name: 'Black unicorn mask'
        },
        {
            id: 19272,
            name: 'Fox mask'
        },
        {
            id: 2669,
            name: 'Rune platebody (Guthix)'
        },
        {
            id: 2671,
            name: 'Rune platelegs (Guthix)'
        },
        {
            id: 3480,
            name: 'Rune plateskirt (Guthix)'
        },
        {
            id: 2673,
            name: 'Rune full helm (Guthix)'
        },
        {
            id: 2675,
            name: 'Rune kiteshield (Guthix)'
        },
        {
            id: 2661,
            name: 'Rune platebody (Saradomin)'
        },
        {
            id: 2663,
            name: 'Rune platelegs (Saradomin)'
        },
        {
            id: 3479,
            name: 'Rune plateskirt (Saradomin)'
        },
        {
            id: 2665,
            name: 'Rune full helm (Saradomin)'
        },
        {
            id: 2667,
            name: 'Rune kiteshield (Saradomin)'
        },
        {
            id: 2653,
            name: 'Rune platebody (Zamorak)'
        },
        {
            id: 2665,
            name: 'Rune platelegs (Zamorak)'
        },
        {
            id: 3478,
            name: 'Rune plateskirt (Zamorak)'
        },
        {
            id: 2657,
            name: 'Rune full helm (Zamorak)'
        },
        {
            id: 2659,
            name: 'Rune kiteshield (Zamorak)'
        },
        {
            id: 2623,
            name: 'Rune platebody (t)'
        },
        {
            id: 2625,
            name: 'Rune platelegs (t)'
        },
        {
            id: 3477,
            name: 'Rune plateskirt (t)'
        },
        {
            id: 2627,
            name: 'Rune full helm (t)'
        },
        {
            id: 2629,
            name: 'Rune kiteshield (t)'
        },
        {
            id: 2615,
            name: 'Rune platebody (g)'
        },
        {
            id: 2617,
            name: 'Rune platelegs (g)'
        },
        {
            id: 3476,
            name: 'Rune plateskirt (g)'
        },
        {
            id: 2619,
            name: 'Rune full helm (g)'
        },
        {
            id: 2621,
            name: 'Rune kiteshield (g)'
        },
        {
            id: 19179,
            name: 'Rune platebody (h1)'
        },
        {
            id: 19182,
            name: 'Rune platelegs (h1)'
        },
        {
            id: 19185,
            name: 'Rune plateskirt (h1)'
        },
        {
            id: 10286,
            name: 'Rune full helm (h1)'
        },
        {
            id: 7336,
            name: 'Rune kiteshield (h1)'
        },
        {
            id: 19200,
            name: 'Rune platebody (h2)'
        },
        {
            id: 19203,
            name: 'Rune platelegs (h2)'
        },
        {
            id: 19206,
            name: 'Rune plateskirt (h2)'
        },
        {
            id: 10288,
            name: 'Rune full helm (h2)'
        },
        {
            id: 7342,
            name: 'Rune kiteshield (h2)'
        },
        {
            id: 19221,
            name: 'Rune platebody (h3)'
        },
        {
            id: 19224,
            name: 'Rune platelegs (h3)'
        },
        {
            id: 19227,
            name: 'Rune plateskirt (h3)'
        },
        {
            id: 10290,
            name: 'Rune full helm (h3)'
        },
        {
            id: 7348,
            name: 'Rune kiteshield (h3)'
        },
        {
            id: 19242,
            name: 'Rune platebody (h4)'
        },
        {
            id: 19245,
            name: 'Rune platelegs (h4)'
        },
        {
            id: 19248,
            name: 'Rune plateskirt (h4)'
        },
        {
            id: 10292,
            name: 'Rune full helm (h4)'
        },
        {
            id: 7354,
            name: 'Rune kiteshield (h4)'
        },
        {
            id: 19263,
            name: 'Rune platebody (h5)'
        },
        {
            id: 19266,
            name: 'Rune platelegs (h5)'
        },
        {
            id: 19269,
            name: 'Rune plateskirt (h5)'
        },
        {
            id: 10294,
            name: 'Rune full helm (h5)'
        },
        {
            id: 7360,
            name: 'Rune kiteshield (h5)'
        },
        {
            id: 7376,
            name: 'Blue dragonhide body (t)'
        },
        {
            id: 7384,
            name: 'Blue dragonhide chaps (t)'
        },
        {
            id: 7374,
            name: 'Blue dragonhide body (g)'
        },
        {
            id: 7382,
            name: 'Blue dragonhide chaps (g)'
        },
        {
            id: 7398,
            name: 'Enchanted robe'
        },
        {
            id: 7399,
            name: 'Enchanted top'
        },
        {
            id: 7400,
            name: 'Enchanted hat'
        },
        {
            id: 10376,
            name: 'Guthix vambraces'
        },
        {
            id: 10378,
            name: 'Guthix body'
        },
        {
            id: 10380,
            name: 'Guthix chaps'
        },
        {
            id: 10382,
            name: 'Guthix coif'
        },
        {
            id: 10448,
            name: 'Guthix cloak'
        },
        {
            id: 10454,
            name: 'Guthix mitre'
        },
        {
            id: 10384,
            name: 'Saradomin vambraces'
        },
        {
            id: 10386,
            name: 'Saradomin body'
        },
        {
            id: 10388,
            name: 'Saradomin chaps'
        },
        {
            id: 10390,
            name: 'Saradomin coif'
        },
        {
            id: 10446,
            name: 'Saradomin cloak'
        },
        {
            id: 10452,
            name: 'Saradomin mitre'
        },
        {
            id: 10370,
            name: 'Zamorak vambraces'
        },
        {
            id: 10372,
            name: 'Zamorak body'
        },
        {
            id: 10374,
            name: 'Zamorak chaps'
        },
        {
            id: 10376,
            name: 'Zamorak coif'
        },
        {
            id: 10450,
            name: 'Zamorak cloak'
        },
        {
            id: 10456,
            name: 'Zamorak mitre'
        },
        {
            id: 19443,
            name: 'Ancient vambraces'
        },
        {
            id: 19445,
            name: 'Ancient body'
        },
        {
            id: 19447,
            name: 'Ancient chaps'
        },
        {
            id: 19449,
            name: 'Ancient coif'
        },
        {
            id: 19372,
            name: 'Ancient cloak'
        },
        {
            id: 19378,
            name: 'Ancient mitre'
        },
        {
            id: 19451,
            name: 'Bandos vambraces'
        },
        {
            id: 19453,
            name: 'Bandos body'
        },
        {
            id: 19455,
            name: 'Bandos chaps'
        },
        {
            id: 19457,
            name: 'Bandos coif'
        },
        {
            id: 19370,
            name: 'Bandos cloak'
        },
        {
            id: 19376,
            name: 'Bandos mitre'
        },
        {
            id: 19459,
            name: 'Armadyl vambraces'
        },
        {
            id: 19461,
            name: 'Armadyl body'
        },
        {
            id: 19463,
            name: 'Armadyl chaps'
        },
        {
            id: 19465,
            name: 'Armadyl coif'
        },
        {
            id: 19368,
            name: 'Armadyl cloak'
        },
        {
            id: 19374,
            name: 'Armadyl mitre'
        },
        {
            id: 2639,
            name: 'Tan cavalier'
        },
        {
            id: 2641,
            name: 'Dark cavalier'
        },
        {
            id: 2643,
            name: 'Black cavalier'
        },
        {
            id: 2651,
            name: 'Pirate\'s hat'
        },
        {
            id: 2581,
            name: 'Robin hood hat'
        },
        {
            id: 33502,
            name: 'Amulet of fury (t)'
        },
        {
            id: 10362,
            name: 'Amulet of glory (t)'
        },
        {
            id: 13101,
            name: 'Top hat'
        },
        {
            id: 13099,
            name: 'Rune cane'
        },
        {
            id: 47290,
            name: 'Medium spiky rune salvage'
        },
        {
            id: 47280,
            name: 'Medium bladed rune salvage'
        },
        {
            id: 47282,
            name: 'Large bladed rune salvage'
        },
        {
            id: 47310,
            name: 'Medium plated rune salvage'
        },
        {
            id: 47312,
            name: 'Large plated rune salvage'
        },
        {
            id: 1747,
            name: 'Black dragonhide'
        },
        {
            id: 1401,
            name: 'Mystic fire staff'
        },
        {
            id: 1403,
            name: 'Mystic water staff'
        },
        {
            id: 1405,
            name: 'Mystic air staff'
        },
        {
            id: 1407,
            name: 'Mystic earth staff'
        },
        {
            id: 563,
            name: 'Law rune'
        },
        {
            id: 561,
            name: 'Nature rune'
        },
        {
            id: 9075,
            name: 'Astral rune'
        },
        {
            id: 565,
            name: 'Blood rune'
        },
        {
            id: 892,
            name: 'Rune arrows'
        },
        {
            id: 19398,
            name: 'Rune platebody (Ancient)'
        },
        {
            id: 19401,
            name: 'Rune platelegs (Ancient)'
        },
        {
            id: 19404,
            name: 'Rune plateskirt (Ancient)'
        },
        {
            id: 19407,
            name: 'Rune full helm (Ancient)'
        },
        {
            id: 19410,
            name: 'Rune kiteshield (Ancient)'
        },
        {
            id: 19413,
            name: 'Rune platebody (Armadyl)'
        },
        {
            id: 19416,
            name: 'Rune platelegs (Armadyl)'
        },
        {
            id: 19419,
            name: 'Rune plateskirt (Armadyl)'
        },
        {
            id: 19422,
            name: 'Rune full helm (Armadyl)'
        },
        {
            id: 19425,
            name: 'Rune kiteshield (Armadyl)'
        },
        {
            id: 19146,
            name: "Guthix bow"
        },
        {
            id: 19149,
            name: "Zamorak bow"
        },
        {
            id: 19143,
            name: "Saradomin bow"
        }
    ]
})

export const getters = {
    getField
};

export const mutations = {
    updateField
};
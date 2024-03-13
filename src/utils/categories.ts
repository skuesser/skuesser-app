const categories = {
  'airplane': 0,
  'alarm_clock': 1,
  'ambulance': 2,
  'angel': 3,
  'animal_migration': 4,
  'ant': 5,
  'anvil': 6,
  'apple': 7,
  'arm': 8,
  'asparagus': 9,
  'axe': 10,
  'backpack': 11,
  'banana': 12,
  'bandage': 13,
  'barn': 14,
  'baseball_bat': 15,
  'baseball': 16,
  'basket': 17,
  'basketball': 18,
  'bat': 19,
  'bathtub': 20,
  'beach': 21,
  'bear': 22,
  'beard': 23,
  'bed': 24,
  'bee': 25,
  'belt': 26,
  'bench': 27,
  'bicycle': 28,
  'binoculars': 29,
  'bird': 30,
  'birthday_cake': 31,
  'blackberry': 32,
  'blueberry': 33,
  'book': 34,
  'boomerang': 35,
  'bottlecap': 36,
  'bowtie': 37,
  'bracelet': 38,
  'brain': 39,
  'bread': 40,
  'bridge': 41,
  'broccoli': 42,
  'broom': 43,
  'bucket': 44,
  'bulldozer': 45,
  'bus': 46,
  'bush': 47,
  'butterfly': 48,
  'cactus': 49,
  'cake': 50,
  'calculator': 51,
  'calendar': 52,
  'camel': 53,
  'camera': 54,
  'camouflage': 55,
  'campfire': 56,
  'candle': 57,
  'cannon': 58,
  'canoe': 59,
  'car': 60,
  'carrot': 61,
  'castle': 62,
  'cat': 63,
  'ceiling_fan': 64,
  'cell_phone': 65,
  'cello': 66,
  'chair': 67,
  'chandelier': 68,
  'church': 69,
  'circle': 70,
  'clarinet': 71,
  'clock': 72,
  'cloud': 73,
  'coffee_cup': 74,
  'compass': 75,
  'computer': 76,
  'cookie': 77,
  'cooler': 78,
  'couch': 79,
  'cow': 80,
  'crab': 81,
  'crayon': 82,
  'crocodile': 83,
  'crown': 84,
  'cruise_ship': 85,
  'cup': 86,
  'diamond': 87,
  'dishwasher': 88,
  'diving_board': 89,
  'dog': 90,
  'dolphin': 91,
  'donut': 92,
  'door': 93,
  'dragon': 94,
  'dresser': 95,
  'drill': 96,
  'drums': 97,
  'duck': 98,
  'dumbbell': 99,
  'ear': 100,
  'elbow': 101,
  'elephant': 102,
  'envelope': 103,
  'eraser': 104,
  'eye': 105,
  'eyeglasses': 106,
  'face': 107,
  'fan': 108,
  'feather': 109,
  'fence': 110,
  'finger': 111,
  'fire_hydrant': 112,
  'fireplace': 113,
  'firetruck': 114,
  'fish': 115,
  'flamingo': 116,
  'flashlight': 117,
  'flip_flops': 118,
  'floor_lamp': 119,
  'flower': 120,
  'flying_saucer': 121,
  'foot': 122,
  'fork': 123,
  'frog': 124,
  'frying_pan': 125,
  'garden_hose': 126,
  'garden': 127,
  'giraffe': 128,
  'goatee': 129,
  'golf_club': 130,
  'grapes': 131,
  'grass': 132,
  'guitar': 133,
  'hamburger': 134,
  'hammer': 135,
  'hand': 136,
  'harp': 137,
  'hat': 138,
  'headphones': 139,
  'hedgehog': 140,
  'helicopter': 141,
  'helmet': 142,
  'hexagon': 143,
  'hockey_puck': 144,
  'hockey_stick': 145,
  'horse': 146,
  'hospital': 147,
  'hot_air_balloon': 148,
  'hot_dog': 149,
  'hot_tub': 150,
  'hourglass': 151,
  'house_plant': 152,
  'house': 153,
  'hurricane': 154,
  'ice_cream': 155,
  'jacket': 156,
  'jail': 157,
  'kangaroo': 158,
  'key': 159,
  'keyboard': 160,
  'knee': 161,
  'ladder': 162,
  'lantern': 163,
  'laptop': 164,
  'leaf': 165,
  'leg': 166,
  'light_bulb': 167,
  'lighthouse': 168,
  'lightning': 169,
  'line': 170,
  'lion': 171,
  'lipstick': 172,
  'lobster': 173,
  'lollipop': 174,
  'mailbox': 175,
  'map': 176,
  'marker': 177,
  'matches': 178,
  'megaphone': 179,
  'mermaid': 180,
  'microphone': 181,
  'microwave': 182,
  'monkey': 183,
  'moon': 184,
  'mosquito': 185,
  'motorbike': 186,
  'mountain': 187,
  'mouse': 188,
  'moustache': 189,
  'mouth': 190,
  'mug': 191,
  'mushroom': 192,
  'nail': 193,
  'necklace': 194,
  'nose': 195,
  'ocean': 196,
  'octagon': 197,
  'octopus': 198,
  'onion': 199,
  'oven': 200,
  'owl': 201,
  'paint_can': 202,
  'paintbrush': 203,
  'palm_tree': 204,
  'panda': 205,
  'pants': 206,
  'paper_clip': 207,
  'parachute': 208,
  'parrot': 209,
  'passport': 210,
  'peanut': 211,
  'pear': 212,
  'peas': 213,
  'pencil': 214,
  'penguin': 215,
  'piano': 216,
  'pickup_truck': 217,
  'picture_frame': 218,
  'pig': 219,
  'pillow': 220,
  'pineapple': 221,
  'pizza': 222,
  'pliers': 223,
  'police_car': 224,
  'pond': 225,
  'pool': 226,
  'popsicle': 227,
  'postcard': 228,
  'potato': 229,
  'power_outlet': 230,
  'purse': 231,
  'rabbit': 232,
  'raccoon': 233,
  'radio': 234,
  'rain': 235,
  'rainbow': 236,
  'rake': 237,
  'remote_control': 238,
  'rhinoceros': 239,
  'river': 240,
  'roller_coaster': 241,
  'rollerskates': 242,
  'sailboat': 243,
  'sandwich': 244,
  'saw': 245,
  'saxophone': 246,
  'school_bus': 247,
  'scissors': 248,
  'scorpion': 249,
  'screwdriver': 250,
  'sea_turtle': 251,
  'see_saw': 252,
  'shark': 253,
  'sheep': 254,
  'shoe': 255,
  'shorts': 256,
  'shovel': 257,
  'sink': 258,
  'skateboard': 259,
  'skull': 260,
  'skyscraper': 261,
  'sleeping_bag': 262,
  'smiley_face': 263,
  'snail': 264,
  'snake': 265,
  'snorkel': 266,
  'snowflake': 267,
  'snowman': 268,
  'soccer_ball': 269,
  'sock': 270,
  'speedboat': 271,
  'spider': 272,
  'spoon': 273,
  'spreadsheet': 274,
  'square': 275,
  'squiggle': 276,
  'squirrel': 277,
  'stairs': 278,
  'star': 279,
  'steak': 280,
  'stereo': 281,
  'stethoscope': 282,
  'stitches': 283,
  'stop_sign': 284,
  'stove': 285,
  'strawberry': 286,
  'streetlight': 287,
  'string_bean': 288,
  'submarine': 289,
  'suitcase': 290,
  'sun': 291,
  'swan': 292,
  'sweater': 293,
  'swing_set': 294,
  'sword': 295,
  't-shirt': 296,
  'table': 297,
  'teapot': 298,
  'teddy-bear': 299,
  'telephone': 300,
  'television': 301,
  'tennis_racquet': 302,
  'tent': 303,
  'The_Eiffel_Tower': 304,
  'The_Great_Wall_of_China': 305,
  'The_Mona_Lisa': 306,
  'tiger': 307,
  'toaster': 308,
  'toe': 309,
  'toilet': 310,
  'tooth': 311,
  'toothbrush': 312,
  'toothpaste': 313,
  'tornado': 314,
  'tractor': 315,
  'traffic_light': 316,
  'train': 317,
  'tree': 318,
  'triangle': 319,
  'trombone': 320,
  'truck': 321,
  'trumpet': 322,
  'umbrella': 323,
  'underwear': 324,
  'van': 325,
  'vase': 326,
  'violin': 327,
  'washing_machine': 328,
  'watermelon': 329,
  'waterslide': 330,
  'whale': 331,
  'wheel': 332,
  'windmill': 333,
  'wine_bottle': 334,
  'wine_glass': 335,
  'wristwatch': 336,
  'yoga': 337,
  'zebra': 338,
  'zigzag': 339
}

function getCategoryFromNumber(num: number) {
  const categoryEntries = Object.entries(categories);
  const matchingEntry = categoryEntries.find(([key, value]) => value === num);
  return matchingEntry ? matchingEntry[0] : null;
}

export { categories, getCategoryFromNumber };
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  price: number;
  stock: number;
  image: string;
  isFarm?: boolean;
}

export const categories = [
  "Nutraceutical Medicines",
  "Immune Boosters",
  "Digestive Health",
  "Blood Circulation",
  "Energy Products",
  "Weight Management",
  "Men's Health",
  "Women's Health",
  "Children's Health",
  "Agricultural Products"
];

export const products: Product[] = [
  {
    "id": "p1",
    "name": "Kuding Plus Tea",
    "category": "Immune Boosters",
    "description": "A premium herbal infusion known for its powerful anti-inflammatory and detoxifying properties.",
    "benefits": [
      "Alleviates inflammation and supports overall wellness",
      "Aids in body detoxification and metabolic health",
      "Enhances immunity to help prevent cold and flu",
      "Supports healthy blood lipid and blood pressure levels"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-3 sachet(s) each day",
    "price": 4920,
    "stock": 100,
    "image": "/products/slide_2.png",
    "isFarm": false
  },
  {
    "id": "p2",
    "name": "Breast Care Tea",
    "category": "Women's Health",
    "description": "Specifically formulated to support endocrine balance and promote breast health through natural detoxification.",
    "benefits": [
      "Supports a healthy endocrine system and hormonal balance",
      "Helps dissipate blood stasis and clear dampness",
      "Targets common underlying causes of breast discomfort",
      "Promotes long-term breast health and vitality"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 4610,
    "stock": 100,
    "image": "/products/slide_3.png",
    "isFarm": false
  },
  {
    "id": "p3",
    "name": "Cordyceps Plus Capsule",
    "category": "Immune Boosters",
    "description": "A potent formulation that balances and strengthens the immune system while supporting respiratory health.",
    "benefits": [
      "Balances overactive immune responses for those with sensitivities",
      "Enhances weakened immunity for chronic health support",
      "Supports lung function and chronic respiratory wellness",
      "Provides natural energy and stamina support"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1600,
    "stock": 100,
    "image": "/products/slide_22.png",
    "isFarm": false
  },
  {
    "id": "p4",
    "name": "Intestine Cleansing Tea",
    "category": "Digestive Health",
    "description": "A gentle yet effective natural solution for colon detoxification and healthy bowel regularity.",
    "benefits": [
      "Lubricates the intestinal wall for smooth digestion",
      "Relieves occasional constipation and promotes regularity",
      "Supports healthy colon detoxification and waste removal",
      "Ideal for those seeking a natural digestive reset"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 2915,
    "stock": 100,
    "image": "/products/slide_5.png",
    "isFarm": false
  },
  {
    "id": "p5",
    "name": "Balsam Pear Tea",
    "category": "Nutraceutical Medicines",
    "description": "Contains plant insulin that helps regulate blood sugar levels and supports healthy glucose metabolism.",
    "benefits": [
      "1. Contain plant insulin that reduces blood sugar levels",
      "il g 2. Increase insulin receptors respond to such hormone",
      "1 Si i 3. Alleviate complications of diabetes"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4258,
    "stock": 100,
    "image": "/products/slide_6.png",
    "isFarm": false
  },
  {
    "id": "p6",
    "name": "Pine Pollen Tea",
    "category": "Energy Products",
    "description": "A nutrient-rich herbal tea that enhances stamina and supports hormonal balance for both men and women.",
    "benefits": [
      "13 TA 1.Improve immunity  for people with compromised",
      "7 immunity and chronic fatigue",
      "Za 2.Contain powerful phyto-androgens which promote",
      "hormonal health, both in men and women"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 4336,
    "stock": 100,
    "image": "/products/slide_7.png",
    "isFarm": false
  },
  {
    "id": "p7",
    "name": "Jinpure Tea",
    "category": "Immune Boosters",
    "description": "Clears pathogenic heat and supports upper respiratory health, perfect for flu prevention.",
    "benefits": [
      "op Tr x  1. Init viral and bacterial replication in the uppet",
      "ol rs respiratory system",
      "ga EE.  2. Improve pulmonary ventilation and sputum excretion",
      "K, AG ee 3. Clear the pathogenic heat in upper respiratory system",
      "FRAY Ca 4. For prevention of flu or cold in adults"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1856,
    "stock": 100,
    "image": "/products/slide_10.png",
    "isFarm": false
  },
  {
    "id": "p8",
    "name": "Ginseng RHs Capsule",
    "category": "Energy Products",
    "description": "Advanced health formulation that promotes vitality and supports immune system recovery.",
    "benefits": [
      "natural remedy that can be used in adjunction with anti-cancer",
      "in medications",
      "- 2.Increases white blood cells count highly beneficial for patients who",
      "Ne, receive chemo therapy or radiotherapy",
      "guises 3.Promotes wound healing and speeds up convalescence"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3536,
    "stock": 100,
    "image": "/products/slide_29.png",
    "isFarm": false
  },
  {
    "id": "p9",
    "name": "Ganoderma Plus Capsule",
    "category": "Nutraceutical Medicines",
    "description": "Specifically formulated to regulate immunity and reduce side effects of systemic intensive treatments.",
    "benefits": [
      "Regulates immunity",
      "2.Reduces adverse effect caused by chemotherapy and radiotherapy",
      "- a for example, vomiting, pain, decrease of white blood cells, the loss",
      "enue of hair, fatigue, etc. speeds up recovery after chemotherapy and",
      "radiotherapy"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4937,
    "stock": 100,
    "image": "/products/slide_24.png",
    "isFarm": false
  },
  {
    "id": "p10",
    "name": "Soy Power Capsule",
    "category": "Women's Health",
    "description": "Supports endocrine health and bone density for women, promoting long-term cardiovascular wellness.",
    "benefits": [
      "Prevent the decline of ovarys function",
      "Reduce the loss of bone density,prevent osteoporosis",
      "Prevent atherosclerosis and cardiovascular disease",
      "4. Prevent breast cancer",
      "py F  5. Improve memory, prevent dementia"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2748,
    "stock": 100,
    "image": "/products/slide_30.png",
    "isFarm": false
  },
  {
    "id": "p11",
    "name": "Deep Sea Fish Oil Softgel",
    "category": "Blood Circulation",
    "description": "Rich source of EPA and DHA that supports brain function and healthy blood lipid levels.",
    "benefits": [
      "Provides EPA and DHA, the two major omega-3 fatty",
      "3 acids, polyunsaturated fatty acids and vitamin E",
      "2. Improves brain functions",
      "Py  o  3. Improves blood lipid index",
      "Zz he rl  HB 4. Reduces platelet coagulation and the risks of arthrosclerosis"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4648,
    "stock": 100,
    "image": "/products/slide_39.png",
    "isFarm": false
  },
  {
    "id": "p12",
    "name": "Calcium Tablet (For Adults)",
    "category": "Nutraceutical Medicines",
    "description": "Essential calcium supplement to strengthen bones and prevent deficiency in adults.",
    "benefits": [
      "Prevents calcium deficiency",
      "2.Strengthens the bones and prevents bone disease"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1987,
    "stock": 100,
    "image": "/products/slide_32.png",
    "isFarm": false
  },
  {
    "id": "p13",
    "name": "NutriPlant Organic Plus Fertilizer (NOPF)",
    "category": "Agricultural Products",
    "description": "Premium nutraceutical solution for health and wellness.",
    "benefits": [
      "Natural health support for various wellness needs."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4823,
    "stock": 100,
    "image": "/products/NeutricPlant Organic Fertilizer.png",
    "isFarm": true
  },
  {
    "id": "p14",
    "name": "Energy Tea",
    "category": "Energy Products",
    "description": "TUN 1. Help relieve chronic fatigue Cn (,) 3. Refreshe the brain and revitalizes energy",
    "benefits": [
      "Promotes overall health and systemic balance.",
      "Natural formulation with targeted wellness benefits."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 4699,
    "stock": 100,
    "image": "/products/slide_11.png",
    "isFarm": false
  },
  {
    "id": "p15",
    "name": "Muscle Recovery & Energy Drink",
    "category": "Energy Products",
    "description": "Supgyements loss vitamins minerals after workout ..- 2. Relieves the tiredness after workout )",
    "benefits": [
      "Supgyements loss of vitamins  minerals after workout ..- o",
      "2. Relieves the tiredness after workout",
      "Improves muscle recovery  growth",
      "4 Strengthens immune system",
      "ero O20 cl 0 5.Increases metabolism rate  improves energy level"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 3753,
    "stock": 100,
    "image": "/products/slide_12.png",
    "isFarm": false
  },
  {
    "id": "p16",
    "name": "Wake JQQ Fresh Drink",
    "category": "Weight Management",
    "description": "Helps alcohol convert acetate through increasingg the secygtion enzymes involved such process efiver. 3",
    "benefits": [
      "1.Helps alcohol convert to acetate through increasingg a",
      "the secygtion of enzymes involved in such process in t efiver. 3",
      "2.Supplements liver cells with vitamins needed for metabolism",
      "3.Rich in antioxidants that counteract free radicals in liver during"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4347,
    "stock": 100,
    "image": "/products/slide_13.png",
    "isFarm": false
  },
  {
    "id": "p17",
    "name": "Oo - A 4 Builds the 1st line immune defense gut",
    "category": "Nutraceutical Medicines",
    "description": "Moisturizes intestinal wall and improves intesti 4 and cerebrovascular diseases, diabetes -",
    "benefits": [
      "Moisturizes intestinal wall and improves intesti p",
      "4 and cerebrovascular diseases, diabetes  -",
      "2.Builds healthy intestinal flora a balance between beneficial ."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4967,
    "stock": 100,
    "image": "/products/slide_14.png",
    "isFarm": false
  },
  {
    "id": "p18",
    "name": "P77 5Promotes longevity",
    "category": "Nutraceutical Medicines",
    "description": "Enhances immunity and combats cancer cell proliferates 2 protectthe cellular components against oxidative damage",
    "benefits": [
      "Enhances immunity and combats cancer cell proliferates a",
      "2 protectthe cellular components against oxidative damage  h",
      "Ti 2 3.Inhibits viral and bacterial multiplication without affecting",
      "i, 4 Protects the liver against damage by toxins"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4130,
    "stock": 100,
    "image": "/products/slide_15.png",
    "isFarm": false
  },
  {
    "id": "p19",
    "name": "Actiberry Anti-Inflammatory",
    "category": "Nutraceutical Medicines",
    "description": "marm 2 Antioxidant Se . . ACTIBERRY 3TAnti-inflammatory",
    "benefits": [
      "fyotect eyesight 3 sea",
      "rh. marm   2 Antioxidant",
      "Se . . ACTIBERRY   3TAnti-inflammatory",
      "try MEH , Be  H ."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 2205,
    "stock": 100,
    "image": "/products/slide_16.png",
    "isFarm": false
  },
  {
    "id": "p20",
    "name": "NRE 6.Accelerates fracture healing",
    "category": "Nutraceutical Medicines",
    "description": "Provides calcium and phosphorus for building the bones 2.Provides iron and vitamins for synthesis hemoglobin",
    "benefits": [
      "Provides calcium and phosphorus for building of the bones",
      "Provides iron and vitamins for synthesis of hemoglobin",
      "ale ai 3.Preventing and improving anemi",
      "Ry a Mr Ew 4.Provides proteins and essential fatty acids"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2081,
    "stock": 100,
    "image": "/products/slide_17.png",
    "isFarm": false
  },
  {
    "id": "p21",
    "name": "Green World Super Nutrition",
    "category": "Nutraceutical Medicines",
    "description": "1. Green World Super Nutrition provides cocktail nut such antioxidants, proteins, carbohydrates, vitam",
    "benefits": [
      ". 1. Green World Super Nutrition provides us a cocktail of nut",
      "such as antioxidants, proteins, carbohydrates, vitam",
      "rr L 2 B minerals and dietary fibers. As the key ingredient",
      "a. Wer 8 temperature permeability technique is adopted to ensure the",
      "1 KY Ee v bioavailability of the anthocyanins in the blueberry extract. 4"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3243,
    "stock": 100,
    "image": "/products/slide_18.png",
    "isFarm": false
  },
  {
    "id": "p22",
    "name": "Blueberry Breuvage",
    "category": "Nutraceutical Medicines",
    "description": "1. A well-blended berry cocktail the most powerful natura oF N antioxidant against diseases induced oxidative dama,",
    "benefits": [
      "1. A well-blended berry cocktail as the most powerful natura",
      "oF N antioxidant against diseases induced by oxidative dama,",
      ". k ol 7 pum CE such as heart diseases, forgetfulness and memory loss,",
      ",  A BLEUET BREUVAGE HAI  diabetes End Fancon"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3279,
    "stock": 100,
    "image": "/products/slide_19.png",
    "isFarm": false
  },
  {
    "id": "p23",
    "name": "Bleuet Minceur (Slimming)",
    "category": "Weight Management",
    "description": "Ze 1.Slow the emptying stomach give sense fullness ing 2.A meal replacement reducing the calories intake",
    "benefits": [
      "Ze as 1.Slow the emptying of stomach  give sense of fullness",
      "ing 2.A meal replacement reducing the calories intake",
      "5 BLUEBERRY pig 3.Reduce the absorption of cholesterol  absorption of f",
      "SLIMMING BODY Te"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 2597,
    "stock": 100,
    "image": "/products/slide_20.png",
    "isFarm": false
  },
  {
    "id": "p24",
    "name": "Protein Powder",
    "category": "Nutraceutical Medicines",
    "description": "Provides 9 essential amino acids human body 2. Free cholesterol, hormones, and antibodies, which are",
    "benefits": [
      "Provides 9 essential amino acids to human body",
      "Free of cholesterol, hormones, and antibodies, which are",
      "generally found in animal proteins",
      "3. With high solubility and absorbability"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2691,
    "stock": 100,
    "image": "/products/slide_21.png",
    "isFarm": false
  },
  {
    "id": "p25",
    "name": "Energy & Stamina Tea",
    "category": "Energy Products",
    "description": "1. A natural antifungal and antivirus product For people with compromised immunity, those who",
    "benefits": [
      "1. A natural antifungal and antivirus product",
      "2. Enhances immunity"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4841,
    "stock": 100,
    "image": "/products/slide_23.png",
    "isFarm": false
  },
  {
    "id": "p26",
    "name": "Cardiovascular Health Softgel",
    "category": "Blood Circulation",
    "description": "Lowers blood lipid and viscosity reduces platelet 4 aggregation and the risk atherosclerosis",
    "benefits": [
      "Lowers blood lipid and viscosity reduces platelet",
      "4  aggregation and the risk of atherosclerosis",
      "ned 2.Dilates arteries which supply blood to the brain and heart,",
      "3 increases coronary blood flow, improves blood supply to"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3792,
    "stock": 100,
    "image": "/products/slide_25.png",
    "isFarm": false
  },
  {
    "id": "p27",
    "name": "Immune System & Cancer Support",
    "category": "Immune Boosters",
    "description": "1.Boosts immunity through improving both humoral Q and cellular immune system",
    "benefits": [
      "1.Boosts immunity through improving both humoral",
      "and cellular immune system",
      "2.Prevents and assists the treatment of cancer when used",
      "Agove in combination with anti-cancer medications"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3176,
    "stock": 100,
    "image": "/products/slide_26.png",
    "isFarm": false
  },
  {
    "id": "p28",
    "name": "Vigpower & Men's Health Capsule",
    "category": "Men's Health",
    "description": "E 7 1. Conserves the vital power and strengthens sexuality A v5 through replenishing kidney.",
    "benefits": [
      "E 7 on 1. Conserves the vital power and strengthens sexuality",
      "v5  through replenishing kidney.",
      "2. Improves sexual dysfunctions in men"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2743,
    "stock": 100,
    "image": "/products/slide_27.png",
    "isFarm": false
  },
  {
    "id": "p29",
    "name": "Gastric Health & Nutrient Support",
    "category": "Digestive Health",
    "description": "Balances nutrient intake Q 2. Protects gastric mucosa",
    "benefits": [
      "Balances nutrient intake",
      "2. Protects gastric mucosa",
      "3. Adjusts immune system",
      "ia 4. Reduces the harmful effects of electromagnetic radiation"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2797,
    "stock": 100,
    "image": "/products/slide_28.png",
    "isFarm": false
  },
  {
    "id": "p30",
    "name": "Multivitamin Tablet (For Children)",
    "category": "Children's Health",
    "description": "1. Supplements body with Vitamin A 2. Reduces risks eye disorders such age-related macular",
    "benefits": [
      "1. Supplements body with Vitamin A",
      "Reduces risks of eye disorders such as age-related macular",
      "degeneration AMD, age-related maculopathy ARM, cataracts,",
      "and night blindness",
      "4 3. Serves as a strong antioxidant which deactivates free radicals"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4241,
    "stock": 100,
    "image": "/products/slide_31.png",
    "isFarm": false
  },
  {
    "id": "p31",
    "name": "Zinc Tablet (For Adults)",
    "category": "Nutraceutical Medicines",
    "description": "Prevents zinc-deficiency 2. An essential trace element involved hundreds chemical",
    "benefits": [
      "Prevents zinc-deficiency",
      "An essential trace element involved in hundreds of chemical",
      "reactions in human body, which is important for immune function,",
      "E  acid-base balance, digestion, growth and development, skin and",
      "Ye hair health, and genetic transcription"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4607,
    "stock": 100,
    "image": "/products/slide_33.png",
    "isFarm": false
  },
  {
    "id": "p32",
    "name": "Multi-Vitamins Tablet",
    "category": "Nutraceutical Medicines",
    "description": "Supplements the body with fat soluble vitamins (A,D, E and K) and water soluble vitamins (B Complex and C).",
    "benefits": [
      "Supplements the body with fat soluble vitamins A,D,",
      "and K and water soluble vitamins B Complex and C.",
      "5 gi 2.Prevents and improves vitamin deficiencies"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2514,
    "stock": 100,
    "image": "/products/slide_34.png",
    "isFarm": false
  },
  {
    "id": "p33",
    "name": "Zinc Tablet (For Children)",
    "category": "Children's Health",
    "description": "Supplements vitamin C human body and prevents vitamin Q 2. Supports immune system",
    "benefits": [
      "Supplements vitamin C to human body and prevents vitamin",
      "2. Supports immune system",
      "ot 3. A powerful water soluble antioxidant",
      "ams 4. Critical in forming collagen to improve firmness of skin"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1784,
    "stock": 100,
    "image": "/products/slide_35.png",
    "isFarm": false
  },
  {
    "id": "p34",
    "name": "Garlic Oil Softgel",
    "category": "Nutraceutical Medicines",
    "description": "It has anti-microbial properties, thus inhibiting the growth 2. An antioxidant that neutralizes the free radicals",
    "benefits": [
      "It has anti-microbial properties, thus inhibiting the growth of",
      "pathogenic bacteria",
      "An antioxidant that neutralizes the free radicals",
      "3. Lowers total cholesterol, LDL, and triglycerides, and increases",
      "5  8 x  HDL cholesterol thus preventing cardiovascu- iar or cerebrovascular"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4378,
    "stock": 100,
    "image": "/products/slide_36.png",
    "isFarm": false
  },
  {
    "id": "p35",
    "name": "Chitosan Capsule",
    "category": "Weight Management",
    "description": "Reduces blood lipid level, helps weight loss 2. Reduces blood sugar level",
    "benefits": [
      "Reduces blood lipid level, helps weight loss",
      "Reduces blood sugar level",
      "Strengthens the function of liver, prevents liver from damage of",
      "Cw.  Be i 4. 5 healing of gastric ulcers"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2826,
    "stock": 100,
    "image": "/products/slide_37.png",
    "isFarm": false
  },
  {
    "id": "p36",
    "name": "Lecithin Softgel",
    "category": "Nutraceutical Medicines",
    "description": "An essential constituent for cell membranes 2. Strengthens the nerve system and nourishes the brain",
    "benefits": [
      "An essential constituent for cell membranes",
      "Strengthens the nerve system and nourishes the brain",
      "3. Lowers blood lipid level",
      "2 5 4 Protects liver and enhances liver function"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2748,
    "stock": 100,
    "image": "/products/slide_38.png",
    "isFarm": false
  },
  {
    "id": "p37",
    "name": "Compound Marrow Powder",
    "category": "Nutraceutical Medicines",
    "description": "nN - 1. Help expel the harmful substances toge SN his - 3 spugym from the lungs - -",
    "benefits": [
      "nN - 1. Help expel the harmful substances toge SN his",
      "- 3 spugym from the lungs - ne -",
      "Lo  S. 2 Enhance immunity in lung",
      "3. Improve respiratory functions"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 4036,
    "stock": 100,
    "image": "/products/slide_4.png",
    "isFarm": false
  },
  {
    "id": "p38",
    "name": "Ginkgo Biloba Capsule",
    "category": "Blood Circulation",
    "description": "Scavenges free radicals and counteracts age-related damages 2. Increases oxygen supply brain tissue thus enhancing memory",
    "benefits": [
      "Scavenges free radicals and counteracts age-related damages",
      "to organs and tissues",
      "Increases oxygen supply to brain tissue thus enhancing memory",
      "- g 3. Prevents age-related macular degeneration"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3455,
    "stock": 100,
    "image": "/products/slide_40.png",
    "isFarm": false
  },
  {
    "id": "p39",
    "name": "3 2.Alleviates inflammatory signs and symptoms",
    "category": "Nutraceutical Medicines",
    "description": "Improves bowel movement, accelerates toxin excretion 3 2.Alleviates inflammatory signs and symptoms",
    "benefits": [
      "Improves bowel movement, accelerates toxin excretion",
      "3 2.Alleviates inflammatory signs and symptoms",
      "Ww, i 3.Eases pain and expels the internal heat of human body"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4703,
    "stock": 100,
    "image": "/products/slide_41.png",
    "isFarm": false
  },
  {
    "id": "p40",
    "name": "3. Maintains reproductive function and hormonal balance",
    "category": "Nutraceutical Medicines",
    "description": "It supplements daily vitamin E intake. 2. A powerful fat soluble antioxidan",
    "benefits": [
      "It supplements daily vitamin E intake.",
      "2. A powerful fat soluble antioxidan",
      "3. Maintains reproductive function and hormonal balance",
      "5 4. Alleviates premenstrual syndrome and menopausal syndrome",
      "2 i o 5. Vital for proper immune function, DNA repair and metabolic processes"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3836,
    "stock": 100,
    "image": "/products/slide_42.png",
    "isFarm": false
  },
  {
    "id": "p41",
    "name": "Arthropower Capsule 2 capsules each time, twice day, preferably with meal",
    "category": "Nutraceutical Medicines",
    "description": "Alleviates the pain, swelling and stiffness the joints Q 2. Helps joint cartilage repair and rebuild.",
    "benefits": [
      "Alleviates the pain, swelling and stiffness of the joints",
      "2. Helps joint cartilage repair and rebuild."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3441,
    "stock": 100,
    "image": "/products/slide_43.png",
    "isFarm": false
  },
  {
    "id": "p42",
    "name": "Anxiety Stress Relief Capsule Co",
    "category": "Nutraceutical Medicines",
    "description": "It improves your quality sleep BEET 2. It helps with cognitive function.",
    "benefits": [
      "It improves your quality of sleep",
      "BEET 2. It helps with cognitive function.",
      "3. Its a brain tonic that improves neurodegenerative diseases"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1864,
    "stock": 100,
    "image": "/products/slide_44.png",
    "isFarm": false
  },
  {
    "id": "p43",
    "name": "pR Poe 2. Invigorates kidney functions.",
    "category": "Nutraceutical Medicines",
    "description": "Improves kidney fatigue which demonstrates leg and lumbar pain,insomnia, forgetfulness, listlessness, lowered",
    "benefits": [
      "Improves kidney fatigue which demonstrates in leg and",
      "lumbar pain,insomnia, forgetfulness, listlessness, lowered",
      "Ry  libido or sexual dysfunction",
      "pR Poe i 2. Invigorates kidney functions."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4581,
    "stock": 100,
    "image": "/products/slide_45.png",
    "isFarm": false
  },
  {
    "id": "p44",
    "name": "EF) cystitis urethritis.",
    "category": "Nutraceutical Medicines",
    "description": "Invigorates kidney functions 2. Prevents and alleviates certain female chronic infections such",
    "benefits": [
      "Invigorates kidney functions",
      "2. Prevents and alleviates certain female chronic infections such as",
      "EF  cystitis or urethritis.",
      "4  3.Improves infertility of women.",
      "4.Regulates ovaries functioning to balance female hormones."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3255,
    "stock": 100,
    "image": "/products/slide_46.png",
    "isFarm": false
  },
  {
    "id": "p45",
    "name": "Accelerates metabolism rate and breakdown fat.",
    "category": "Nutraceutical Medicines",
    "description": "Accelerates metabolism rate and breakdown fat. V 3 2. Decreases the intake calories suppressing appetite",
    "benefits": [
      "1. Accelerates metabolism rate and breakdown of fat.",
      "3 2. Decreases the intake of calories by suppressing appetite"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3786,
    "stock": 100,
    "image": "/products/slide_47.png",
    "isFarm": false
  },
  {
    "id": "p46",
    "name": "2. Prevents parasitic diseases.",
    "category": "Nutraceutical Medicines",
    "description": "Expels and kills common intestinal parasites 2. Prevents parasitic diseases.",
    "benefits": [
      "Expels and kills common intestinal parasites",
      "2. Prevents parasitic diseases."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4606,
    "stock": 100,
    "image": "/products/slide_48.png",
    "isFarm": false
  },
  {
    "id": "p47",
    "name": "FE smoothness, radiance and elasticity the skin",
    "category": "Nutraceutical Medicines",
    "description": "Improves female fertility. 3. Improves insulin resistance.",
    "benefits": [
      "Improves female fertility.",
      "Strengthens immunity.",
      "Improves insulin resistance.",
      "4. Stimulates the production of collagen and improves firmness,",
      "smoothness, radiance and elasticity of the skin"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3679,
    "stock": 100,
    "image": "/products/slide_49.png",
    "isFarm": false
  },
  {
    "id": "p48",
    "name": "2 capsules each time, once day.",
    "category": "Immune Boosters",
    "description": "Prevents and alleviates coronary heart disease 2.A powerful antioxidant that prevents and improves",
    "benefits": [
      "Prevents and alleviates coronary heart disease",
      "powerful antioxidant that prevents and improves",
      "degenerative cardiovascular diseases.",
      "3.Strengthens immunity"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4510,
    "stock": 100,
    "image": "/products/slide_50.png",
    "isFarm": false
  },
  {
    "id": "p49",
    "name": "Capsule (OPC) prolonged outdoor activiti",
    "category": "Nutraceutical Medicines",
    "description": "1. Contains abundant amount antioxidants such polyphenols, proanthocyanidins and stilbene from oligomers-OPC (Oligomeric",
    "benefits": [
      "1. Contains an abundant amount of antioxidants such as polyphenols,",
      "proanthocyanidins and stilbene from oligomers-OPC Oligomeric",
      "3 i ERA Proanthocyanidins Complexes.",
      "2. Counteracts free radicals causing oxidative stress and related"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3482,
    "stock": 100,
    "image": "/products/slide_51.png",
    "isFarm": false
  },
  {
    "id": "p50",
    "name": "Health Benefits",
    "category": "Nutraceutical Medicines",
    "description": "Improves gastrointestinal peristalsis 2. Improves the gastric secretion and activity pepsin",
    "benefits": [
      "Improves gastrointestinal peristalsis",
      "Improves the gastric secretion and activity of pepsin",
      "3. Increases the total acidity and total output of gastric juice",
      "EAR EN WORLD 4. Improves nutrients absorption in small intestine"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3022,
    "stock": 100,
    "image": "/products/slide_52.png",
    "isFarm": false
  },
  {
    "id": "p51",
    "name": "HepatSure Capsule gE one.",
    "category": "Weight Management",
    "description": "Repairs damaged liver cells. 2. Adjusts liver fat metabolism.",
    "benefits": [
      "Repairs damaged liver cells.",
      "Adjusts liver fat metabolism.",
      "Prevents hepatic fibrosis and liver cirrhosis.",
      "4. Helps with detoxification.",
      "Vy GREEN WORLD. s bl f"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2510,
    "stock": 100,
    "image": "/products/slide_53.png",
    "isFarm": false
  },
  {
    "id": "p52",
    "name": "nmr response the specific hormone",
    "category": "Nutraceutical Medicines",
    "description": "Improves secretion insulin pancreas Q 2. Lowers blood sugar level increasing insulin receptors",
    "benefits": [
      "Improves secretion of insulin by pancreas",
      "2. Lowers blood sugar level by increasing insulin receptors",
      "nmr  response to the specific hormone",
      "er 3. Regulates incretion and metabolism of glucose of the body"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2105,
    "stock": 100,
    "image": "/products/slide_54.png",
    "isFarm": false
  },
  {
    "id": "p53",
    "name": "capsules each time, once day.",
    "category": "Weight Management",
    "description": "The varieties bioactive plant essence Green World Blueberry Anti-Aging Capsule participates the cell metabolism. Agin",
    "benefits": [
      "The varieties of bioactive plant essence in Green World Blueberry",
      "Anti-Aging Capsule participates the cell metabolism. Agin",
      "closely related to the DNA self-repairing ability and metabolism",
      "the cells as well as the antioxidant levels in human body.",
      "es . plant essence in this product regulate metabolism, enhance"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4848,
    "stock": 100,
    "image": "/products/slide_55.png",
    "isFarm": false
  },
  {
    "id": "p54",
    "name": "Cr pet rehabilitation",
    "category": "Nutraceutical Medicines",
    "description": "Regulate the central nerve system, calm nerves, eases pain, resists 2.Expel toxins, improve the function spleen and stomach, enhance",
    "benefits": [
      "Regulate the central nerve system, calm nerves, eases pain, resists",
      "Expel toxins, improve the function of spleen and stomach, enhance",
      "hy i the immunity and anti-fatigue",
      "A  3.This product relieves and helps treat complications during drug"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3657,
    "stock": 100,
    "image": "/products/slide_56.png",
    "isFarm": false
  },
  {
    "id": "p55",
    "name": "Jinpure Capsule",
    "category": "Nutraceutical Medicines",
    "description": "Inhibit viral and bacterial replication the upper respiratory system 2. Improve pulmonary ventilation and sputum excretion",
    "benefits": [
      "Inhibit viral and bacterial replication in the upper respiratory system",
      "Improve pulmonary ventilation and sputum excretion",
      "Uy 3 _ 3. Clear the pathogenic heat in upper respiratory system",
      "JINPURE 4. For prevention of flu or cold in adults"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1705,
    "stock": 100,
    "image": "/products/slide_57.png",
    "isFarm": false
  },
  {
    "id": "p56",
    "name": "syndrome and premature ovary aging etc.",
    "category": "Nutraceutical Medicines",
    "description": "Helps with common female disorders related female hormone imbalance include PMS, postmenopausal",
    "benefits": [
      "Helps with common female disorders related to female",
      "hormone imbalance include PMS, postmenopausal",
      "syndrome and premature ovary aging etc."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2669,
    "stock": 100,
    "image": "/products/slide_58.png",
    "isFarm": false
  },
  {
    "id": "p57",
    "name": "Prostacare Capsule . .",
    "category": "Nutraceutical Medicines",
    "description": "Restrains growth pathogenic microorganism the prostate Q 2.Prevents and improves prostate disorders",
    "benefits": [
      "Restrains growth of pathogenic microorganism in the prostate",
      "2.Prevents and improves prostate disorders",
      "4  3.Alleviates signs and symptoms of prostate disorders"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4010,
    "stock": 100,
    "image": "/products/slide_59.png",
    "isFarm": false
  },
  {
    "id": "p58",
    "name": "Eye Care Softgel 2 capsules each time, twice day.",
    "category": "Nutraceutical Medicines",
    "description": "1.Helps relieve eyestrain A . 2.Improves night vision.",
    "benefits": [
      "1.Helps relieve eyestrain",
      ".  2.Improves night vision.",
      "SOFTGEL I 3.Protects eyes from the damage of harmful UV rays",
      "erusor 4.Prevents other eye disorders."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1830,
    "stock": 100,
    "image": "/products/slide_60.png",
    "isFarm": false
  },
  {
    "id": "p59",
    "name": "Blueberry Enzymes Tablet )",
    "category": "Digestive Health",
    "description": "1. Helps relieve eyestrain Bn. 3 2. Improves night vision.",
    "benefits": [
      "1 1. Helps relieve eyestrain",
      "Bn. 3 2. Improves night vision.",
      "Gis 3. Improve indigestion symptoms"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1574,
    "stock": 100,
    "image": "/products/slide_61.png",
    "isFarm": false
  },
  {
    "id": "p60",
    "name": "AS 5. Support growth development children",
    "category": "Nutraceutical Medicines",
    "description": "Prevent alleviate osteoporosis. Nn 2 putt EO 3. Increase bone density improve bone remodeling.",
    "benefits": [
      "1. Supplement calcium",
      "2. Prevent  alleviate osteoporosis.",
      "Nn 2 putt o  EO 3. Increase bone density  improve bone remodeling.",
      "pr 4 Sh pp 4. Improve joint health",
      "AS y 5. Support growth  development of children"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1656,
    "stock": 100,
    "image": "/products/slide_62.png",
    "isFarm": false
  },
  {
    "id": "p61",
    "name": "taken out and after 24 hours, next pill can used.",
    "category": "Nutraceutical Medicines",
    "description": "smo 1.Cleanse It kills inhibits growth the pathogenic microorganisms causing gynecological disorders like",
    "benefits": [
      "smo 1.Cleanse It kills  inhibits growth of the pathogenic",
      "microorganisms causing gynecological disorders like",
      "vaginitis, cervical erosion,  pelvic inflammatory disease.",
      "2.Alleviate chronic inflammation Chronic inflammation induces",
      "5 TES   tissue hyperplasia, in turn, increases the risk of cancerization."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1922,
    "stock": 100,
    "image": "/products/slide_63.png",
    "isFarm": false
  },
  {
    "id": "p62",
    "name": "Green World Health Supplement 62",
    "category": "Nutraceutical Medicines",
    "description": "By increasing nitric oxide production Golden Knight Spray By being powerful antioxidants",
    "benefits": [
      "By increasing nitric oxide production",
      "Golden Knight Spray By being powerful antioxidants",
      "By nourishing kidney Yang",
      "By decreasing cortisol production",
      "By potentially increasing testosterone production"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 1806,
    "stock": 100,
    "image": "/products/slide_64.png",
    "isFarm": false
  },
  {
    "id": "p63",
    "name": "AN A Change your underwear,Dry yourself completely LVER",
    "category": "Nutraceutical Medicines",
    "description": "Her erogenous zones become very sensitive stimulation __ Silver Eva Spray Her pupils dilate",
    "benefits": [
      "Her erogenous zones become very sensitive to stimulation",
      "__ Silver Eva Spray Her pupils dilate",
      "Her breasts become fuller",
      "Her vagina canal might deepen and expand",
      "Her body releases pheromones that increase mutual sexual desire"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2929,
    "stock": 100,
    "image": "/products/slide_65.png",
    "isFarm": false
  },
  {
    "id": "p64",
    "name": "Green World Health Supplement 64",
    "category": "Nutraceutical Medicines",
    "description": "NMN improves Cardiovascular Disease J A 2. Anti-aging Y, 4",
    "benefits": [
      "NMN improves Cardiovascular Disease x",
      "A 2. Anti-aging Y, 4",
      "NMN S 3,NMN improves energy production, DN Tepair a d ohgevity.",
      "Be ul Recommended Use  Y.",
      "Tl. NF Take half an hour after meals 2"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4553,
    "stock": 100,
    "image": "/products/slide_66.png",
    "isFarm": false
  },
  {
    "id": "p65",
    "name": "pT Pa SGT UAT",
    "category": "Nutraceutical Medicines",
    "description": "Activate blood platelet, promote platelet aggregation, and restrain bleeding quickly.",
    "benefits": [
      "Activate blood platelet, promote platelet aggregation, and",
      "restrain bleeding quickly.",
      "Promote the generation of basic fibroblast growth factors and",
      "vascular endothelial growth factors, accelerate blood capillary",
      "- - growth and connective tissue proliferation, heal the bleeding"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4737,
    "stock": 100,
    "image": "/products/slide_67.png",
    "isFarm": false
  },
  {
    "id": "p66",
    "name": "make menstruation unhindered and relieve menstrual disorders.preferably with meal.",
    "category": "Nutraceutical Medicines",
    "description": "SMILIFE Sanitary Napkin has three categories (Day Use, Night bbl ZED Use and Panty Liner) that make females ease anytime P Ed SE",
    "benefits": [
      "Promotes overall health and systemic balance.",
      "Natural formulation with targeted wellness benefits."
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2215,
    "stock": 100,
    "image": "/products/slide_68.png",
    "isFarm": false
  },
  {
    "id": "p67",
    "name": "Thoroughly cleanse the skin",
    "category": "Nutraceutical Medicines",
    "description": "A 1. Moisturize the skin EE 2. Moisten and nourish the skin",
    "benefits": [
      "A 1. Moisturize the skin",
      "2. Moisten and nourish the skin",
      "_JWesSoap 3. Whiten the skin",
      "Thoroughly cleanse the skin"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 4824,
    "stock": 100,
    "image": "/products/slide_69.png",
    "isFarm": false
  },
  {
    "id": "p68",
    "name": "People need reduce abdominal fat",
    "category": "Nutraceutical Medicines",
    "description": "Alleviates backache caused lumbar muscle strain lumbar 2. Relieves lower abdominal coldness and pain and dysmenorrhea.",
    "benefits": [
      "Alleviates backache caused by lumbar muscle strain or lumbar",
      "Relieves lower abdominal coldness and pain and dysmenorrhea.",
      "Long-term usage helps burn the abdominal fat thus is effective",
      "in reducing abdominal fat"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3263,
    "stock": 100,
    "image": "/products/slide_70.png",
    "isFarm": false
  },
  {
    "id": "p69",
    "name": "52 SPs 3. Eases the joint pain",
    "category": "Nutraceutical Medicines",
    "description": "Fa 1. Expels pathogenic wind, dampness and cold from the painful joint J 9 2. Improves blood circulation and reduces blood stasis",
    "benefits": [
      "ro Fa i  1. Expels pathogenic wind, dampness and cold from the painful joint",
      "9  2. Improves blood circulation and reduces blood stasis",
      "52 SPs  i 3. Eases the joint pain"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2221,
    "stock": 100,
    "image": "/products/slide_71.png",
    "isFarm": false
  },
  {
    "id": "p70",
    "name": "other pathogens",
    "category": "Nutraceutical Medicines",
    "description": "Expels the toxins, wasted body fluids, dampness and For detoxification DetoxinPad",
    "benefits": [
      "Expels the toxins, wasted body fluids, dampness and",
      "Detoxifies the body"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 3444,
    "stock": 100,
    "image": "/products/slide_72.png",
    "isFarm": false
  },
  {
    "id": "p71",
    "name": "Pro-Slim Tea People who are overweight obese",
    "category": "Weight Management",
    "description": "Za 1.Restrict absorption the fat from the diet Ze 2. Accelerate the break-down fat and reduce",
    "benefits": [
      "Za  1.Restrict absorption of the fat from the diet",
      "i Th small intestine",
      "Ze  2. Accelerate the break-down of fat and reduce"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachet(s) each day",
    "price": 4440,
    "stock": 100,
    "image": "/products/slide_8.png",
    "isFarm": false
  },
  {
    "id": "p72",
    "name": "Lipid Care Tea .",
    "category": "Weight Management",
    "description": "imprfle fat metabolism burning fat produce energy - . 5 2. Prexent diseases caused lipid metabolic disorders like",
    "benefits": [
      "imprfle fat metabolism by burning fat to produce energy - .",
      "5 2. Prexent diseases caused by lipid metabolic disorders like",
      "AP coronary artery disease, fatty liver and diabetes"
    ],
    "ingredients": [
      "Natural Herbal Extract"
    ],
    "usage": "1-2 sachets daily",
    "price": 2737,
    "stock": 100,
    "image": "/products/slide_9.png",
    "isFarm": false
  }
];

export const farmProducts: Product[] = [];

import fs from 'fs';

const extracts = JSON.parse(fs.readFileSync('product_extracts.json', 'utf8'));

const existingProducts = [
    { id: "p1", name: "Kuding Plus Tea", category: "Immune Boosters", slide: "slide_2.png" },
    { id: "p2", name: "Breast Care Tea", category: "Women's Health", slide: "slide_3.png" },
    { id: "p3", name: "Cordyceps Plus Capsule", category: "Immune Boosters", slide: "slide_22.png" },
    { id: "p4", name: "Intestine Cleansing Tea", category: "Digestive Health", slide: "slide_5.png" },
    { id: "p5", name: "Balsam Pear Tea", category: "Blood Circulation", slide: "slide_6.png" },
    { id: "p6", name: "Pine Pollen Tea", category: "Energy Products", slide: "slide_7.png" },
    { id: "p7", name: "Jinpure Tea", category: "Immune Boosters", slide: "slide_10.png" },
    { id: "p8", name: "Ginseng RHs Capsule", category: "Energy Products", slide: "slide_29.png" },
    { id: "p9", name: "Ganoderma Plus Capsule", category: "Nutraceutical Medicines", slide: "slide_24.png" },
    { id: "p10", name: "Soy Power Capsule", category: "Women's Health", slide: "slide_30.png" },
    { id: "p11", name: "Deep Sea Fish Oil Softgel", category: "Blood Circulation", slide: "slide_39.png" },
    { id: "p12", name: "Calcium Tablet (For Adults)", category: "Children's Health", slide: "slide_32.png" },
    { id: "p13", name: "NutriPlant Organic Plus Fertilizer (NOPF)", category: "Agricultural Products", slide: "NeutricPlant Organic Fertilizer.png", isFarm: true }
];

const categories = [
  "Nutraceutical Medicines",
  "Immune Boosters",
  "Digestive Health",
  "Blood Circulation",
  "Energy Products",
  "Weight Management",
  "Men's Health",
  "Women's Health",
  "Children's Health",
  "Agricultural Products",
];

function sanitize(text) {
    if (!text) return "";
    return text
        .replace(/[^\w\s\(\)\-\.,]/g, '') // Remove weird symbols
        .replace(/^\d+[\.\s]*/, '') // Remove ANY leading numbers like "1. ", "2 ", etc.
        .replace(/^[A-Z]{1,2}\s+\d+[\.\s]*/, '') // Remove "LR 2. ", "A 4. "
        .replace(/^[A-Z]{1,2}\s+/, '') // Remove leading noise like "LR ", "A ", "AN "
        .replace(/\b[a-z]{1,2}\b/g, '') // Remove isolated 1-2 letter noise
        .replace(/\s+/g, ' ') // Collapse spaces
        .replace(/^[^\w]+/, '') // Remove leading non-word chars
        .trim();
}

function isBenefit(line) {
    const l = line.toLowerCase();
    return /^\d/.test(l) || // Starts with digit
           l.includes('helps') || 
           l.includes('improves') || 
           l.includes('reduces') || 
           l.includes('contains') ||
           l.includes('boosts') ||
           l.includes('provides') ||
           l.includes('suitable for') ||
           l.length > 60; // Too long for a name
}

function cleanBenefit(b) {
    if (!b) return "";
    let cleaned = b.replace(/^\d+\.\s*/, '').replace(/[^\w\s\-\.,]/g, '').trim();
    // Remove prefixes like "AN", "RL", "i"
    cleaned = cleaned.replace(/^[A-Z]{1,2}\b\s+/, '').replace(/^[a-z]\b\s+/, '');
    return cleaned;
}

function getCategory(name, benefits) {
    const n = name.toLowerCase();
    const b = benefits.join(' ').toLowerCase();
    
    if (n.includes('tea') || n.includes('capsule') || n.includes('tablet') || n.includes('drink') || n.includes('coffee')) {
        if (n.includes('immune') || b.includes('immunity') || b.includes('infection') || b.includes('virus')) return "Immune Boosters";
        if (n.includes('intestine') || b.includes('constipation') || b.includes('digest') || b.includes('gut')) return "Digestive Health";
        if (n.includes('blood') || b.includes('circulation') || b.includes('heart') || b.includes('pressure')) return "Blood Circulation";
        if (n.includes('energy') || n.includes('ginseng') || b.includes('fatigue') || b.includes('stamina')) return "Energy Products";
        if (n.includes('slimming') || n.includes('weight') || b.includes('fat') || b.includes('metabolism')) return "Weight Management";
        if (n.includes('men') || n.includes('vigpower') || n.includes('knight')) return "Men's Health";
        if (n.includes('women') || n.includes('breast') || n.includes('soy') || n.includes('ovary')) return "Women's Health";
        if (n.includes('children') || n.includes('calcium')) return "Children's Health";
    }
    return "Nutraceutical Medicines";
}

const allProducts = [];
const processedSlides = new Set();

const manualOverrides = {
    "slide_2.png": { 
        name: "Kuding Plus Tea", 
        category: "Immune Boosters", 
        description: "A premium herbal infusion known for its powerful anti-inflammatory and detoxifying properties.",
        benefits: ["Alleviates inflammation and supports overall wellness", "Aids in body detoxification and metabolic health", "Enhances immunity to help prevent cold and flu", "Supports healthy blood lipid and blood pressure levels"]
    },
    "slide_3.png": { 
        name: "Breast Care Tea", 
        category: "Women's Health", 
        description: "Specifically formulated to support endocrine balance and promote breast health through natural detoxification.",
        benefits: ["Supports a healthy endocrine system and hormonal balance", "Helps dissipate blood stasis and clear dampness", "Targets common underlying causes of breast discomfort", "Promotes long-term breast health and vitality"]
    },
    "slide_22.png": { 
        name: "Cordyceps Plus Capsule", 
        category: "Immune Boosters", 
        description: "A potent formulation that balances and strengthens the immune system while supporting respiratory health.",
        benefits: ["Balances overactive immune responses for those with sensitivities", "Enhances weakened immunity for chronic health support", "Supports lung function and chronic respiratory wellness", "Provides natural energy and stamina support"]
    },
    "slide_5.png": { 
        name: "Intestine Cleansing Tea", 
        category: "Digestive Health", 
        description: "A gentle yet effective natural solution for colon detoxification and healthy bowel regularity.",
        benefits: ["Lubricates the intestinal wall for smooth digestion", "Relieves occasional constipation and promotes regularity", "Supports healthy colon detoxification and waste removal", "Ideal for those seeking a natural digestive reset"]
    },
    "slide_12.png": { name: "Muscle Recovery & Energy Drink", category: "Energy Products" },
    "slide_14.png": { name: "Intestinal Health & Immune Defense", category: "Digestive Health" },
    "slide_15.png": { name: "Longevity & Anti-Aging Capsule", category: "Nutraceutical Medicines" },
    "slide_16.png": { name: "Actiberry Anti-Inflammatory Drink", category: "Nutraceutical Medicines" },
    "slide_23.png": { name: "Energy & Stamina Tea", category: "Energy Products" },
    "slide_25.png": { name: "Cardiovascular Health Softgel", category: "Blood Circulation" },
    "slide_26.png": { name: "Immune System & Cancer Support", category: "Immune Boosters" },
    "slide_27.png": { name: "Vigpower & Men's Health Capsule", category: "Men's Health" },
    "slide_28.png": { name: "Gastric Health & Nutrient Support", category: "Digestive Health" },
    "slide_31.png": { name: "Multivitamin Tablet (For Children)", category: "Children's Health" },
    "slide_35.png": { name: "Zinc Tablet (For Children)", category: "Children's Health" }
};

// Add existing first to keep IDs stable
existingProducts.forEach(ep => {
    processedSlides.add(ep.slide);
    const extract = extracts.find(x => x.file === ep.slide);
    const override = manualOverrides[ep.slide];
    
    const cleanedBenefits = override && override.benefits 
        ? override.benefits 
        : (extract ? extract.benefits.map(cleanBenefit).filter(b => b.length > 10) : ["Natural health support for various wellness needs."]);
    
    allProducts.push({
        id: ep.id,
        name: override?.name || ep.name,
        category: override?.category || ep.category,
        description: override?.description || (extract ? (sanitize(extract.rawText.split('Health Benefits')[0]) || "Advanced health formulation based on traditional knowledge.") : "Premium nutraceutical solution for health and wellness."),
        benefits: cleanedBenefits.length > 0 ? cleanedBenefits : ["Natural health support for various wellness needs."],
        ingredients: ["Natural Herbal Extract"],
        usage: extract ? extract.rawText.match(/(\d-\d sachet\(s\) each day)/)?.[0] || "1-2 sachets daily" : "1-2 sachets daily",
        price: ep.price || Math.floor(Math.random() * (5000 - 1500) + 1500),
        stock: 100,
        image: `/products/${ep.slide}`,
        isFarm: ep.isFarm || false
    });
});

// Add new ones
let pId = 14;
extracts.forEach(ex => {
    if (processedSlides.has(ex.file)) return;
    
    const lines = ex.rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    let name = "";
    
    // Improved name detection: look for known product indicators
    const productKeywords = ['Tea', 'Capsule', 'Drink', 'Coffee', 'Powder', 'Softgel', 'Tablet', 'Medicine'];
    
    // Look for lines that contain keywords but aren't instructions or benefits
    const nameCandidates = lines.filter(l => 
        productKeywords.some(key => l.includes(key)) && 
        !l.toLowerCase().includes('sachet') &&
        !isBenefit(l) &&
        l.length > 5 && l.length < 50
    );

    if (nameCandidates.length > 0) {
        name = sanitize(nameCandidates[nameCandidates.length - 1]);
    }
    
    if (!name || name.length < 5) {
        // Fallback to searching near "Suitable for" but skip benefit lines
        const sfIndex = lines.findIndex(l => l.toLowerCase().includes('suitable for'));
        if (sfIndex > 0) {
            for (let i = sfIndex - 1; i >= 0; i--) {
                if (!isBenefit(lines[i]) && lines[i].length > 3) {
                    name = sanitize(lines[i]);
                    break;
                }
            }
        }
    }

    if (!name || name.length < 5) {
        name = sanitize(ex.name);
    }
    
    if (!name || name.length < 5 || name.toLowerCase().includes('sachet')) {
        name = "Green World Health Supplement " + pId;
    }

    const cleanedBenefits = ex.benefits.map(cleanBenefit).filter(b => b.length > 15);
    
    // Apply manual overrides
    if (manualOverrides[ex.file]) {
        name = manualOverrides[ex.file].name;
    }

    const descriptionLines = lines.filter(l => 
        l.length > 25 && 
        !l.includes('Health Benefits') && 
        !l.includes('Suitable for') && 
        !l.toLowerCase().includes('sachet') &&
        !name.includes(l)
    );

    const description = descriptionLines.length > 0 ? descriptionLines.slice(0, 2).join(' ') : "A specialized herbal formulation designed to support systemic health and optimize wellness.";

    allProducts.push({
        id: "p" + pId++,
        name: name,
        category: manualOverrides[ex.file]?.category || getCategory(name, cleanedBenefits),
        description: sanitize(description),
        benefits: cleanedBenefits.length > 0 ? cleanedBenefits : ["Promotes overall health and systemic balance.", "Natural formulation with targeted wellness benefits."],
        ingredients: ["Natural Herbal Extract"],
        usage: ex.rawText.match(/(\d-\d sachet\(s\) each day)/)?.[0] || "1-2 sachets daily",
        price: Math.floor(Math.random() * (5000 - 1500) + 1500),
        stock: 100,
        image: `/products/${ex.file}`,
        isFarm: false
    });
});

const tsContent = `export interface Product {
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

export const categories = ${JSON.stringify(categories, null, 2)};

export const products: Product[] = ${JSON.stringify(allProducts, null, 2)};

export const farmProducts: Product[] = [];
`;

fs.writeFileSync('src/data/products.ts', tsContent);
console.log("Strictly improved src/data/products.ts with " + allProducts.length + " products.");

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
    "slide_6.png": { name: "Balsam Pear Tea", category: "Nutraceutical Medicines", description: "Contains plant insulin that helps regulate blood sugar levels and supports healthy glucose metabolism.", price: 4496 },
    "slide_7.png": { name: "Pine Pollen Tea", category: "Energy Products", description: "A nutrient-rich herbal tea that enhances stamina and supports hormonal balance for both men and women.", price: 4405 },
    "slide_10.png": { name: "Jinpure Tea", category: "Immune Boosters", description: "Clears pathogenic heat and supports upper respiratory health, perfect for flu prevention.", price: 4177 },
    "slide_29.png": { name: "Ginseng RHs Capsule", category: "Energy Products", description: "Advanced health formulation that promotes vitality and supports immune system recovery.", price: 4112 },
    "slide_24.png": { name: "Ganoderma Plus Capsule", category: "Nutraceutical Medicines", description: "Specifically formulated to regulate immunity and reduce side effects of systemic intensive treatments.", price: 2865 },
    "slide_30.png": { name: "Soy Power Capsule", category: "Women's Health", description: "Supports endocrine health and bone density for women, promoting long-term cardiovascular wellness.", price: 4989 },
    "slide_39.png": { name: "Deep Sea Fish Oil Softgel", category: "Blood Circulation", description: "Rich source of EPA and DHA that supports brain function and healthy blood lipid levels.", price: 4466 },
    "slide_32.png": { name: "Calcium Tablet (For Adults)", category: "Nutraceutical Medicines", description: "Essential calcium supplement to strengthen bones and prevent deficiency in adults.", price: 1850 },
    "slide_11.png": { name: "Energy Tea", category: "Energy Products", description: "Relieves chronic fatigue, refreshes the brain, and revitalizes natural energy levels.", price: 3922 },
    "slide_12.png": { name: "Muscle Recovery & Energy Drink", category: "Energy Products", description: "Replenishes lost vitamins and minerals while relieving tiredness after workouts.", price: 4920 },
    "slide_13.png": { name: "Wake JQQ Fresh Drink", category: "Weight Management", description: "Helps the liver process alcohol efficiently and provides protective antioxidants.", price: 1776 },
    "slide_16.png": { name: "Actiberry Anti-Inflammatory", category: "Nutraceutical Medicines", description: "A powerful antioxidant-rich berry drink that targets systemic inflammation.", price: 2086 },
    "slide_18.png": { name: "Green World Super Nutrition", category: "Nutraceutical Medicines", description: "A nutrient-dense cocktail of antioxidants and vitamins, perfect for yogurt or breakfast cereal.", price: 2086 },
    "slide_19.png": { name: "Blueberry Breuvage", category: "Nutraceutical Medicines", description: "A well-blended berry cocktail providing powerful natural antioxidants against oxidative damage.", price: 2877 },
    "slide_20.png": { name: "Bleuet Minceur (Slimming)", category: "Weight Management", description: "A healthy meal replacement that reduces calorie intake and promotes a sense of fullness.", price: 4618 },
    "slide_21.png": { name: "Protein Powder", category: "Nutraceutical Medicines", description: "High-quality protein providing essential amino acids without cholesterol or hormones.", price: 2131 },
    "slide_23.png": { name: "Energy & Stamina Tea", category: "Energy Products", description: "A balanced blend that enhances natural immunity and supports long-term energy.", price: 4217 },
    "slide_25.png": { name: "Cardiovascular Health Softgel", category: "Blood Circulation", description: "Supports healthy blood lipid levels and reduces blood viscosity for better circulation.", price: 2801 },
    "slide_26.png": { name: "Immune System & Cancer Support", category: "Immune Boosters", description: "Boosts immunity and assists in the management of cellular health.", price: 3209 },
    "slide_27.png": { name: "Vigpower & Men's Health Capsule", category: "Men's Health", description: "Conserves vital power and strengthens reproductive health through natural nourishment.", price: 1968 },
    "slide_28.png": { name: "Gastric Health & Nutrient Support", category: "Digestive Health", description: "Protects the gastric mucosa and balances nutrient intake for optimal digestion.", price: 2794 },
    "slide_31.png": { name: "Multivitamin Tablet (For Children)", category: "Children's Health", description: "Essential vitamins to support healthy growth and development in children.", price: 2695 },
    "slide_33.png": { name: "Zinc Tablet (For Adults)", category: "Nutraceutical Medicines", description: "Essential trace element for immune function, skin health, and metabolic balance.", price: 4669 },
    "slide_34.png": { name: "Multi-Vitamins Tablet", category: "Nutraceutical Medicines", description: "Supplements the body with essential fat-soluble and water-soluble vitamins.", price: 1593 },
    "slide_35.png": { name: "Zinc Tablet (For Children)", category: "Children's Health", description: "Supports the immune system and growth in children with essential zinc.", price: 3970 },
    "slide_36.png": { name: "Garlic Oil Softgel", category: "Nutraceutical Medicines", description: "Natural anti-microbial support that helps maintain healthy cholesterol levels.", price: 4085 },
    "slide_37.png": { name: "Chitosan Capsule", category: "Weight Management", description: "Helps manage blood lipids and supports natural weight loss through fat binding.", price: 4580 },
    "slide_38.png": { name: "Lecithin Softgel", category: "Nutraceutical Medicines", description: "Vigorizes brain function and protects liver cells through essential fatty acids.", price: 3156 },
    "slide_4.png": { name: "Compound Marrow Powder", category: "Nutraceutical Medicines", description: "Supports lung health and respiratory function through natural nutrition.", price: 2827 },
    "slide_40.png": { name: "Ginkgo Biloba Capsule", category: "Blood Circulation", description: "Enhances memory and brain circulation by increasing oxygen supply to tissues.", price: 1576 }
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

import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const dir = 'D:\\HP\\Work\\George juma\\green_world_slides_product slide';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

const products = [
  "Kuding Plus Tea", "Breast Care Tea", "Cordyceps Plus Capsule", 
  "Intestine Cleansing", "Balsam Pear Tea", "Pine Pollen Tea", 
  "Jinpure Tea", "Ginseng RHs", "Ganoderma Plus", "Soy Power", 
  "Deep Sea Fish Oil", "Calcium Tablet", "NeutricPlant"
];

async function main() {
  const matches = {};
  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
      const lowerText = text.toLowerCase();
      
      for (const p of products) {
        if (lowerText.includes(p.toLowerCase()) || lowerText.replace(/[^a-z]/g, '').includes(p.toLowerCase().replace(/[^a-z]/g, ''))) {
          // If a product is mentioned, we log it
          console.log(`FOUND ${p} in ${file}`);
          if (!matches[p]) matches[p] = [];
          matches[p].push(file);
        }
      }
    } catch (e) {
      console.error("Error reading", file);
    }
  }
  fs.writeFileSync('matches.json', JSON.stringify(matches, null, 2));
  console.log("Done OCR.");
}

main();

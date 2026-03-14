import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const dir = 'd:\\HP\\Projects\\IT Projects\\green-world-web\\green-world-web\\public\\products';
const files = fs.readdirSync(dir).filter(f => f.startsWith('slide_') && f.endsWith('.png'));

async function main() {
  const results = [];
  console.log(`Processing ${files.length} slides...`);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      console.log(`Reading ${file}...`);
      const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
      
      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      // Heuristic for name: usually the first few lines or near the bottom title
      // But looking at the slides, the name is often at the bottom or near the image.
      // Let's look for "Health Benefits" and take text above or below it.
      
      const healthBenefitsIndex = lines.findIndex(l => l.toLowerCase().includes('health benefits'));
      let name = "Unknown Product";
      if (healthBenefitsIndex > 0) {
          // Name is often before health benefits or the very last line in the slide footer
          name = lines[0]; // Simple guess for now
      }
      
      // Look for the name at the bottom (usually slide footer)
      const footerName = lines[lines.length - 1];
      if (footerName && footerName.length > 3 && !footerName.includes('World') && !footerName.includes('Business')) {
          name = footerName;
      }

      const benefits = [];
      if (healthBenefitsIndex !== -1) {
          for (let i = healthBenefitsIndex + 1; i < lines.length; i++) {
              if (lines[i].toLowerCase().includes('suitable for') || lines[i].toLowerCase().includes('usage') || /^[0-9]\./.test(lines[i])) {
                  if (/^[0-9]\./.test(lines[i])) {
                      benefits.push(lines[i].replace(/^[0-9]\.\s*/, ''));
                  }
              } else if (benefits.length < 5 && lines[i].length > 5) {
                   // Add lines that look like benefits
                   benefits.push(lines[i]);
              }
              if (lines[i].toLowerCase().includes('suitable for')) break;
          }
      }

      results.push({
        file,
        name,
        benefits,
        rawText: text.substring(0, 500)
      });
      
    } catch (e) {
      console.error("Error reading", file, e);
    }
  }
  
  fs.writeFileSync('product_extracts.json', JSON.stringify(results, null, 2));
  console.log("Done. Results saved to product_extracts.json");
}

main();

import Tesseract from 'tesseract.js';
const path = require('path');
const dir = 'D:\\HP\\Work\\George juma\\green_world_slides_product slide';
async function test() {
  const f4 = await Tesseract.recognize(path.join(dir, 'slide_4.png'), 'eng');
  console.log('slide_4:', f4.data.text.slice(0, 100).replace(/\n/g, ' '));
  const f5 =  await Tesseract.recognize(path.join(dir, 'slide_5.png'), 'eng');
  console.log('slide_5:', f5.data.text.slice(0, 100).replace(/\n/g, ' '));
}
test();

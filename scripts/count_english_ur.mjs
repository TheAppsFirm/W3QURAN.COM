import fs from 'fs';

const files = ['042.js', '043.js', '044.js', '045.js'];
const dir = 'src/data/treebank/ontology/';

for (const file of files) {
  const content = fs.readFileSync(dir + file, 'utf8');
  const urFields = content.match(/ur: "[^"]*"/g) || [];
  const arabicRegex = /[\u0600-\u06FF]/;
  const englishUr = urFields.filter(f => {
    const text = f.replace(/^ur: "/, '').replace(/"$/, '');
    return text.length > 0 && !arabicRegex.test(text);
  });
  console.log(`${file}: Total ur: ${urFields.length}, English-only: ${englishUr.length}, Already Urdu: ${urFields.length - englishUr.length}`);
}

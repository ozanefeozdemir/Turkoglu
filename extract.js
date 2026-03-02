const fs = require('fs');
const pdf = require('pdf-parse');

(async () => {
    try {
        let db1 = fs.readFileSync('public/turkoglushipyardpdf.pdf');
        let d1 = await pdf(db1);
        fs.writeFileSync('doc1.txt', d1.text);

        let db2 = fs.readFileSync('public/YENİ İNŞA GEMİLER (TANITIM).pdf');
        let d2 = await pdf(db2);
        fs.writeFileSync('doc2.txt', d2.text);
        console.log("Extraction complete.");
    } catch(e) {
        console.error("Error:", e);
    }
})();

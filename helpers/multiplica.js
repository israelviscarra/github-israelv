const { blue } = require("colors");
const fs = require("fs");
const crearfitxer=(base = 5)=> {
    console.log('============'.blue);
    console.log('Taula del '.yellow+ base);
    console.log('============'.blue);
    let sortida='';

    for (let i= 0; i <=10; i++) {
        sortida+= `${base}*${i}=${base*i}\n`;    
    }
    fs.writeFileSync(`taula${base}.txt`,sortida);
};
module.exports = {
    crearfitxer
}
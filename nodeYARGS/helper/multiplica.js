require('colors');
const fs = require("fs");

const llistarTaula = (base, limit = 10) => {
    console.log('==============='.green);
    console.log`Taula del ${base}` .yellow;
    console.log('==============='.green);

    for (let i = 0; i < limit; i++) {
        console.log(`${base}*${i} = ${base*i}`.grey);
    }
};
const crearFitxer = (base,limit = 10) => {
    if(!Number(base)){
        console.log('El valor base de la base a de ser numeric');
        return;
    }
    let data = '';
    for (let i = 0; i < limit; i++) {
    data +=`${base}*${i}=${base*i}\n`;        
    }
    fs.writeFile(`taula-${base}-${limit}`,(err)=>{
        if (err)throw Error (err);
        else console.log(`taula-${base}-${limit}`);
    })

}

module.exports ={
    llistarTaula,
    crearFitxer,
};
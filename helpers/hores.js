const fs = require("fs");
const crearalumne=(nom = 'no_name', hores= 0)=> {

    let sortida='';
    sortida =`Alumne:${nom}:: hores:${hores}`;
   
    fs.writeFileSync(`${nom}.txt`,sortida);
};
module.exports = {
    crearalumne
}
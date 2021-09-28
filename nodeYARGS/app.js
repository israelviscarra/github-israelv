// require("colors");
const argv = require("./config/yrags").argv;

const {llistarTaula} = require("./helper/multiplica");
const {crearFitxer} = require("./helper/multiplica");
// console.log(argv);
console.clear();
//console.log(argv);
let param = argv._[0];
// console.log(param);
switch(param){
    case "llistar":
        llistarTaula(argv.base, argv.limit);
        console.log('llisto la taula de multiplicac');
        break;
    case "crear":
        crearFitxer(argv.base, argv.limit);
        console.log('crea un nou fitxer');

        break;
    default:
    console.log('Comanda no reconeguda');
}
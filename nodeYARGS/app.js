require("colors");
const argv = require("./config/yargs.js").argv;

const { llistarTaula } = require("./helpers/multiplica");
const { crearFitxer } = require("./helpers/multiplica");

console.clear();
//console.log(argv);

let param = argv._[0];

switch (param) {
  case "llistar":
    llistarTaula(argv.base, argv.limit);
    break;
  case "crear":
    crearFitxer(argv.base, argv.limit);
    break;
  default:
    console.log("comanda no reconeguda");
}

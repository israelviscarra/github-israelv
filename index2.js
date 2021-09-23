require('colors');
const {crearalumne}=require('./helpers/hores')
console.clear;
console.log(process.argv);

let nom=process.argv[2];
let hores=process.argv[3];

nom = nom.split("=")[1]//sotida es eun array
hores = hores.split("=")[1]

// console.log(nom);
// console.log(hores);

crearalumne(nom,hores)
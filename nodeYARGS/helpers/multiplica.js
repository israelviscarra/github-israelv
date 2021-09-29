require("colors");
const fs = require("fs");

const llistarTaula = (base, limit = 10) => {
  console.log("=========".green);
  console.log(`Taula del ${base}`.yellow);
  console.log("=========".green);

  for (let index = 0; index < limit; index++) {
    console.log(`${base} * ${index} = ${base * index}`.cyan);
  }
};

const crearFitxer = (base, limit = 10) => {
  if (!Number(base)) {
    console.log("El valor base ha de ser numeric".bold.red);
    return;
  }
  console.log("=========".green);
  console.log(`Taula del ${base} creada`.yellow);
  console.log("=========".green);

  let sortida = "";
  for (let index = 1; index <= limit; index++) {
    sortida += `${base} * ${index} = ${base * index}\n`;
  }

  fs.writeFileSync(`taulaDel-${base}-al-${limit}.txt`, sortida);
};

module.exports = {
  llistarTaula,
  crearFitxer,
};

const inquirer = require("inquirer");
require("colors");

const preguntes = [
    {
      type: "list",
      name: "opcio",
      message: "Què vols fer?".yellow.bgBlack,
      choices: [
        {
          value: "1",
          name: `${"1 ".green} Nova reserva`,
        },
        {
          value: "2",
          name: `${"2 ".green} Mostrat sala`,
        },
        {
          value: "3",
          name: `${"3 ".green} Mostrar recaudació`,
        },
        {
          value: "4",
          name: `${"4 ".green} Eliminar reserva`,
        },
        {
          value: "0",
          name: `${"0 ".green} salir`,
        },

      ],
    },
  ];

  const inquirerMenu = async () => {
    console.clear();
    console.log("========================".cyan);
    console.log("   Selecciona una opció".yellow);
    console.log("========================\n".cyan);
  
    const { opcio } = await inquirer.prompt(preguntes);
  
    return opcio; // retorno un valor entre 0 i 5
  };

  const pausa = async () => {
    const question = [
      {
        type: "input",
        name: "enter",
        message: `Presiona ${"enter".yellow} per a continuar`,
      },
    ];
    console.log("\n");
    await inquirer.prompt(question);
  };

  const nova_reserva = async (message) => {
    const question = [
      {
        type: "input",
        name: "nom",
        message,
        validate(value) {
          if (value.length === 0) {
            return "Si us plau, introdueix un numero";
          }
          return true;
        },
      },
    ];
  
    const { nom } = await inquirer.prompt(question);
    return nom;
  };

  module.exports = {
    inquirerMenu,
    pausa,
    nova_reserva,
  }
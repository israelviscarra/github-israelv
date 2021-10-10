require("colors");
const { inquirerMenu, pausa,nova_reserva} = require("./helpers/inquirer");
const main = async () => {
    let opt = "";

  
    do {
      opt = await inquirerMenu();
  
      switch (opt) {
        case "1":
            const nom_reserva = await nouTarea("Tarea:");

        break;

        case "2":

          break;
  
        case "3":

          break;
        

        case "4":

        break;
  
        case "5": 

        break;

      }

      await pausa();
    } while (opt !== "0");
  };



  main();
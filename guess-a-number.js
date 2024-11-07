const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  let attempts;
  
  const setDifficulty = (level) => {
    switch(level){
        case 'facil': return 15;
        case 'dificil': return 5;
        default: return 10;

    }
  };
  
  const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  
  readline.question("Selecciona el nivel de dificultad: ", (input) => {

    attempts = setDifficulty(input);
    if (input === 'facil' || input === 'medio' || input === 'alto'){
        console.log(`Has seleccionado la dificultad "${input}" y tienes ${attempts} intentos.`);
    }else {console.log(`Tienes ${attempts} intentos.`)}
    guessNumber();
  });
  
  const guessNumber = () => {
    readline.question("Ingresa tu suposición: ", (input) => {
      const guess = parseInt(input);
      attempts--;
  
      if (guess === randomNumber) {
        console.log("¡Felicidades! Has adivinado el número.");
        readline.close();
      } else if (attempts === 0) {
        console.log(`Te has quedado sin intentos. El número era ${randomNumber}.`);
        readline.close();
      } else {
        if (guess > randomNumber) {
          console.log("Demasiado alto. Intenta de nuevo.");
        } else {
          console.log("Demasiado bajo. Intenta de nuevo.");
        }
        console.log(`Te quedan ${attempts} intentos.`);
        guessNumber();
      }
    });
  };
  
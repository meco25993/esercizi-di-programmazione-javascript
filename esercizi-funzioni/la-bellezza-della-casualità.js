/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

function random (x) {
  var i = Math.round(Math.random()*x);
  console.log(`il numero casuale sceltro tra 0 e ${x} è ${i}`);
}

random(50);

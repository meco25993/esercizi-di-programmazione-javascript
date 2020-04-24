/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0


  http://www.imparareaprogrammare.it
*/

function tiktak (x) {
  let time = x;
  for (let i = 0; i < x; i++) {
    time = time - 1;
    console.log(time);
  }
}

tiktak(10);

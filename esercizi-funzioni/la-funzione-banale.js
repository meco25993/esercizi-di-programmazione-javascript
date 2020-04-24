/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE


  http://www.imparareaprogrammare.it
*/

function uguaglianza (x,y) {
  if (x === y){
    console.log (`TRUE`);
  } else {
    console.log (`FALSE`)
  }
}

uguaglianza(5,'5');

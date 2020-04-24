/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/

function conta (x){
  if (x <= 9999) {
    var n = x.toString();
    console.log(n.length);
  } else {
    console.log ('il numero è maggiore a 9999 non posso contarlo');
  }
}

conta(245);

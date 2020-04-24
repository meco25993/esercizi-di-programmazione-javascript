/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var n = [];

for ( var i = 0; i < 100; i++) {
  n.push(Math.round(Math.random() * 49 +1));
}

//var utente = [10, 2, 5, 70, 3];
var i = 0;

while ( i < n.length) {
  if (n[i] === 0) {
    i++
  } else {
    var utente = prompt(`Abbiamo questi numeri ${n}\n Inserendo un numero da 1 a 50 azzererai tutti i numeri divisibili per il numero scelto`);
    n.forEach(function(item, index){
        if ( item % utente === 0) {
          n[index] = 0;
        }
    })
  }
}



console.log(n);

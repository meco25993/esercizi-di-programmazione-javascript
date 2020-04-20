/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/

var numbers = [55, 11, 34, 82, 105, 24, 75];
var p = 0;

numbers.forEach(function(item){
  p = item + p;
});

var nval = numbers.length;
var media = p/nval;


var minori = numbers.filter(function(item){
  return item < media;
});

console.log(`Dati i numeri ${numbers}, la media è ${media} e i numeri minori della media sono ${minori.length} o meglio i seguenti: ${minori}`);

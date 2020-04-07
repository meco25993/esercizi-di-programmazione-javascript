/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/


var s = 24596;

var h = Math.floor(s/3600);

//h = parseInt(h);

//time = time - h*3600;

var m = Math.floor((s - h*3600)/60);

//m = parseInt(m);

s = s - h*3600 - m*60;

//var s = time;

console.log('24596 secondi corrispondono a ' +h +' ore ' +m +' minuti e ' +s + ' secondi');

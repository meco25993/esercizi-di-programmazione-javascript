/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
var one = Math.random () * 100;
var one = Math.round(one);
var two = Math.random () * 100;
var two = Math.round(two);
var three = Math.random () * 100;
var three = Math.round(three);
var four = Math.random () * 100;
var four = Math.round(four);

if ( one > two ) {
  var max = one;
  var min = two;
}
else if ( one == two ) {
  var max = one;
  var min = two;
  }
else {
  var max = two;
  var min = one;
}


if ( three > max ) {
   max = three;
}
else if ( three < min ) {
  min = three;
}


if ( four > max ) {
   max = four;
}
else if ( four < min ) {
  min = four;
}


console.log (`I numeri scelti dagli utenti sono: \n Utente uno: ${one} \n Utente due: ${two} \n Utente tre: ${three} \n Utente quattro: ${four}`);
console.log (`Il numero maggiore tra quelli scelti è ${max}`);
console.log (`Il numero minore tra quelli scelti è ${min}`);

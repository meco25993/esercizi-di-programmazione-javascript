/*
  Ti ricordi le tabelline?
  Scrivi un programma che stampi che prenda in input un numero e stampi la tabellina corrispondente.
  http://www.imparareaprogrammare.it
*/

var number = Math.random () * 10;
number = Math.round(number);

console.log (`Oggi guardiamo la tabellina del ${number}`)

for ( var i = 0; i <= 10; i++)
{ var tab = number * i;
console.log (`${number} * ${i} = ${tab}`)}

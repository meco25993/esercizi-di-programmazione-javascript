/*
  Il conta cifre
  Scrivi un programma che calcoli quante cifre sono contenute in un numero inserito in input (massimo 9999).
  http://www.imparareaprogrammare.it
*/

var n = 6542;

if (n<=9999) {
var s = n.toString();
console.log(s.length);


} else {
  console.log('il numero non è valido perchè è più grande di 9999')
}

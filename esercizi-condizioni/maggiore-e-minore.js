/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/

var uno = 5;
var due = 4;
var tre = 7;
var qua = 7;

if (uno > due && uno > tre && uno > qua) {
  console.log ('la variabile uno è maggiore di tutte')
}
else if (uno < due && uno < tre && uno < qua) {
  console.log ('la variabile uno è minore di tutte')
}

if (due > uno && due > tre && due > qua) {
  console.log ('la variabile due è maggiore di tutte')
}
else if (due < uno && due < tre && due < qua) {
  console.log ('la variabile due è minore di tutte')
}

if (tre > uno && tre > due && tre > qua) {
  console.log ('la variabile tre è maggiore di tutte')
}
else if (tre < uno && tre < due && tre < qua) {
  console.log ('la variabile tre è minore di tutte')
}

if (qua > uno && qua > tre && qua > due) {
  console.log ('la variabile quattro è maggiore di tutte')
}
else if (qua < uno && qua < tre && qua > due) {
  console.log ('la variabile quattro è minore di tutte')
}

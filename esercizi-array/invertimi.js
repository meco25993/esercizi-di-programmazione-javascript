/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/


var n = [0];
var max = 10;

//genero una serie di N numeri
for (var i = 0; i < max; i++ ) {
  n[i+1] = n[i] + 1;
  }

//utiizzando un array di appoggio
var c = n;

for (i = 0; max >= i; max--) {
  console.log(c[max]);
}

//non utiizzando un array di appoggio
var max = 10;

for (i = 0; max >= i; max-- ) {
  console.log (n[max]);
}

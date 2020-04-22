/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

const n = 6;
const m = 10;
var a = 0;
const mat = [];

for (let i = 0; i < n; i++) {
  var temp = [];
  for (let j = 0; j < m; j++){
    let b = Math.round(Math.random()*99+1);
    a += b;
    temp.push(b);
  }
  mat.push(temp);
}

console.log(mat);
console.log(a);

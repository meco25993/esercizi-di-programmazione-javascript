/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

const n = 5;
const m = 7;
const mat = [];
const righe = [];
const col = [];

for (let i = 0; i < n; i++){
  let a = 0;
  let temp = [];
  for(let j = 0; j < m; j++){
    let b = Math.round(Math.random()*99+1);
    temp.push(b);
    a += b;
  }
  mat.push(temp);
  righe.push(a);
}

for (let i = 0; i < m; i++){
  let a = 0;
  for (let j = 0; j < n; j++){
    a += mat[j][i];
  }
  col.push(a);
}

console.log(mat);
console.log(righe);
console.log(col);

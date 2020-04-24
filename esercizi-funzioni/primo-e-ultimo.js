/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

//funzioni che prendono 3 valori e stampano rispettivamente il maggiore e il minore
function maggiore (x,y,j){
  var max = 0;
  if (x > y)
    max = x;
  else
    max = y;
  if (max < j)
    max = j;
  console.log(`il numero maggiore è ${max}`);
}

function minore (x,y,j){
  var min = 0;
  if ( x > y)
    min = y;
  else
    min = x;
  if (min > j)
    min = j;
  console.log(`il numero minore è ${min}`);
}

var a = 1;
var b = -10;
var c = 4;

maggiore(a,b,c);
minore(a,b,c);

//funzioni che prendono 1 array e stampano rispettivamente il numero maggiore e il minore contenuto nell'array
function maggioreAr (x){
  var maxa = 0;
  x.forEach(function(item,index){
    if (maxa < item)
      maxa = item;
  })
  console.log(`il numero maggiore è ${maxa}`);
}

function minoreAr (x){
  var minA = 0;
  x.forEach(function(item,index){
    if (minA > item)
      minA = item;
  })
  console.log(`il numero maggiore è ${minA}`);
}

var ar = [1,-10,4];

maggioreAr(ar);
minoreAr(ar);

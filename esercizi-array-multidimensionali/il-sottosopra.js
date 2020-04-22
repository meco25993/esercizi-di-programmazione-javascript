/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input:
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

var x = [[1, 2],[3, 4],[5, 6]];
var a = [];

for ( var i = 0; i < x[0].length; i++) {
  var temp = [];
  for ( c= 0; c < x.length; c++ ) {
    temp.push(x[c][i]);
  }
  a.push(temp);
}

console.log(a);

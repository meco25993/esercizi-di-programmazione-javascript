/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per andare indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

var n = 27;
var x = ``;
var t = ``;
var space = (n - 1)/2;
var n1 = n - 2;

for (i = 0; i < n; i = i + 2 ) {

  for ( e = 0; e < space; e++  ) {
    t += ` `;
    }

  space = space - 1;

  for( c = 0; c <= i; c = c + 1) {
    x += `x`;
  }

  console.log (`${t}${x}`);
  x = ``;
  t = ``;
}

space = 0;

for (i = 1; i < n; i = i + 2 ) {

  for ( e = 0; e <= space; e++  ) {
    t += ` `;
    }

    space +=  1;

    for( c = 0; c < n1; c = c + 1) {
      x += `x`;
    }

    n1 = n1 - 2;

    console.log (`${t}${x}`);
    t = ``;
    x = ``;
}

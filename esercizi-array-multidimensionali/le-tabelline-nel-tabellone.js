/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

  http://www.imparareaprogrammare.it
*/

var x = [0,1,2,3,4,5,6,7,8,9,10];
var c = [];

x.forEach(function(item,index){
  for (i = 0; i <= 10 ; i++){
    var b = item * i;
    var t = b.toString();
    if ( c[index] === undefined ){
      c[index] = [t +'|'];
    } else {
      c[index] += [t +'|'];
    }

  }
})

for (i = 0; i <= 10 ; i++) {
 console.log(c[i]);
}

/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/

var n = [54, 2, 80, 23, 45, 68, 95, 41, 37, 79];
var c = [];

n.forEach(function(item, index){
  var a = 0;
  for ( var i = 0; i < 10; i++) {
    if ( n[index] < n[i] ) {
      a++;
    }
  }
  c[a] = n[index];
});

var decr = c.filter(function(item){
  return item !== undefined;
});

var reversed = c.reverse();
var cresc = reversed.filter(function(item){
  return item !== undefined;
});

console.log(`Data la lista di numeri\n ${n}\n\nil suo ordine decrescente è\n ${decr}\n\nmentre il suo ordine crescente è\n ${cresc}\n\nnon vengono calcolati i doppioni`);

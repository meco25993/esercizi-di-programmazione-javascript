/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/


for ( var i = 1; i < 101; i++) {
  if ( i%10 == 0 ){
    console.log( i + '\n' );
  }
  else {
    console.log( i );
  }
}

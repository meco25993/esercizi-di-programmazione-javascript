/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var c = Math.random () + 100;
var c = Math.round(c);

if ( c == 0 ) { var c = 1; };

console.log ('Il numero casuale è ' + c);

var one = 35;
var two = 35;

var n = one;
var m = two;

if ( c > n) {
  var n = c - n;
}
else {
  var n = n - c;
}

if ( c > m) {
  var m = c - m;
}
else {
  var m = m - c;
}

if ( one == two && c == one) {
  console.log ("Tutti e due gli utenti hanno indovinato il numero "+ one)
}
else if ( c == one ) {
  console.log ("L'utente uno ha indovinato il numero, perchè è uguale a "+ one)
}
else if (c == two) {
    console.log ("L'utente due ha indovinato il numero, perchè è uguale a "+ two)
  }
else {
    if (n > m) {
      console.log ("L'untente due si è avvicinato di più al numero, perchè ha scritto il numero " + two);
      console.log ("mentre l'utente uno ha scritto il numero " + one );
    }
    else {
      console.log ("L'untente uno si è avvicinato di più al numero, perchè ha scritto il numero " + one);
      console.log ("mentre l'utente due ha scritto il numero " + two );
    }
}

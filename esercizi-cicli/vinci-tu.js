/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

var face = 6;
var tiri = 3;
var i = 1;
var e = 1;
var utente1 = 0;
var utente2 = 0;

//utente uno
while ( i <= tiri) {
  var dice = Math.round(Math.random () * face);
  if (dice == 0) {dice = 1;}
  console.log (`il tiro ${i} dell'utente uno ha riportato il punteggio ${dice}`);
  utente1 += dice;
  i++;
}

//utente due
while ( e <= tiri) {
  var dice = Math.round(Math.random () * face);
  if (dice == 0) {dice = 1;}
  console.log (`il tiro ${e} dell'utente due ha riportato il punteggio ${dice}`);
  utente2 += dice;
  e++;
}

console.log (`il totale del giocatore uno è ${utente1} \n il totale del giocatore due è ${utente2}`);

if (utente1 > utente2){
  console.log (`quindi il vinceitore è l'utente uno con un punteggio di ${utente1}`);
}
else if (utente1 == utente2) {
  console.log (`Gli utenti hanno pareggiato`);
}
else {
  console.log (`quindi il vincitore è l'utente due con un punteggio di ${utente2}`);
}

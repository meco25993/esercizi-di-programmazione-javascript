/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

function sensitivo (a,b,n){
  if (Math.abs(a-n) === Math.abs(b-n)) {
    return 0;
  } else if (Math.abs(a-n) > Math.abs(b-n)){
    return 1;
  } else {
    return -1;
  }
}

var number = Math.round(Math.random()*99+1);
var i = 0;
var chi = '';

while (i < 1) {
  var utente1 = Number.parseInt(prompt(`${chi}Utente 1 inserisci un numero da 1 a 100 numero ${number}`));
  var utente2 = Number.parseInt(prompt(`${chi}Utente 2 inserisci un numero da 1 a 100 numero ${number}`));
  if (utente1 === number) {
    alert(`l'utente 1 ha indovinato il numero ${number}`);
    i++;
  } else if (utente2 === number) {
    alert(`l'utente 2 ha indovinato il numero ${number}`);
    i++;
  } else {
    chi = '';
    if (sensitivo(utente1,utente2,number) === 0) {
      chi += `Vi siete avvicinati alla stesso modo al numero\n`;
    } else if (sensitivo(utente1,utente2,number) === 1) {
      chi += `L'utente 2 si è avicinato di più al numero\n`;
    } else {
      chi += `L'utente 1 si è avicinato di più al numero\n`;
    }
  }
}

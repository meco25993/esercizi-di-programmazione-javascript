/*
  La tombola magica
  Scrivi un programma in cui dichiari un array di di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var n = [1,2,3,4,5];

n.forEach(function(item, index){
  var i = 0;
  var m = Math.round(Math.random() * 89 + 1);

    while ( i < index) {
      if ( n[i] != m){
        i++;
      } else {
        m = Math.round(Math.random() * 89 + 1);
        i = 0;
      }
    }

    n [index] = m;

})

var utente = [4, 65, 74, 32, 22];
var uguali = 0;
var nugu = [];

utente.forEach(function(item, index){

       for ( i = 0; i < 5; i++ ) {
         if ( item === n[i]){
           nugu[uguali] = n[i];
           uguali++;
         }
       }
  })

console.log(`I numeri che sono stati estratti sono: \n ${n} \n\n mentre i numeri da te scelti sono: \n ${utente}`);

switch (uguali) {
  case 1:
    console.log(`è stato estratto solo il numero ${nugu}`);
    break;
  case 2:
    console.log(`Complimenti hai fatto ambo con i numeri ${nugu}`);
    break;
  case 3:
    console.log(`Complimenti hai fatto terno con i numeri ${nugu}`);
    break;
  case 4:
    console.log(`Complimenti hai fatto quaterna con i numeri ${nugu}`);
    break;
  case 5:
    console.log(`Complimenti hai vinto facendo quintina con i numeri ${nugu}`);
    break;
  default:
    console.log(`Mi dispiace, hai perso. Potrai ritentare`);
}

/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var numero1 = [];
var numero2 = [];
var numero3 = [];
var operazione = 'addizione';

for (var i = 0; i < 10; i++) {
 numero1[i] = Math.round(Math.random() * 9 + 1);
 numero2[i] = Math.round(Math.random() * 9 + 1);
 switch (operazione) {
   case 'addizione':
     numero3[i] = numero1[i] + numero2[i];
     var op = '+';
     break;
   case 'sottrazione':
     numero3[i] = numero1[i] - numero2[i];
     var op = '-';
     break;
   case 'moltiplicazione':
     numero3[i] = numero1[i] * numero2[i];
     var op = '*';
     break;
   case 'divisione':
     numero3[i] = numero1[i] / numero2[i];
     var op = '/';
     break;
   }
  console.log (numero1[i]+' '+op+' '+numero2[i]+' = '+numero3[i]);
}

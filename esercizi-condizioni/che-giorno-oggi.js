/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/

var c = Math.random () * 8;
var c = Math.round(c);

if ( c == 0 ) { var c = 1; };

switch (c) {
  case 1:
    console.log ('Oggi è Lunedi');
    break;
  case 2:
    console.log ('Oggi è Martedi');
    break;
  case 3:
    console.log ('Oggi è Mercoledi');
    break;
  case 4:
    console.log ('Oggi è Giovedi');
    break;
  case 5:
    console.log ('Oggi è Venderdi');
    break;
  case 6:
    console.log ('Oggi è Sabato');
    break;
  case 7:
    console.log ('Oggi è Domenica');
    break;
  default:
    console.log ('Errore, il giorno non è presente nella settimana');
}

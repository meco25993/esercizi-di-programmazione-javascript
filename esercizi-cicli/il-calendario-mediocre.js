/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/

var day = 31;
var start = 'Lunedi';
i = 0;

while ( i < day) {
  i++
  console.log (`giorno ${i}`);

  switch (start) {
    case 'Lunedi':
     console.log (`Lunedi`);
     start = 'Martedi';
     break;
    case 'Martedi':
     console.log (`Martedi`);
     start = 'Mercoledi';
     break;
     case 'Mercoledi':
      console.log (`Mercoledi`);
      start = 'Giovedi';
      break;
     case 'Giovedi':
      console.log (`Giovedi`);
      start = 'Venerdi';
      break;
     case 'Venerdi':
      console.log (`Venerdi`);
      start = 'Sabato';
      break;
     case 'Sabato':
      console.log (`Sabato`);
      start = 'Domenica';
      break;
     case 'Domenica':
      console.log (`Domenica`);
      start = 'Lunedi';
        }

}

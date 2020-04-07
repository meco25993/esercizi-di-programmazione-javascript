/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var one = 50;
var two = -20;
var three = 50;
var four = 12;
var five = -2;
var six = 14;
var seven = 5;

if ( one > two ) {
  var max = one;
  var min = two;
}
else if ( one == two ) {
  var max = one;
  var min = two;
  }
else {
  var max = two;
  var min = one;
}


if ( three > max ) {
   max = three;
}
else if ( three < min ) {
  min = three;
}


if ( four > max ) {
   max = four;
}
else if ( four < min ) {
  min = four;
}

if ( five > max ) {
   max = five;
}
else if ( five < min ) {
  min = five;
}

if ( six > max ) {
   max = six;
}
else if ( six < min ) {
  min = six;
}

if ( seven > max ) {
   max = seven;
}
else if ( four < min ) {
  min = seven;
}

console.log (`Le giornate hanno avuto rispettivamente le seguenti temperature \n Lunedi: ${one} \n Martedi: ${two} \n Mercoledi: ${three} \n Giovedi: ${four} \n Venerdi: ${five} \n Sabato: ${six} \n Domenica: ${seven}`);
console.log (`La temperatura maggiore è stata ${max}`);
console.log (`La temperatura minore è stata ${min}`);

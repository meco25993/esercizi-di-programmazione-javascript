/*
  La calcolatrice
  Scrivi un programma che prenda tr input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var one = 3;
var two = 5;

var op = "divisione";

switch (op) {
  case "somma":
    var op1 = "+";
    break;
  case "sottrazione":
    var op1 = "-";
    break;
  case "moltiplicazione":
    var op1 = "*";
    break;
  case "divisione":
    var op1 = "/";
    break;
  case "modulo":
    var op1 = "%";
    break;
  case "potenza":
    var op1 = "^";
    break;
  case "media":
    var op1 = "m";
    break;
}

console.log ("l'operazione da eseguire è " + one + " " +op1+ " " + two  );

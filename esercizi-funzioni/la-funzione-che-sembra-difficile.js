/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4


  http://www.imparareaprogrammare.it
*/


function difficult (n,k){
  var z = n.toString().length;
  if (k < z){
    var s = z;
    var di = 0;
    let t = [];

    for (let i = 0; i < z; i++){
      n = n - di;
      let dieci = 1;
      s = s - 1;
      for (let j = 0; j < s; j++){
        dieci = dieci * 10;
      }
      let sa = Math.floor(n/dieci);
      di = sa * dieci;
      t.push(sa);
    }

    console.log(t[z-k]);
  } else {
    console.log(0);
  }
}

difficult (15556, 3);

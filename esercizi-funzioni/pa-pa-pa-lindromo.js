/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

function palindroma (str){
  let palindromo = '';
  for (let i = 0; i < str.replace(/\W/g, "").length; i++) {
    if (palindromo === '')
      palindromo = str.replace(/\W/g, "").slice(-1);
    else
      palindromo += str.replace(/\W/g, "").slice(-i-1,-i);
  }
  if (str.replace(/\W/g, "") === palindromo)
    return true;
  else
    return false;
}

console.log(palindroma('i topi non avevano nipoti'));

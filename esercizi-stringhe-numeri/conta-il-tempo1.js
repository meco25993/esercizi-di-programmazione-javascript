var totseconds= 24596;

var sec1h= 60 * 60;

var ore = Number.parseInt(totseconds/sec1h);

var minuti = Number.parseInt((totseconds-(sec1h*ore))/60);

var secondi= Number.parseInt((totseconds-(sec1h*ore))-(minuti*60));

console.log(`Avendo ${totseconds} secondi possiamo avere la quantità di : ${ore} ore, ${minuti} minuti e ${secondi} secondi`);

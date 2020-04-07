var input = 1;
var max = 9999;
var accumuletor = 0;

while (input < max) {
  input = input + input;
  accumuletor++;
}

console.log(accumuletor);

var accumuletor = 0;
for ( input = 1; input < max; input = input + input) {
   accumuletor++;
}

console.log(accumuletor);

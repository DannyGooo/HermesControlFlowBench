let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
  do {
    i = i + 1;
    result = result + i;
  } while (i < 5);
} while (i < 5);

console.log(result);
// Expected output: "12345"

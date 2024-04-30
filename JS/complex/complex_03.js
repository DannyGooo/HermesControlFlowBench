let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;

  const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
        console.log(element);
    }

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"

}

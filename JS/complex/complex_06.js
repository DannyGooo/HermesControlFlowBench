const iterable = {
    [Symbol.iterator]() {
      let i = 1;
      return {
        next() {
          if (i <= 3) {
            return { value: i++, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    for (const value of iterable) {
        console.log(value);
        
      }

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}





  

  // 1
  // 2
  // 3
  
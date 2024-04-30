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
  
  for (const value of iterable) {
    console.log(value);
  }
  // 1
  // 2
  // 3
  
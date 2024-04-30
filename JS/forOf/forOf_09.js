const iterable = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    },
  };
  
  for (const value of iterable) {
    console.log(value);
  }
  // 1
  // 2
  // 3
  
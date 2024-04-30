function* generator() {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.resolve(3);
    yield 4;
  }
  
  (async () => {
    for await (const num of generator()) {
      console.log(num);
    }
  })();
  // 0
  // 1
  // 2
  // 3
  // 4
  
  // compare with for-of loop:
  
  for (const numOrPromise of generator()) {
    console.log(numOrPromise);
  }
  // 0
  // 1
  // Promise { 2 }
  // Promise { 3 }
  // 4
  
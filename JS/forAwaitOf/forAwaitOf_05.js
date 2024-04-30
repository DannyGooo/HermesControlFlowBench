function* generatorWithRejectedPromises() {
    try {
      yield 0;
      yield 1;
      yield Promise.resolve(2);
      yield Promise.reject(3);
      yield 4;
      throw 5;
    } finally {
      console.log("called finally");
    }
  }
  
  (async () => {
    try {
      for await (const num of generatorWithRejectedPromises()) {
        console.log(num);
      }
    } catch (e) {
      console.log("caught", e);
    }
  })();
  // 0
  // 1
  // 2
  // caught 3
  
  // compare with for-of loop:
  
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(numOrPromise);
    }
  } catch (e) {
    console.log("caught", e);
  }
  // 0
  // 1
  // Promise { 2 }
  // Promise { <rejected> 3 }
  // 4
  // caught 5
  // called finally
  
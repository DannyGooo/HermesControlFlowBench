function foo() {
    for (const value of arguments) {
      console.log(value);
    }
  }
  
  foo(1, 2, 3);
  // 1
  // 2
  // 3
  
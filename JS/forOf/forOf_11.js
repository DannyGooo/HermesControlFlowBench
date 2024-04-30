function* source() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = source();
  
  for (const value of generator) {
    console.log(value);
  }
  // 1
  // 2
  // 3
  
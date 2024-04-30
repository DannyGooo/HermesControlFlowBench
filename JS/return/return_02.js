function magic() {
    return function calc(x) {
      return x * 42;
    };
  }
  
  const answer = magic();
  answer(1337); // 56154
  
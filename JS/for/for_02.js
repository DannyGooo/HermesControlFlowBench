// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
    console.log(i);
  }
  
  // Parenthesize the `in` expression
  for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
    console.log(i);
  }
  
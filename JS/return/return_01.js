function counter() {
    // Infinite loop
    for (let count = 1; ; count++) {
      console.log(`${count}A`); // Until 5
      if (count === 5) {
        return;
      }
      console.log(`${count}B`); // Until 4
    }
    console.log(`${count}C`); // Never appears
  }
  
  counter();
  
  // Logs:
  // 1A
  // 1B
  // 2A
  // 2B
  // 3A
  // 3B
  // 4A
  // 4B
  // 5A
  
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
    console.log(getI());
  }
  // Logs 0, 1, 2
  
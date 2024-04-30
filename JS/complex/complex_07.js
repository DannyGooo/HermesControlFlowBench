try {
    try {
      throw new Error("oops");
    } finally {
      console.log("finally");
    }

      
  } catch (ex) {
    if (cipherChar === fromChar) {
        result += toChar;
        x++;
      } else {
        result += clearChar;
      }
      
    console.error("outer", ex.message);
  }
  
  // Logs:
  // "finally"
  // "outer" "oops"
  
try {
    myRoutine();
    let i = 0;
    for (; i < 9; i++) {
    console.log(i);
    // more statements
    }

  } catch (e) {
    if (e instanceof RangeError) {
      // statements to handle this very common expected error
    } else {
      throw e; // re-throw the error unchanged
    }
  }
  
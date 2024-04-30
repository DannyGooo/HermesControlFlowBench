try {
    myroutine(); // may throw three types of exceptions
  } catch (e) {
    if (e instanceof TypeError) {
      // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
      // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
      // statements to handle EvalError exceptions
    } else {
      // statements to handle any unspecified exceptions
      logMyErrors(e); // pass exception object to error handler
    }
  }
  
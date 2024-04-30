(async () => {
    try {
      for (const numOrPromise of generatorWithRejectedPromises()) {
        console.log(await numOrPromise);
      }
    } catch (e) {
      console.log("caught", e);
    }
  })();
  // 0
  // 1
  // 2
  // caught 3
  // called finally
  
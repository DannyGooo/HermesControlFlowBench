readFile("foo.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
  
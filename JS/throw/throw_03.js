function readFilePromise(path) {
    return new Promise((resolve, reject) => {
      readFile(path, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
  
  try {
    const data = await readFilePromise("foo.txt");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  
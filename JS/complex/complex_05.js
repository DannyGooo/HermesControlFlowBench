const arr = [1, 2, 3, 4, 5, 6];

// 1 6
// 2 5
// 3 4
function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw new Error('Parameter is not a number!');
    }
  }
  
  try {
    getRectArea(3, 'A');
  } catch (e) {
    console.error(e);
    for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
        console.log(arr[l], arr[r]);
      }
    // Expected output: Error: Parameter is not a number!
  }
  
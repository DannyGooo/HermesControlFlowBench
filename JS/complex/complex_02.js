const object = { a: 1, b: 2, c: 3 };



const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
        
    }
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

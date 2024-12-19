// A funtion that always thows an error
// A function that has infinte loop
// A variable that can never have a value

function throwError(msg: string): never {
  throw new Error(msg);
}

function infinteLoop(): never {
  while (true) {}
}

let x: never;
function neverReturns(): never {
  while (true) {}
}

x = neverReturns();

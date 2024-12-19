// Types in ts
const identity: string = "Rajib sk";
const rollId: number = 13;
const doWant: boolean = true;
console.log(identity);
console.log(rollId);
console.log(doWant);

// functions
// Regular functions
function addBytwo(nums: number) {
  return nums + 2;
}
const isData = addBytwo(9);
console.log(isData);

// Arrow function
const doAddby3 = (x: number): number => {
  return x + 3;
};

const doaddby3 = doAddby3(12);
console.log(doaddby3);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(28, 33));

const sub = (x1: number, x2: number): number => {
  return x1 - x2;
};

function addition(var1: number, var2: number) {
  return var1 + var2;
}

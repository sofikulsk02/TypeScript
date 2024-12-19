function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow funtion
const area = (num1: number, num2: number) => {
  return num1 * num2;
};

const Area = area(2, 3);
console.log(Area);

const greet = (name: string = "Annonomus") => {
  console.log(`Hello${name}`);
};

const greeting = greet("Rajib");

// Annotating the return type also
function area2(nums: number): number {
  return nums * nums;
}

const Area3 = (x1: number): number => {
  return x1 * x1;
};

const greetPeople = (msg: string) => {
  console.log(`hello ${msg} wellcome to pw`);
};

const greetTo = greetPeople("soma");

const ListOfBooks = {
  bookName: "Love and War",
  yearOfPublication: 2021,
  origin: "Usa",
};

function oddEven(val: number): string {
  if (val % 2 == 0) return "even";
  else return "odd";
}

console.log(oddEven(10));

const wellcomeGreeting = (name: string = "Annonomus") => {
  console.log(`hello and welcome ${name} to our team`);
};

wellcomeGreeting("soma");

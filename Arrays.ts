//Arrays are a type of object that can store multiple values
// of the same type Arrays in typeScript are typed which means you can
// specify the type of values that an array can hold

// Array using []

const numbers: number[] = [1, 23, 445, 665, 2];
numbers.forEach((element) => {
  console.log(element);
});

console.log(numbers);

const names: string[] = ["sofikul sk", "soma", "naaz", "monalisa"];
console.log(names);

// pushing items
const items: string[] = [];
items.push("Liza");
items.push("Rajib");
items.push("Moon");
items.push("susmita");
items.push("Anushka");

console.log(items);

console.log(typeof items);
console.log(items.length);

// Array with html syntax

const arrayList: Array<string> = [];
const namesd: Array<number> = [];

// Multidimentional Array
const matrix: number[][] = [
  [1, 23, 4],
  [2, 355, 353],
];

const books: number[][][] = [[[1, 23, 24, 32]]];

const ListItems: number[] = [1, 2, 344, 5, 6, 6, 8, 66, 6];

ListItems.forEach((ele) => {
  if (ele % 2 == 0) console.log(ele);
});

const bookList: string[] = [
  "I do not love you anymore",
  "12th fail",
  "Laila Majnu",
  "geet",
];

for (let i = 0; i < bookList.length; i++) {
  console.log(bookList[i]);
}

bookList.forEach((ele) => {
  console.log(ele);
});

// lets create an empty array which would be containging name of famous qoutes and it's author

const ArrayPractice: (string | number)[] = [];

ArrayPractice.push("Rajib sk");
ArrayPractice.push(12);
ArrayPractice.push("Soma sultana");
ArrayPractice.push(1);
ArrayPractice.push("Naaz Moon");
ArrayPractice.push(2);

ArrayPractice.forEach((ele) => {
  console.log(ele);
});

const ArrayListS: number[] = [1, 2, 34, 4, 555, 6543];
ArrayListS.forEach((ele) => {
  console.log(ele);
});

// We can also use the union as the annotatation and use in the same array

const cars: (string | number)[] = ["honda", 1222, "cbr", 223411, "fbiei123"];
cars.forEach((ele) => {
  console.log(ele);
});

const weatherData: (string | number)[] = [
  "sunny☀️",
  "foggy🌬️",
  "cloudy⛈️",
  "normal🌞",
];

weatherData.forEach((element) => {
  console.log(element);
});

// creating an Array and latter push_back() elements from 1 to n

const inputList: number[] = [];
for (let i = 1; i < 11; i++) {
  inputList.push(i);
}
console.log(inputList);

let password: string | number = 20;
// Union only work for string and numbers

type userinfo1 = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

//The bellow code you can specify the either the userinfo1 or the AccountsDetails
let user: userinfo1 | AccountDetails = {
  first: "John",
  last: "Doe",
  age: 20,
};

// or
let user2: userinfo1 | AccountDetails = {
  email: "Rajin@vvu",
  password: "gh28t72g",
};

const itemList: (number | string)[] = [1, 23, "hello"];

console.log(itemList);

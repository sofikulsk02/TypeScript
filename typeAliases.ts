type Person = {
  name: string;
  age: number;
  isAlive: boolean;
};

function printPerson(person: Person) {
  console.log(`Name:${person.name},Age:${person.age}`);
}

const myPerson: Person = { name: "Alice", age: 25, isAlive: true };
console.log(myPerson);

// Intersection and more

type userinfo = {
  name: string;
  location?: string;
  age?: number;
};

type details = {
  email: string;
  password?: string;
};

const isUser = (user: userinfo & details) => {
  console.log(
    `The name of the user is ${user.name} and his email is ${user.email}`
  );
};

type DetailsOfUser = userinfo & details;

type Student = {
  name: string;
  roll: number;
  age: number;
};

type Info = {
  name: string;
  Address: string;
  age: number;
};

const Student1: Student = {
  name: "hvdu",
  roll: 12,
  age: 12,
};

console.log(Student1.name);

const url =
  "https://datasets-server.huggingface.co/rows?dataset=HeshamHaroon%2Farabic-quotes&config=default&split=train&offset=0&length=100";
const getData = async () => {
  const data = await fetch(url);
  const res = data.json();
  return res;
};

const arabic = getData();
console.log(arabic);

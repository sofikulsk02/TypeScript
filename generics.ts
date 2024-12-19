function printData<Type>(item: Type, defaultValue: Type): [Type, Type] {
  return [item, defaultValue];
}

const res = printData<number>(10, 20);
console.log(res);

function printGnrl<T>(item: T): T {
  return item;
}

const ans = printGnrl<string>("rajib sk the og");
console.log(ans);

const result2 = printGnrl<number>(200);
console.log(result2);

const val = printGnrl<boolean>(true);
console.log(val);

interface Dog {
  name: string;
  breed: string;
}

const data2 = printGnrl<Dog>({ name: "Buddy", breed: "sdsd" });
console.log(data2);

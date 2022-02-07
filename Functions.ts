const add = (a: number, b: number): number => {
  return a + b;
};

type resFun = (n1: number, n2: number) => number;

// We are specifying here that the resultFunction will only store function of type resFun not any other values.
const resultFunction: resFun = add;

console.log(resultFunction(2, 4));

const username: string | number  = 'bocha';
const sum = (a: number, b: number) => a + b;

sum(1, 3);

class Person {
  constructor(public age: number, public lastName: string) {
  }
}

const bocha = new Person(15, 'Blanco');
bocha.age = 16;

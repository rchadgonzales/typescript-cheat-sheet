// BASIC TYPES
let id: number = 5;
// id = "5";
// console.log("ID:", id);
let company: string = "OP";
let isPublished: boolean = true;
let x: any = "Hi";
// let age: number
let ids: number[] = [1, 2, 3, 4, 5, 6, 7];
let arr: any[] = [1, true, "Hi"];
// x = true
// age = 22
// ids.push("Hello"); THE RESULT IS ERROR

// TUPLE
let person: [number, string, boolean] = [1, "Richard", true];

// TUPLE ARRAY
let employee: [number, string][];
employee = [
  [1, "Richard"],
  [2, "Naruto"],
  [3, "Sasuke"],
];

// UNION
// let pid: string | number = 22
let pid: string | number;
pid = 22;
pid = "22";

// ENUM OR ENUMERATED TYPE
enum Direction1 {
  Up = 1, // IF REMOVE = 1, DEFAULT VALUE IS 0
  Down,
  Left,
  Right,
}
// console.log(Direction1.Up);
// console.log(Direction1.Left);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
// console.log(Direction2.Left);

// OBJECTS
/*
const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'Richard'
}
*/
// SAME AS ABOVE
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "Richard",
};

// TYPE ASSERTION
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// FUNCTIONS
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(1, 2));

// VOID
function log(message: string | number): void {
  console.log(message);
}
// log('Hi')
// log(true) GIVES AN ERROR

// INTERFACES
interface UserInterface {
  id: number;
  // readonly id: number;
  name: string;
  age?: number; // IF HAVE ?, IT IS OPTIONAL
}
const user0: UserInterface = {
  id: 1,
  name: "Richard",
};
// console.log(user0);
// user0.id = 7;

/*
type Point = number | string
const p1: Point = 1
*/

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
// CLASSES
class Person implements PersonInterface {
  id: number;
  // private id: number;
  // protected id: number;
  // public id: number;
  name: string;

  constructor(id: number, name: string) {
    // console.log("CLASSES");
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const Richard = new Person(0, "Richard Gonzales");
const Naruto = new Person(1, "Naruto Uzumaki");
// console.log(Richard, Naruto);
// console.log(Richard.id);
// Richard.id = 7;
// console.log(Richard.register());

// SUBCLASSES
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "Sasuke", "Ninja");
// console.log(emp.name);
// console.log(emp.register());

// GENERICS
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4, 5, 6, 7]);
let strArray = getArray<string>(["Richard", "Naruto", "Sasuke"]);
// numArray.push("Hi"); GIVES AN ERROR, IT EXPECTS AN NUMBER
strArray.push("Hi");

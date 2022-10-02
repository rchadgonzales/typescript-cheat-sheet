"use strict";
// BASIC TYPES
let id = 5;
// id = "5";
// console.log("ID:", id);
let company = "OP";
let isPublished = true;
let x = "Hi";
// let age: number
let ids = [1, 2, 3, 4, 5, 6, 7];
let arr = [1, true, "Hi"];
// x = true
// age = 22
// ids.push("Hello"); THE RESULT IS ERROR
// TUPLE
let person = [1, "Richard", true];
// TUPLE ARRAY
let employee;
employee = [
    [1, "Richard"],
    [2, "Naruto"],
    [3, "Sasuke"],
];
// UNION
// let pid: string | number = 22
let pid;
pid = 22;
pid = "22";
// ENUM OR ENUMERATED TYPE
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up);
// console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Richard",
};
// TYPE ASSERTION
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// FUNCTIONS
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
// VOID
function log(message) {
    console.log(message);
}
const user0 = {
    id: 1,
    name: "Richard",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// CLASSES
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Sasuke", "Ninja");
// console.log(emp.name);
// console.log(emp.register());
// GENERICS
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6, 7]);
let strArray = getArray(["Richard", "Naruto", "Sasuke"]);
// numArray.push("Hi"); GIVES AN ERROR, IT EXPECTS AN NUMBER
strArray.push("Hi");

let apples: number = 5;
let speed: string = 'super fast';
let booty: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date()

// array
let colors: string[] = ['red', 'green', 'blue']
let myNums: number[] = [1,2,3,4]
let myBool: boolean[] = [true, true, false]

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point: {x: number; y: number;} = {
  x: 10,
  y: 20
}

// function
const logNum: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations
// 1) function that returns the 'any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number;} = JSON.parse(json)
console.log(coordinates); //{x: 10, y: 20}

// 1) declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}
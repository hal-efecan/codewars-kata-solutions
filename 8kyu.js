// TITLE: 1. Convert a string to an array
// DESCRIPTION: Write a function to split a string and convert it into an array of words. For example:

// EXAMPLE:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

/*
SOLUTION:

myArray = (sentence) => {
    const string = sentence
    const result = string.split(" ")
    console.log(result)
}

TEST:

myArray("Robin Singh")
myArray("I love arrays they are my favorite")
*/

// TITLE: 2. Sum of positive
// DESCRIPTION: You get an array of numbers, return the sum of all of the positives ones.
// EXAMPLE:
// [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

/*
const numbers = [1,-4,7,12]

SOLUTION:

myCalc = numbers => {
    let arr1 = numbers.map(item => item >= 0 ? item : 0)
    let sum = arr1.reduce((pv, cv) => pv + cv, 0)
    return sum
}

TEST:

myCalc([1,-4,7,12]) //,20
myCalc([1,-2,3,4,5]) //,13);
console.log(myCalc([])) //,0);
myCalc([-1,-2,-3,-4,-5]) //,0);
myCalc([-1,2,3,4,-5]) //,9);
*/

// TITLE: 3. OPPOSITES
// DESCRIPTIO: Given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

/*
SOLUTION:

opposite = (number) => {
    const sign = Math.sign(number)

    if(sign > 0) {
        return -1 * number
    }
    if(sign < 0) {
        return -1 * number
    }
    if(sign == 0 ) {
        return number
    }
    return number
}

TEST:

opposite(-15)
opposite(1) 
opposite(14)
opposite(-34)
*/

// TITLE: 4. Remove First and Last Character
// DESCRIPTION: The goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/*
SOLUTION:

removeChar = str => {
    let myArray = str.split("")
    myArray.shift()
    myArray.pop()
    myArray.push("'")
    myArray.unshift("'")
    let numbers = myArray.join('')
    console.log(numbers)
};

TEST:

removeChar('eloquent') // 'loquen'
removeChar('country') // 'ountr');
removeChar('person') // 'erso');
removeChar('place') // 'lac');
*/

// TITLE: 5. String repeat
// DESCRIPTION: Write a function called repeatString which repeats the given String src exactly count times.

// EXAMPLE:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

/*
SOLUTION:

function repeatStr (n, s) {
    const result = s.repeat(n)
    return result
  }

TEST:

repeatStr(3, "*") // "***"
repeatStr(5, "#") //"#####"
repeatStr(2, "ha ") // "ha ha "
*/

// TITLE: 6. Return negative
// DESCRIPTION: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/*
SOLUTION:

const makeNegative = (num) => {
    // Code?
    if(num < 0) {
        return num
    }
    if(num > 0) {
        return -1 * num
    }
    if(num === 0) {
        return num
    }
    return num
}

TEST:

console.log(makeNegative(-5)) // return -5
console.log(makeNegative(1)) // return -1
console.log(makeNegative(-5)) // return -5
console.log(makeNegative(0)) // return 0
console.log(makeNegative(0.12)) // return -0.12
*/

// QUESTION: 7. Find the smallest integer in the array
// DESCRIPTION: Given an array of integers your solution should find the smallest integer.

// EXAMPLE:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

/*
SOLUTION:

const smallest = (numbers) => {
    numbers.sort((a, b) => a - b)
    let result = numbers.slice(0,1)
    let answer = parseInt(result)
    return console.log(answer)
}

TEST:

smallest([34, -345, -1, 100])   
*/

// QUESTION: 8. Remove String Spaces
// DESCRIPTION: Simple, remove the spaces from the string, then return the resultant string.

/*
SOLUTION:

const noSpace = str => {
    let result = str.replace(/ /g,'')
    return result
}

TEST:

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
*/

// TITLE: 9. COUNTING SHEEP 
// QUESTION: Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the 
// number of sheep present in the array (true means present).

// EXAMPLE:

// let arr0 = 
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

/*
SOLUTION:

const countSheeps = arrayOfSheep => {
    const arr1 = arrayOfSheep.map(sheep => sheep === true ? 1 : 0)
    reducer = (prevSheep, currSheep) => prevSheep + currSheep
    const arr2 = arr1.reduce(reducer,0)
    return console.log(arr2)
}

TEST:

countSheeps(arr0)
*/

// TITLE: 10. even or odd 
// QUESTION: Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.

// SOLUTION:
/*
const even_or_odd = number => {
    if (number % 2 != 0 ) {
        return 'Odd'
    } else {
        return 'Even'
    }
}
*/

// TITLE: 11. Multiply 
// DESCRIPTION: The code has a bug. Try to figure out why.

// EXAMPLE/QUESTION: 
// function multiply(a, b){
//     a * b
//   }
  
// SOLUTION:
/*
const multiply = (a, b) => {
  return a * b
};
*/

// TITLE: 12. Summation
// DESCRIPTION: Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// EXAMPLE/QUESTION: 
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
  
// SOLUTION:
/*
const sumMe = (num) => {
    let numbers = []
    for(i = 1; i <= num; i++){
        numbers.push(i)
    }
    reducer = (pv, cv) => pv + cv
    return console.log(numbers.reduce(reducer,0))
}

sumMe(8)
sumMe(2)
*/

// TITLE: 13. Basic Mathematical Operations
// DESCRIPTION: Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// EXAMPLE/QUESTION: 
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7
  
// SOLUTION:
/*
const basicOp = (operation, value1, value2) => {
    if(operation === '+') {
        return value1 + value2
    }
    if(operation === '-') {
        return value1 - value2
    }
    if(operation === '*') {
        return value1 * value2
    }
    if(operation === '/') {
        return value1 / value2
    }
    return 'Operation must be one of + - * /'
}

// TEST:

console.log(basicOp('+', 4, 7)) //, 11);
console.log(basicOp('-', 15, 18)) //, -3);
console.log(basicOp('*', 5, 5)) //, 25);
console.log(basicOp('/', 49, 7)) //, 7);
*/  

// TITLE: 14. Convert boolean values to strings 'Yes' or 'No'.
// DESCRIPTION: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
  
// SOLUTION:
/*
const boolToWord = bool => {
   return bool === true ? 'Yes' : 'No'
}

TEST:
console.log(boolToWord(true)) // 'Yes')
console.log(boolToWord(false)) // 'No')
*/

// TITLE: 15. A Needle in the Haystack
// DESCRIPTION: Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so: 

// EXAMPLE/QUESTION: 
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

// SOLUTION:
/*
const findNeedle = (numbers) => {
    for(i=0; i<numbers.length; i++){
        if(numbers[i] === 'needle'){
            return console.log(`found the needle at position ${numbers.indexOf(numbers[i])}`)
        }
    }
}

TEST:

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]
findNeedle(haystack_1)
*/

// TITLE: 16. Convert a Number to a String!

// DESCRIPTION: We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// EXAMPLE/QUESTION: 
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

// SOLUTION:
/*
const numberToString = num => {
    return num.toString()
}

TEST:
numberToString(1)
*/

// TITLE: 17. Square(n) Sum

// DESCRIPTION: Complete the square sum function so that it squares each number passed into it and then sums the results together.

// EXAMPLE/QUESTION: For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// SOLUTION:
/*
const squareSum = numbers => {
    let newArr = []
    for (i=0; i< numbers.length; i++){
        let square = numbers[i] * numbers[i]
        newArr.push(square)
    }
    reducer = (pv,cv) => pv + cv
    return newArr.reduce(reducer,0)
}

console.log(squareSum([1, 2, 2]))
*/

// TITLE: 18. Object Oriented Piracy

// DESCRIPTION: Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty
// efficient system to identify ships with a heavy booty on board. Unfortunattely for you, people weigh a lot this days,
// so how do you know if a ship if full of gold and not people? You begin with writing a generic Ship class:

// EXAMPLE/QUESTION: 

// function Ship(draft,crew) {
//     this.draft = draft;
//     this.crew = crew;
//    }

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

//     draft - an estimate of the ship's weight based on how low it is in the water
//     crew - the count of crew on board

// var titanic = new Ship(15, 10);

// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method - isWorthIt
// to decide if the ship is worthy to loot. For example:
// titanic.isWorthIt() // return false

// SOLUTION:
/*
class Ship {
    constructor(draft, crew){
        this.draft = draft,
        this.crew = crew
    }
    isWorthIt(){
        if(this.draft - (this.crew * 1.5) > 20){
            return true
        } else {
            return false
        }
    }
}

let Titanic = new Ship(0,0)

*/

// TITLE: 19. Regular Ball Super Ball

// DESCRIPTION: Create a class Ball.
// Ball objects should accept one argument for "ball value" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball value" of "regular."

// EXAMPLE/QUESTION: ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.value     //=> "regular"
// ball2.value     //=> "super"

// SOLUTION:
/*
class Ball {
    constructor(value){
        this.value = value
        }
        get ballType(){
            if(this.value === undefined){
                return 'regular'
            } else {
                return `${this.value}`
            }
        }
}

let ball1 = new Ball()
let ball2 = new Ball('super');

console.log(ball1.type)
console.log(ball2.type)

TEST:

Test.assertEquals(new Ball().value, "regular");
Test.assertEquals(new Ball("super").value, "super");
*/

// TITLE: 20. Color Ghost

// DESCRIPTION: Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// EXAMPLE/QUESTION: 
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// SOLUTION:
/*
class Ghost {
    constructor(){
    }
    get color(){
        let colNum = (Math.random())*4
        let col = Math.ceil(colNum)
        if(col === 1){
            return "yellow"
        }
        if(col === 2){
            return "purple"
        }
        if(col === 3){
            return "red"
        }
        if(col === 4){
            return "white"
        }
    }
}

TEST:
let ghost1 = new Ghost()
let ghost2 = new Ghost()
let ghost3 = new Ghost()
let ghost4 = new Ghost()

console.log(ghost1.color)
console.log(ghost2.color)
console.log(ghost3.color)
console.log(ghost4.color)
*/

// TITLE: 21. Basic subclasses - Adam and Eve

// DESCRIPTION: According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.
// You have to do God's job. 
// The creation method must return an array of length 2 containing objects (representing Adam and Eve). 
// The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. 
// Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// EXAMPLE/QUESTION:

// SOLUTION:
/*
class God{
    static create(){
    return [new Man, new Woman];
    }
}

class Human{}
class Man extends Human{}
class Woman extends Human{}
*/
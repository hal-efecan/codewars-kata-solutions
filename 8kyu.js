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
const arr = [1,-4,7,12]

SOLUTION:

myCalc = arr => {
    let arr1 = arr.map(item => item >= 0 ? item : 0)
    let sum = arr1.reduce((pv, cv) => pv + cv, 0)
    return sum
}

TEST:

myCalc([1,-4,7,12]) //,20
myCalc([1,-2,3,4,5]) //,13);
myCalc([]) //,0);
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
    let arr = myArray.join('')
    console.log(arr)
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

const smallest = (arr) => {
    arr.sort((a, b) => a - b)
    let result = arr.slice(0,1)
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


// TITLE: 1. Find the odd int
// DESCRIPTION: Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
/*
function findOdd(A) {
    // loop thru array and toArray if number
    let newArr = A.filter(ele => {
        if(typeof ele === 'number') {
            return ele
        }
    })

    // toArray unique entries
    let set = new Set(newArr)    
    let final = []

    // loop thru unique entries and add elements from original 
    set.forEach(item => {
        let num = []
        newArr.forEach(ele => {
            if(item === ele) {
                num.push(ele)
            }
        })
        final.push(num)
    })

    // count most occuring
    let odd = final.filter(a => {
        let isOdd = a.length % 2 !== 0
        if(isOdd) {
            console.log(isOdd)
            return a
        }
    })

    return odd[0][0]
  }
*/
  // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5))
  // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5))
  // console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1))
  // console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5))
  // console.log(findOdd([10], 10))
  // console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10))
  // console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1))

// TITLE: 1. Persistent Bugger.
// DESCRIPTION: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// EXAMPLE:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// SOLUTION:

// console.log(persistence(39)) // 3
// console.log(persistence(4)) // 0
// console.log(persistence(25)) // 2
// console.log(persistence(999)) // 4
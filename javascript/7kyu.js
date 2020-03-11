// TITLE: 1. Vowel Count
// DESCRIPTION: Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

// EXAMPLE:

/*
SOLUTION:

getCount = str => {
        var vowelsCount = 0;
    
        for(i=0; i<str.length; i++){
            if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
                vowelsCount++
        }  
    }

    return console.log(vowelsCount);
}

getCount("abracadabra") //, 5)
*/

// TITLE: 1. List Filtering
// DESCRIPTION: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with 
// the strings filtered out

// EXAMPLE:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

/*
SOLUTION:

function filter_list(arr) {
    let newArr = []
    arr.filter(item => {
        if(Number.isInteger(item)) {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(filter_list([1,'a','b',0,15]))
console.log(Number.isInteger(0))
*/
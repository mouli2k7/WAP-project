const { useCallback } = require("react");

// snippet 1
const names = ['vansh', 'ritam', 'tamojeet'];
// for (const name of names){
//     console.log(`welcome, ${name}!`)
// }

// snippet 2
const numbers = [1, 2, 3, 4, 5]
// for(const num of numbers){
//     console.log(num*2)
// }

function processData(arr, callback){
    for(let value of arr){
        // logic
        callback(value)
    }
}

// logic
function welcomeNames(name){
    console.log(`welcome, ${name}!`)
}

function numbersLogic(num){
    console.log(num*2)
}


processData(names, welcomeNames)
processData(numbers, numbersLogic)
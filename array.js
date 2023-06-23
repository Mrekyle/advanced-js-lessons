const arr1 = [1, 2, 3, 4]
const arr2 = arr1

console.log("second array", arr2)
arr2.push(4) // As its the same array it will push the number '4' to both arrays'

const arr3 = [5, 6, 7, 8]
const arr4 = [...arr3] // Spread operator copies the array and creates a new one in arr4

arr4.push(73)
console.log("Fourth Array", arr4)
console.log("Third Array", arr3)

const arr8 = {a: 1, b: 2, c: 3, d: 4}


// This can also be used with objects in the exact same way 

const arr5 = [...arr1, {...arr8}, ...arr4, "x", "y", "z"] // using the spread operator can be done multiple times inside the same array.

console.log(arr5)

// Rest Operator. Can be any word the developer chooses. Just by using the '...' spread operator and a word. Which bundles the rest of the 
// data together into a single variable.

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']

console.log(moreMixedLetters)

const updateSortReverse = (arr, ...letters) => {
    let copy = [...arr]
    for(let i of letters) {
        copy.push(i)
    }
    return copy.sort().reverse() // sorts the array in alphabetical order and then reverses the array 
};

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(reverseSort)
console.log(moreMixedLetters)

// Destructuring array.

let ages = [30, 29, 95];
// let john = ages[0]
// let mary = ages[1]
// let jo = ages[2]

// console.log(john, mary, joe) // Prints out the age of each person. But uses a lot of lines of code and a lot of repeated code
// Destructing the code allows everything to be written on one line and JS will automatically assign the correct ages to the user. 

let [ john, mary, jo ] = ages // JS assigns the index of ages to the index of the array. Starting with 0 and so on... 

console.log(john, mary, joe) // Will produce the same result as the above code. With the destructuring 

// The same can be done with objects too. ES6 Understands that when putting the [] or {} before the equals sign that we are wanting to create
// Separate variables for each piece of the data. 

const jobs = {
    mike: 'Artist',
    jessica: 'Golf Pro',
    dave: 'Chef',
};
let { mike, jessica, dave } = jobs
console.log(mike, jessica, dave)

// subsets of an array 

let languages = ["Spanish", "German", "English", "French", "Arabic"];

let [johnNative, johnSecondary] = languages;
console.log("Johns languages are:", johnNative, johnSecondary); // Assigns spanish and german and ignores the rest of the array

let [, , maryNative, marySecondary, maryThird] = languages; // Leaving the commas, skips the index in the array.
console.log("Mary can speak:", maryNative, marySecondary, maryThird ) // Assigns english, french and arabic 

// Subsets of an object 

const language = {
    first: 'arabic',
    second: 'chinese',
    third: 'french',
    fourth: 'spanish',
};

let { third, fourth } = language; // Assigns the key and value to the third and fourth variable

console.log(third, fourth) // Logs french and spanish


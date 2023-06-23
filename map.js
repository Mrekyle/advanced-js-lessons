let num = [1, 2, 3, 4, 5, 6]
let num2 = []
for(num of num) {
    num2.push(num * 2)
} 
// For loop of multiplying the nums array by 2 

console.log("Array 1", num)
console.log("Array 2", num2)

const multiply = function multiplyBy2(num) {
    return num2 * 2
}

const mapResults = num2.map(multiply) // Passing the function defined to the map function itself

console.log(mapResults) 

const mapResults2 = num2.map(num => num * 2) // Passing the multiply function directly into the map function without needing a separate function
const mapResults3 = num2.map(() => num * 2) // Not needing a name either as it expects a function.

console.log("Map results 2 call back function = ", mapResults2)
console.log("Map results 3 call back function = ", mapResults3)

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const idName = students.map(students => [students.name, students.id]) // Using '.' to get the desired information from the object.
// The map method is allowing us to loop over the entire array using the one method instead of a for loop
console.log("Objects using the map method", idName)
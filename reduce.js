/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

let nums = [0, 1, 2, 3, 4]

let reduced = nums.reduce((acc, curr) => acc + curr, 0) // Standard reduce method. taking 2 parameters instead of 1. 
// Still always requires a call back function
// Adding the '0' Specifically tells the function where to start. Meaning the result would still be 10. But if the value was 10.
// The result would be 20. As the function has already started on 10 and it adding 10 to that initial value. 

console.log("Reduced Array", reduced)


const teamMembers = [ 
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  
  let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0) // Calculates the total years of experience combined by the team

  // By using the '.' notation on the curr value it allows us to dive into the object to access that data required. 

  console.log|('Total Experience', totalExp)

  // Grouping by a property, and totaling it too

  let expByYears = teamMembers.reduce((acc, curr) => {
    let key = curr.profession
    if (!acc[key]) {
        acc[key] = curr.yrsExperience 
    } else {
        acc[key] += curr.yrsExperience
    }
    return acc
  }, {}) // As we want an object back, we define the starting point as an object. Same done for array's

  console.log("Logging the result of the sums of experience by years/profession", expByYears)
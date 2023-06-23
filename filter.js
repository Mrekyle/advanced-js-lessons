

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  

  const under21 = people.filter(person => person.age >= 21) // The same as the map method requiring a call back function
  // But the result must be a true of false value to return the answer
  console.log("Array of people over 21 ", under21) // Just logs Michael to the console.

  const paul = people.filter(person => person.name == "Paul") // Finds all data in the objects who's name is 'Paul'
  const paul2 = people.filter(p => p.name == "Paul")[0] // Also works and cleans and shortens the code
  // By adding the index number it allows us to access the first object inside of the paul array.

  console.log("Logging paul from the people object ", paul) // Adding all his data into the septate paul const
  console.log("Logging paul2 from the people object ", paul2) 

  // The filter method will always return an array. Meaning the paul const is the paul object inside the array.  

  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // Filtering can become complex, so sometimes the callback function needs to be defined outside of the filter method itself. 

  const experience = students.filter(students => {
    const minExperience = students.skills.filter(skill => skill.yrsExperience >= 5) // Returns array with students of more than 5 years
    return minExperience.length > 0;
})

console.log("Years experience", experience)// Logs mark and jason as the pass the callback function

/** 
 * Separate function for the experience2 const. For cleaner 
 * and easier to read code.
*/
const hasStrongSkills = (students => {
    const minExperience = students.skills.filter(skill => skill.yrsExperience >= 5) 
    return minExperience.length > 0;
})

const experience2 = students.filter(hasStrongSkills) // Passing a separate function to the filter method for cleaner code

console.log("Years experience 2 ", experience2) // Logging Mark and Jason as they pass the call back function

// Which can be made simpler and turned into single lines of code.

const has5YearsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills2 = student => students.skills.filter(has5YearsExp).length[0]
const candidates = students.filter(hasStrongSkills)

console.log("Single lines of code", candidates)

// All the above lines of code are exactly the same as the ones above it. Just condensed down into single lines of code.
// Allowing us to remove the return statement to.
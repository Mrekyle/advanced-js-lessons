// Ternary Operator Testing 

function checkWinner(win) {

    win ? console.log('Congratulations you have won') : console.log('Too bad you have lost :(');
}

console.log(checkWinner(true))


function checkAge(age) {

    return age >= 21 ? 'You get Beer' : 'You get apple juice'; // Short hand for is else statements. 
    // First is the condition to be checked, second is a true value, third is the false value. Functions etc can be called based on boolean
}

console.log(checkAge(8));

// This Keyword

function winSize() {
    const width = this.innerWidth; // This keyword is referring to the global window object, as thats essentially the parent object
    const height = this.innerHeight;

    return [width, height];
}

console.log(winSize())

// But when it is inside an object inside an object, it will refer to the parents object 

const shape = {
    width: 600,
    height: 274,
    getTotal: function() {
        return this.width * this.height; // Referring to the width and height of the parent shape object
    }
};

shape.getTotal() // By using '.' notation we are able to access the function inside of the object itself. 

// Function Testing 


function getArea(height, width) {
    return height * width
};

console.log(getArea(3, 4)) // Passing the arguments into the function as height and width multiplying them and outputting the result

// Arrow Functions 

const getAreaTwo = (height, width) => { // Define a const for the function(function name) give the parameters and write the code. 
    return height * width * 72;
}

console.log(getAreaTwo(3, 82)) // Achieving the same function and result, but using a modern arrow function. 

// Single line arrow function

const getAreaThree = (height, width) => height * width; // Simple arrow functions can be defined on a single line

console.log(getAreaThree(32, 82))

// Multiline arrow function 

const multiLine = () => (
    `<p>
        This is a multi line comment returning all the information inside of the function
    </p>`
);

multiLine();
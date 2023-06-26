fetch("https://ci-swapi.herokuapp.com/api/") // Fetches the api from the web server where it is hosted
    // .then(response => response.text()) // Stores the returned data in a variable response as a text string and displays it on the page
    .then(response => response.json()) // json however turns it into a JS object. Allowing us to go in and get the data using normal js scripts
    // .then(data => {
    //     // document.getElementById('content').innerText = data; // Places the data into the html page inside the content div.
    //     const apiLocation = document.getElementById('content'); // Stores the id in a variable

    //     apiLocation.innerText = data.people // Sets the text of the location of the people data 
    // })
    .then(data => displayData(data)) // Works the exact same as the method above. Just cleaner code and separating the function incase 
    // It is needed to be used elsewhere making the code more readable 
    .catch((e) => {
        console.error('Error: ', e) // Still logs into the console the error. But as we are looking to catch an error, .error is used
    }) 

    function displayData(data) {
        document.getElementById('content')
    };
const inquirer = require("inquirer");
const fs = require("fs");

// Creates HTML file content with the specified values.
const generateHTMLContent = ({ userName, location, bio, linkedInUrl, gitHubUrl }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Portfolio</title>
    </head>
    <body class="bg-warning">
        <header class="text-center">
            <h1 class="badge rounded-pill bg-info text-dark m-5 fs-1">Portfolio</h1>
        </header>
        <main class="m-5">
            <section class="card text-center">
                <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                <p class="card-text">${bio}</p>
                <a href="${linkedInUrl}" target="_blank" class="card-link">LinkedIn</a>
                <a href="${gitHubUrl}" target="_blank" class="card-link">Github</a>
                </div>
            </div>
        </main>   
    </body>
    </html>`;

// Collects user input
inquirer.prompt([
    {
        message: "What's your name?",
        type: "input",
        name: "userName"
    },
    {
        message: "Enter your location.",
        type: "input",
        name: "location"
    },
    {
        message: "Write about yourself.",
        type: "input",
        name: "bio"
    },
    {
        message: "Enter your LinkedIn URL.",
        type: "input",
        name: "linkedInUrl"
    },
    {
        message: "Enter your GitHub URL.",
        type: "input",
        name: "gitHubUrl"
    }
]).then(response => {
    // Gets the HTML page content based on user answers
    const htmlPageContent = generateHTMLContent(response);
    // Writes the content to index.html page.
    fs.writeFile("index.html", htmlPageContent, err => 
        err ? console.log(err) : console.log("Successfully created index.html file!"));
});
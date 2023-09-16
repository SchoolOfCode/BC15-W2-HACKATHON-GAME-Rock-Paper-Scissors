// playerNames ["firstName", "score"]
let firstName = document.getElementById("firstName").value;
let playerChoiceRock = document.getElementById("playerChoiceRock").value;
let playerChoicePaper = document.getElementById("playerChoicePaper").value;
let playerChoiceScissors = document.getElementById("playerChoiceScissors").value;

const computerName = "JeffTheComputer";

var playerArray = [firstName, playerChoiceRock, playerChoicePaper, playerChoiceScissors];

var computerArray = [computerChoiceRock, ComputerChoicePaper, ComputerChoiceScissors];

function computerChoiceRandom(computerArray) {
    const item = computerArray[randomIndex];

    return item;
}
const result = computerChoiceRandom(computerArray);
console.log(result);

function returnText() {
    let firstName = document.getElementById("firstName").value;
    alert(firstName);
}

console.log(firstName + ". " + "Lets have some fun.");

function returnChoiceRock() {
    let playerChoiceRock = document.getElementById("playerChoiceRock").value;
    alert(playerChoiceRock);
}
function returnChoicePaper() {
    let playerChoicePaper = document.getElementById("playerChoicePaper").value;
    alert(playerChoicePaper);
}
function returnChoiceScissors() {
    let playerChoiceScissors = document.getElementById("playerChoiceScissors").value;
    alert(playerChoiceScissors);
}

/*Rock-Paper-Scissors Hackathon
Brief
Welcome to the Rock-Paper-Scissors Hackathon! You've spent the last two weeks learning computational thinking, 
the developer mindset, and JavaScript fundamentals. Now, let's put those skills to the test. Your challenge 
is not easy: plan, build, and present a Rock-Paper-Scissors game in a single day.

Objectives
Test your understanding of JavaScript fundamentals.
Work in a team using the Driver-Navigator/pair programming approach.
Practise planning before jumping into coding.
Deliver an MVP within a tight timeframe.
Development Rules
Work in pairs or trios, using the Driver-Navigator approach for coding. Make sure to switch roles regularly!
Make frequent, small commits to track and manage changes easily.
Use draw.io (or a similar tool) to create a flowchart that maps out the logic of your game. 
Consider all possible user interactions, game states, and outcomes.
Translate your flowchart into pseudocode. Write the pseudocode as comments in your 
JavaScript file so it acts as a roadmap when you start to code. Break down each step 
and think through the logic.
Remember: The goal is to solve the problem before you even start coding in JavaScript. 
Think of the actual code as simply translating your well-thought-out plan into syntax 
the computer understands. Working this way will make the development process more organised. 
Good software development is as much about planning and understanding as it is about writing the code.

Technical Requirements
Programming Language: JavaScript
Environment: Browser/Console
UI: Use alert, prompt, confirm and console.log for interactions. (Find out more)
Milestones*/
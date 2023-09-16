Rock-Paper-Scissors Hackathon
Brief
Welcome to the Rock-Paper-Scissors Hackathon! You've spent the last two weeks learning computational thinking, the developer mindset, and JavaScript fundamentals. Now, let's put those skills to the test. Your challenge is not easy: plan, build, and present a Rock-Paper-Scissors game in a single day.

Objectives
Test your understanding of JavaScript fundamentals.
Work in a team using the Driver-Navigator/pair programming approach.
Practise planning before jumping into coding.
Deliver an MVP within a tight timeframe.
Development Rules
Work in pairs or trios, using the Driver-Navigator approach for coding. Make sure to switch roles regularly!
Make frequent, small commits to track and manage changes easily.
Use draw.io (or a similar tool) to create a flowchart that maps out the logic of your game. Consider all possible user interactions, game states, and outcomes.
Translate your flowchart into pseudocode. Write the pseudocode as comments in your JavaScript file so it acts as a roadmap when you start to code. Break down each step and think through the logic.
Remember: The goal is to solve the problem before you even start coding in JavaScript. Think of the actual code as simply translating your well-thought-out plan into syntax the computer understands. Working this way will make the development process more organised. Good software development is as much about planning and understanding as it is about writing the code.

Technical Requirements
Programming Language: JavaScript
Environment: Browser/Console
UI: Use alert, prompt, confirm and console.log for interactions. (Find out more)
Milestones
Planning and Initial Setup
Implement Two-Player Mode
Implement Score Keeping
Create Computer Opponent Mode (using Math.random)
Stretch Goals, Testing & Debugging
Stretch Goals
Include a game history feature
Validate user input to handle invalid or unexpected entries
Implement "Best of" modes (e.g., Best of 3, Best of 5)
Presentation Guidelines
Prepare a 4-minute end-of-day demo.
Each team will present to a coach.
Each team member must participate in the presentation.
Evaluation Criteria
Teamwork: How well did the team work together?
Presentation: Was the presentation clear, concise, and kept on time?
Plan Quality: How well was the project planned out?
Code Quality: Is the code clean and organised?
Git Practices: Were changes documented with frequent, clear commits?
Functionality: Does the game work as intended?
Completion: Are all required features implemented?
---------------------------------------------------------------

# Rock, Paper, Scissors!

Work through the tasks below, which function as tickets, to build and refine your own rock, paper, scissors game where a player plays against the computer.

## Task 0: Make a plan!

As always, before you jump into the code, the first step is to break down your logic and make a plan. This is especially useful when you're coding something more complex, like game logic!

The first step in breaking down the game of rock, paper, scissors might look something like this:

- Run the game loop
  - Store a move choice from a user (rock, paper, or scissors) in a variable
  - Randomly generate the computer's move and store that in a variable
  - Compare the two moves using the rock, paper, scissors rules to decide who won
    - Rock beats scissors
    - Scissors beats paper
    - Paper beats rock
- Alert the winner and update the scores accordingly (wins, losses, and draws)
- Ask the player whether they want to play again

This is a start, but each of these steps can be broken down even further before you code. We've broken these down into the tasks below, but before you read and tackle them, we'd like you to try your hand at planning first.

Reminder of tools that you can use while planning:

- A [flowchart](https://app.diagrams.net/) to visualise the game logic
- Recording any assumptions you're making
- What information you're storing in variables and when each should be updated
- Pseudocode to plan out how you're going to translate your logic into actual code

<details>
<summary>More about pseudocode</summary>

Pseudocode is a way of writing out the logic of a program in a natural language that's easy to understand, without worrying about the specific syntax of any particular programming language. Developers use it to plan out their code.

By writing out the logic of a program in pseudocode, you can focus on the high-level concepts and flow of the program before worrying about the details of the syntax. This can make it easier to wrap your head around complex programming concepts and make sure you're approaching the problem in the right way.

It can help you communicate your ideas to others as well. Pseudocode is often used in technical documentation and specifications to describe the behavior of a program in a clear and concise way.

Here's an example of how pseudocode might be used to plan out a simple JavaScript program that calculates the average of an array of numbers:

// Define an array of numbers

// Initialize a variable to hold the sum of the numbers, and start it at 0

// Use a for loop to loop through the array and add each number to the sum

// Calculate the average by dividing the sum by the number of numbers

// Log the average to the console

This pseudocode is written in a way that's easy to understand, even if you're not familiar with JavaScript syntax. Once you've worked out the logic of your program using pseudocode, you can then translate it into actual JavaScript code.

</details>

We'd recommend you take about 15 minutes to write out how you'd plan to code the game before diving into the tasks, and compare and contrast how you've planned with the tasks we've written out as you go.

## Task 1: Logic

To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors.

The two moves should be stored in two variables like so:

```js
let playerMove = "rock";
let computerMove = "paper";
```

You'll want to hard-code each move in these variables (like the example above) to check each piece of logic at first.

Each time you want to test a different combination of moves, change the hard-coded values for `playerMove` and `computerMove`, save the file, and then refresh the page. You'll be making these dynamic very soon!

`console.log` the expected outcome (whether it's a win, loss, or draw) inside of each if block for now so you can see the outcome when you reload the page while testing each scenario.

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.

## Task 2: Function

Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return:

- `1` if player1 wins
- `0` if it is a draw
- `-1` if player1 loses (player2 wins)

The function should be able to be used like so:

```js
function getWinner(player1, player2) {
  // code goes here...
}

let result = getWinner("rock", "paper");
```

This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.

## Task 3: User Input

Using `prompt`, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`.

This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.

## Task 4: Computer Player

Write a function that generates a random computer move. Use that function to make a dynamic game where the computer move is randomly chosen every time instead of being hard-coded.

<details>
<summary>Hint</summary>
`Math.random()` might be useful!
</details>

This will be deemed as complete when the player can input any move in the prompt, the computer move is chosen by random, and the correct result shows in the alert.

## Task 5: Game Loop

Now that we have a fully functioning game, our next step is to have it run as many times as people would like to play without having to refresh the page.

Use a `while loop` and `confirm`.

This will be deemed as complete when a player can keep playing indefinitely and has the option to stop playing after every round.

## Task 6: Scores

Keep track of how many games have been played, as well as the number of wins, losses, and draws.

This will be deemed as complete when this information is displayed after each round.

## Task 7: Get the player's name using a prompt

Create a username `prompt` and use the username the player inputs in the game so that a player can see their name in the messages sent to them.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.  
🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.

## Bonus task extensions - pick whichever one(s) you fancy

## Bonus A: Extend the logic

Rock, paper scissors is now boring. We need to jazz is up a bit.  
Add some more moves that a player can make.  
Check out this example:  
![rock paper scissors lizard spock](./RPSLS.jpeg)

Modify your logic to represent your new version of this timeless children's game.

## Bonus B: The Clairvoyant Computer

How would you go about making the computer win every time?

How would you go about making it so that the computer wins more often (1/2 the time, 1/4 of the time 90% of the time)?

Plan how you'd go about implementing this (use pseudo-code).

If you have time, see if you can start writing this.

## Bonus C:

You'll notice that this repository also contains a folder called [bonus-c_browser-version](bonus-c_browser-version/). In here, we've included some basic [HTML](bonus-c_browser-version/index.html) and [CSS](bonus-c_browser-version/style.css) for a rock paper scissors game in the browser, not just in the console. This code defines the basic structure of a rock paper scissors game, including HTML elements for displaying the game and user interface, CSS for styling the game, and JavaScript for handling the game logic and user input.

In the [script.js file](bonus-c_browser-version/script.js), we've added some JavaScript that will help hook up the functionality you've already coded to be able to play the game using the buttons on the page. Don't worry about the rest of the JavaScript in that file - that's code that [allows your JS to talk to the elements on the page](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), and we'll delve into that very soon!

For now, your challenge is to plug in your code that you've written in the places indicated by the comments that start with TODO in [script.js](bonus-c_browser-version/script.js). Bring up the page in the browser to test it as you go.

Once you have your functionality hooked up and working with the buttons on the page, you can customize the CSS as well!

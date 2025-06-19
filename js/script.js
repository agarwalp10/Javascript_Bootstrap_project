// =======VALIDATE EMAIL FUNCTION========
// function to validate the email, to make sure it includes the @ and .
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

// validating email examples. The first is true, the last 3 are false. 
console.log(validateEmail("steven@mail.com")) // True
console.log(validateEmail("steven@mailcom")) // False
console.log(validateEmail("stevenmail.com")) // False
console.log(validateEmail("stevenmailcom")) // False




// ======STORING FEEDBACK====== 
// declaring feedback variable 
let feedback = [];

// adds the message to feedback
function addFeedback(message) {
  feedback.push(message);
//   returns feedback array
  return feedback;
}

// "Great website" is added to feedback array
console.log(addFeedback("Great website!")); // ["Great website!"]




// =======POP BUTTON - ALERT FUNCTION======
// HTML Code for button: 
//<button onclick="showMessage()" class="btn btn-primary m-3"> Click me! </button>
  
// this is a pop up when the above button is clicked
function showMessage() {
    alert("Thanks for checking out the menu!");
}


// ======RANDOM GAME PICKER ===========

// creating a list (that can't be changed) of all the games
const games = [
  "New York Giants - Week 1 @ 1:00pm",
  "Las Vegas Raiders - Week 3 @ 1:00pm",
  "Chicago Bears - Week 5 @ 8:15pm",
  "Seattle Seahawks - Week 9 @ 8:20pm",
  "Detroit Lions - Week 10 @ 4:25pm",
  "Denver Broncos - Week 13 @ 8:20pm",
  "Philadelphia Eagles - Week 16 @ 1:00pm",
  "Dallas Cowboys - Week 17 @ 1:00pm"
];

// creating a function to pick a random game 
function getRandomGame() {
  const index = Math.floor(Math.random() * games.length);
  return games[index];
}

console.log(`Random picked game: ${getRandomGame()}`);


// Will need to use the following html button code (i did add this to the website): 
/* <div class="text-center my-4">
  <h4 id="randomGame">Get selected to go to a random game: <em>Click the button to reveal</em></h4>
  <button onclick="showRandomGame()" class="btn btn-primary mt-2">Pick a Random Game</button>
</div> */


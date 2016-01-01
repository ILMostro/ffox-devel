/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Check if the user is ready to play!

confirm("Ready?");

// Get user's age
var age = prompt("What's your age");

// Make sure user is older than 13 years
/*if (age < 13) {
    console.log("You can play, but I take no responsibility");
}
else {
    console.log("Allright. Let's play!!");
}
*/

// instead of prompt going to console, let's send User an alert
if (age < 13) {
    alert("You can play, but I take no responsibility");
}
else {
    alert("Allright. Let's play!!");
}

console.log("\nYou are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'\n");

console.log("\n\tSuddenly, Bieber stops and says, 'Who wants to race me?'\n")

// prompt user for confirmation
var userAnswer = prompt("\nDo you want to race Bieber on stage?\n");

// Check userAnswer for negative response
if (userAnswer === 0 || false || "NO" || "No" || "no") {
    console.log("\nOh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
else {
    console.log("\nYou and Bieber start racing. It's neck and neck! You win by a shoelace!");
}

// prompt user for some feedback
var feedback = prompt("What do you think of the game?\n\tPlease respond with a rating from 1 to 10\n");
                        
if (feedback.length > 8) {
    alert("Thank you! We should race at the next concert!");
}
else {
    alert("I'll keep practicing coding and racing.");
}
/*
undefined
*/
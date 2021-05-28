//Color combining
//inputs 	output
//red + blue 	purple
//red + yellow 	orange
//blue + yellow 	green
//anything else 	"error"

//Color deconstructing
//input 	outputs
//purple 	red + blue
//orange 	red + yellow
//green 	blue + yellow
//anything else 	error

const prompt = require("prompt-sync")();

// This variable should appear for both instances
const question = prompt(
	"Would you like to combine colors or deconstruct colors? "
);

// If the question is to combine
if (question === "combine") {
	// These variables are only for the combine statement
	const combine1 = prompt("Choose a color (red, yellow or blue): ");
	const combine2 = prompt(
		"Choose a color (red, yellow or blue)(MUST BE DIFFERENT THAN FIRST SELECTION): "
	);
	if (combine1 === "red" && combine2 === "yellow") {
		console.log("Your new color is:   ORANGE");
	} else if (combine1 === "blue" && combine2 === "red") {
		console.log("Your new color is:   PURPLE");
	} else if (combine1 === "yellow" && combine2 === "blue") {
		console.log("Your new color is:   GREEN");
	} else if (combine1 === "yellow" && combine2 === "red") {
		console.log("Your new color is:   ORANGE");
	} else if (combine1 === "red" && combine2 === "blue") {
		console.log("Your new color is:   PURPLE");
	} else if (combine1 === "blue" && combine2 === "yellow") {
		console.log("Your new color is:   Green");
	} else console.log("Error");
}

// If the question is to deconstruct
if (question === "deconstruct") {
	// This variable is only for the deconstruct statement
	const deconstruct1 = prompt("Choose a color (purple, orange or green): ");
	if (deconstruct1 === "purple") {
		console.log("Your colors are Red and Blue.");
	} else if (deconstruct1 === "green") {
		console.log("Your colors are Yellow and Blue.");
	} else if (deconstruct1 === "orange") {
		console.log("Your colors are Red and Yellow.");
	} else console.log("Error!");
}

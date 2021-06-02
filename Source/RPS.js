// Initialise
const readline = require("readline");

const interface = readline.createInterface(process.stdin, process.stdout);

// Logic
function RPS(userChoice) {
	const options = [
		"rock",
		"paper",
		"scissors",
	];

	const pick = options.filter(opt => new RegExp(userChoice, "gi").test(opt)).sort((a, b) => a.length - b.length)[0];

	if(!pick) throw new Error('You did not provide a valid input');

	const computerPick = options[Math.floor(Math.random() * options.length)];

	console.log(`I picked ${computerPick} & you picked ${pick}. So...`);

	// Computer Wins
	if(
		(computerPick === "rock" && pick === "scissors") || (computerPick === "scissors" && pick === "paper") || (computerPick === "paper" && pick === "rock")
	) {
		console.log("I won!");
	}

	// User wins
	else if(
		(pick === "rock" && computerPick === "scissors") || (pick === "scissors" && computerPick === "paper") || (pick === "paper" && computerPick === "rock")
	) {
		console.log("You win!");
	}

	// That's a tie
	else {
		console.log("That's a tie");
	}

	// Closing the interface
	interface.close();
}

interface
	.question("Pick your pick, Rock, Paper or Scissors?", (input) => {
		RPS(input);
	});

#! / usr/bin/env node
import inquirer from "inquirer";
//1.computer will generate number
//2.user import gusseing number
//3.compair with user and computer generated number.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answer.userGuesseNumber === randomNumber) {
    console.log("Congragulation ! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}

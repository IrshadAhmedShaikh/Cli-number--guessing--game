#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userguessednumber",
    type: "number",
    message: "Please Guess a number between 1-6 ",
  },
]);
if (answers.userguessednumber === randomnumber) {
  console.log("congratulation!,you guessed a right number");
} else {
  console.log("you guessed wrong number");
}

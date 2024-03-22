#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter your first number : ", type: "number", name: "firstnumber"
    },
    { message: "Enter your second number : ", type: "number", name: "secondnumber" },
    { message: "Select one of the operator which you want to perform in this time:", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponention"] },
]);
let result;
if (answer.operator === "Addition") {
    result = answer.firstnumber + answer.secondnumber;
    console.log(`Your answer is ${result}`);
}
else if (answer.operator === "Subtraction") {
    result = answer.firstnumber - answer.secondnumber;
    console.log(`Your answer is ${result}`);
}
else if (answer.operator === "Multiplication") {
    result = answer.firstnumber * answer.secondnumber;
    console.log(`Your answer is ${result}`);
}
else if (answer.operator === "Division") {
    result = answer.firstnumber / answer.secondnumber;
    console.log(`Your answer is ${result}`);
}
else if (answer.operator === "Exponention") {
    result = answer.firstnumber ** answer.secondnumber;
    console.log(`Your answer is ${result}`);
}
else {
    console.log("You enter invalid operator.");
}

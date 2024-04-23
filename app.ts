

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
const myPin = 1112;

const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);

    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw",
                type: "number",
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        } else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
    } else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
} else {
    console.log("Incorrect pin number");
}

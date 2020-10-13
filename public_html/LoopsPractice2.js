/* 
 * Ask the user to enter 5 numbers.
 * Keep a running total.
 * Display the final total.
 */
let counter = 1;
let sum = 0;
let number = 0;

document.write("This program asks the user for 5 numbers and prints their total. <br>");

while (counter <= 5) {
    number = Number(prompt("Enter number " + counter + ": "));
    counter++;
    sum = sum + number;
}

document.write("Your total is " + sum + ". ");


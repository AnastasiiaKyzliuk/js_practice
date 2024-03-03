/*Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.*/

let firstNumber = 1;
let secondNumber = 17;

let minNumber = Math.min(firstNumber, secondNumber);
let maxNumber = Math.max(firstNumber, secondNumber);

console.log(`Парні числа між ${minNumber} і ${maxNumber}:`);
for (let number = minNumber; number <= maxNumber; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}



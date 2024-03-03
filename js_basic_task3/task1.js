/*Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. 
Виведіть отриманий рядок(із змінами) у консоль.*/

let userInput = "amazing new string";
let newString = "";

for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];

    if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
        newString += '*';
    } else {
    
        newString += currentChar;
    }
}

console.log(newString);

//За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами.

const strings = ["String one", "String two", "string three"];
const uppercaseStrings = [];

for (const string of strings) {
    const uppercaseString = string.toUpperCase();
    uppercaseStrings.push(uppercaseString);
}

console.log(uppercaseStrings);

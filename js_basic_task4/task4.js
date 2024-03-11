//  Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];
const moreThanSixDigitsName = names.find(name => name.length > 6);

console.log(moreThanSixDigitsName);

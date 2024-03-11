//Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів.

const numbers = [5, -4, 0, 6, 7, -1, 0, 0]

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}
console.log('Кількість позитивних чисел:', positiveCount);
console.log('Кількість негативних чисел:', negativeCount);
console.log('Кількість нулів:', zeroCount)


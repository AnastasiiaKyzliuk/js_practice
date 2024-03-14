//Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.

function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

let arr1 = [1, 1, 0, 1, 1];
console.log(sumArray(arr1)); 



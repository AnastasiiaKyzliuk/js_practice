//Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата.

function squaredElements(arr1) {
    let squared = [];
    for (let i = 0; i < arr1.length; i++)
        squared.push(arr1[i] * arr1[i]);
    return squared;
}

let arr1 = [1, 3, 5, 7, 9];
console.log(squaredElements(arr1));

//Створіть функцію, яка приймає рядок тексту та кількість секунд, а також колбек-функцію(яку ми створили у файлі task1.js - тобто імпортуємо її).
//Ця функція повинна викликати колбек через передану кількість секунд і передати в нього переданий текст як аргумент. 
//Тобто, функція-колбек повинна робити якусь дію із переданим в неї рядком

import { printTextWithDelay } from './task1.mjs';

function callbackFunction(text) {
    console.log(text.toUpperCase());
}

printTextWithDelay("My text", 5, callbackFunction);
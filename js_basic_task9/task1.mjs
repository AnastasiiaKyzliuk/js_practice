//Створити функцію, яка приймає два параметри - рядок, та кількість секунд.
//В середині створеної функції, використовуючи SetTimeout(), зробіть так щоб переданий у функцію текст виводився через передану кількість секунд.
//Щоб можна було ось так викликати функцію:
//printTextWithDelay("My text", 5)

export function printTextWithDelay(text, seconds, callback) {
    setTimeout(() => {
        callback(text);
    }, seconds * 1000);
};


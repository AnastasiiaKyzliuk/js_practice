//Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). Поверніть результат операції. 
//За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте помилку(throw new Error() ), якщо дані невірні:
//Якщо операція ділення("/"), то другий параметр не може бути 0
//Для всіх операцій перший та другий параметр повинні бути числами
//Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
//Кількість аргументів не повинна бути більше 3-х
//Інші перевірки по бажанню

function calculate(num1, num2, operator) {
    if (arguments.length > 3) {
        throw new Error("The number of arguments should not exceed three.");
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("The first and second parameters must be numbers.");
    }

    if (typeof operator !== "string") {
        throw new Error("The third parameter must be a string.");
    }

    if (!["+","-","/","*"].includes(operator)) {
        throw new Error("The third parameter must be one of the following: +, -, /, or *.");
    }

    if (operator === "/" && num2 === 0) {
        throw new Error("The second parameter cannot be 0 when performing division.");
    }

    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    return result;
}

try {
    const result = calculate("ty", 0, "/");
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}





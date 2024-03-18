//Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити) та повертає іншу функцію,
 //яка у свою чергу приймає ділене(число, яке потрібно поділити на дільник) та повертає результат ділення.

 function divider(divisor) {
    return function(dividend) {
        if (dividend >= divisor) {
            return dividend / divisor;
        } else {
            return "Dividend is smaller than divisor";
        }
    };
}

const divideByNum = divider(50);
console.log(divideByNum(100)); 



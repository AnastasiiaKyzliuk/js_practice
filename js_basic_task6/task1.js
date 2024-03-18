//Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. 
//За допомогою рекурсії, виведіть всі числа від start до finish.

function countRecursion(startValue, finishValue) {

    if (startValue > finishValue) {
      return;
    }
    console.log(startValue);
    countRecursion(startValue + 1, finishValue);
  }
  
  countRecursion(1, 9);
  

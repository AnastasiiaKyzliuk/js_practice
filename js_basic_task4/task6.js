// Є рядок email із ємейлом користувача
//За допомогою .split() розбийте його на дві частини по символу '@'. Запишіть вихідний масив у нову змінну.
//За допомогою .splice() треба замінити домен пошти(те що після @, тобто другий елемент масиву із індексом 1) на 'changed.com'.
//За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' між двома елементами масиву, виведіть цей рядок. 

const userEmail = "daniel.abrams@gmail.com";
const devidedEmail= userEmail.split('@');
devidedEmail.splice(1, 1, 'changed.com');
const newUserEmail = devidedEmail.join('@')

console.log(newUserEmail);


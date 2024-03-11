//Використовуючи .filter(), запишіть у новий масив тільки ємейли, які містять 'gmail.com'. Виведіть новий відфільтрований масив.

const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com", "torchovanastia@gmail.com"]
const gmailEmails = []

for (const email of emails) {
    if (email.includes('gmail.com')) {
        gmailEmails.push(email);
    }
}

console.log(gmailEmails);
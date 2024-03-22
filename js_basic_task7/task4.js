//Завдання 4(task4.js) * - додаткове, необов'язкове:
//Додати покращення для об'єкта Library:
//Метод addBook:
//перевіряє чи немає ще елементу із таким ID,
//перевіряє, що параметри містять адекватні значення(не пусті, назва - рядок, рік випуску - число і так далі), у разі проблеми - повертає помилку
//Додати новий метод deleteBook, який приймає параметр bookId, та перевіряє чи є щось із таким айді. Якщо так - видаляє, якщо ні - повертає помилку
//Додати метод rentBook, який дає можливість брати книжку в прокат. Він приймає параметр bookId та перевіряє чи є така книжка взагалі та чи не взята вона в прокат. Якщо обидві перевірки проходять - повернути меседж, що книжка в прокаті, якщо ні - повернути помилку.


let Library = {
    books: [],
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        if (typeof bookName !== 'string' || typeof bookAuthor !== 'string' || typeof bookYear !== 'number' || typeof bookId !== 'number' || bookName === '' || bookAuthor === '' || isNaN(bookYear) || bookYear <= 0) {
            return console.log("Error: Invalid book details. Please provide valid information.");
        }
        let existingBook = this.books.find(book => book.id === bookId);
        if (existingBook) {
            return console.log("Error: Book with the same ID already exists.");
        }
        let newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId,
            rented: false
        };
        this.books.push(newBook);
        console.log(`Book "${bookName}" added successfully.`);
    },
    deleteBook: function(bookId) {
        let index = this.books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book with ID ${bookId} deleted successfully.`);
        } else {
            console.log(`Error: Book with ID ${bookId} not found.`);
        }
    },
    rentBook: function(bookId) {
        let book = this.books.find(book => book.id === bookId);
        if (!book) {
            return console.log(`Error: Book with ID ${bookId} not found.`);
        }
        if (book.rented) {
            return console.log(`Error: Book "${book.name}" is already rented.`);
        }
        book.rented = true;
        console.log(`Book "${book.name}" is now rented.`);
    },
    printBookInfo: function(bookId) {
        let foundBook = this.books.find(book => book.id === bookId);
        if (foundBook) {
            console.log(`Book Info: Name - ${foundBook.name}, Author - ${foundBook.author}, Year - ${foundBook.year}`);
        } else {
            console.log(`Error: Book with ID ${bookId} not found.`);
        }
    },
    printAllBooks: function() {
        console.log("All Books:");
        this.books.forEach(book => {
            console.log(`Name: ${book.name}, Author: ${book.author}, Year: ${book.year}, ID: ${book.id}`);
        });
    }
};


Library.addBook("Book1", "Author1", 2020, 1);
Library.addBook("Book2", "Author2", 2018, 2);
Library.addBook("Book3", "Author3", 2015, 3);


Library.deleteBook(2);


Library.rentBook(1);


Library.printBookInfo(1);


Library.printAllBooks();

//Створити об'єкт Library, який має:
//Масив books [] - масив, де містяться об'єкти.
//Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
//Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
//Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
//Потренуватись додавати нові книжки та викликати інші методи об'єкта Library

let Library = {
    books: [],
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        let newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId
        };
        this.books.push(newBook);
    },
    printBookInfo: function(bookId) {
        let foundBook = this.books.find(book => book.id === bookId);
        if (foundBook) {
            console.log(`Book Info: Name - ${foundBook.name}, Author - ${foundBook.author}, Year - ${foundBook.year}`);
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    },
    printAllBooks: function() {
        console.log("All Books:");
        this.books.forEach(book => {
            console.log(`Name: ${book.name}, Author: ${book.author}, Year: ${book.year}, ID: ${book.id}`);
        });
    }
};


Library.addBook("Book1", "Author1", 2017, 1);
Library.addBook("Book2", "Author2", 2018, 2);
Library.addBook("Book3", "Author3", 2019, 3);


Library.printBookInfo(2); 
Library.printBookInfo(4); 


Library.printAllBooks();

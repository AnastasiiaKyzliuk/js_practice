//Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.
//Приклади об'єктів: person, car, book, phone, city, building etc..


let cityKyiv = {
    name: "Kyiv",
    population: 3000000,
    country: "Ukraine",
    getInfo: function() {
        return `City: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
    },
    explore: function() {
        return `Welcome to ${this.name}! Enjoy the beauty of our city.`;
    }
};

let cityLviv = {
    name: "Lviv",
    population: 721301,
    country: "Ukraine",
    getInfo: function() {
        return `City: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
    },
    explore: function() {
        return `Welcome to ${this.name}! Enjoy the beauty of our city.`;
    }
};

let hotel = {
    name: "Grand Hotel",
    stars: 5,
    location: "City Center",
    getInfo: function() {
        return `Hotel: ${this.name}, Stars: ${this.stars}, Location: ${this.location}`;
    },
    bookRoom: function() {
        return `Welcome to ${this.name}! Book your luxurious room right now!`;
    }
};

console.log(cityKyiv.getInfo());
console.log(cityLviv.explore());
console.log(hotel.bookRoom());

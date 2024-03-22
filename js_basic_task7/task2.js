//Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.
//Приклади об'єктів: person, car, book, phone, city, building etc...


let cityKyiv = new Object();
cityKyiv.name = "Kyiv";
cityKyiv.population = 3000000;
cityKyiv.country = "Ukraine";
cityKyiv.getInfo = function() {
    return `City: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
};


let cityLviv = new Object();
cityLviv.name = "Lviv";
cityLviv.population = 721301;
cityLviv.country = "Ukraine";
cityLviv.getInfo = function() {
    return `City: ${this.name}, Population: ${this.population}, Country: ${this.country}`;
};


let hotel = new Object();
hotel.name = "Grand Hotel";
hotel.stars = 5;
hotel.location = "City Center";
hotel.getInfo = function() {
    return `Hotel: ${this.name}, Stars: ${this.stars}, Location: ${this.location}`;
};


console.log(cityKyiv.getInfo());
console.log(cityLviv.getInfo());
console.log(hotel.getInfo());


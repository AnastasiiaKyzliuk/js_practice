//Створити клас Animal. Додати до нього властивості color, name, type. 
//Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.

 export class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}, the ${this.color} ${this.type}.`);
    }

    run() {
        console.log(`${this.name} is running.`);
    }
}


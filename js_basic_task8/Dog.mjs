//Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.

import { Animal } from './Animal.mjs';

export class Dog extends Animal {
    constructor(color, name, breed, gender) {
        super(color, name, 'Dog'); 
        this.breed = breed;
        this.gender = gender;
    }

    bark() {
        console.log(`${this.name}, the ${this.gender} ${this.color} ${this.type} of wonderful ${this.breed} breed is barking!`);
    }

    play() {
        console.log(`${this.name}, the ${this.gender} ${this.color} ${this.type} of wonderful ${this.breed} is playing!`);
    }
}





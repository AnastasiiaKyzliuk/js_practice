//Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.

import { Animal } from './Animal.mjs';

export class Cat extends Animal {
    constructor(color, name, isHunting, isHungry, isSleepy) {
        super(color, name, 'Cat'); 
        this.isHunting = isHunting;
        this.isHungry = isHungry;
        this.isSleepy = isSleepy;
    }

    purr() {
        console.log(`${this.name}, the ${this.color} ${this.type} is purring.`);
    }

    eat() {
        if (this.isHunting) {
            console.log(`${this.name}, the ${this.color} ${this.type} is hunting for food.`);
        } else {
            console.log(`${this.name}, the ${this.color} ${this.type} is eating.`);
        }
    }
}

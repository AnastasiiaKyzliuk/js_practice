//Створити об'єкти до Dog та Cat та попрактикуватись із методами.

import { Dog } from './Dog.mjs';
import { Cat } from './Cat.mjs';


const dog1 = new Dog("Brown", "Champ", "Corgi", "Male");
const dog2 = new Dog("White", "Chippi", "Bulldog", "Female");


const cat1 = new Cat("Gray", "Baks", true, true, false);
const cat2 = new Cat("Black", "Luna", false, false, true);


dog1.sayHello();
dog1.run();
dog1.bark();
dog1.play();

dog2.sayHello();
dog2.run();
dog2.bark();
dog2.play(); 


cat1.sayHello();
cat1.run();
cat1.purr();
cat1.eat();

cat2.sayHello();
cat2.run();
cat2.purr();
cat2.eat();

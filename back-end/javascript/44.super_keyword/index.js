// super =  keyword is use in classes to call the constructor or acces the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age); // we send the variables received on this class constructor to the super class constructor
        // this.name = name; // we don't need to repeat if the inherited classes use the same properties, so we can use super()
        // this.age = age; //
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed); // we can use methods using super.'method'() with the required property
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed);
    }
}   

const pygmyRabbit = new Rabbit("Pygmy", 1, 25);
const salmonFish = new Fish("Salmon", 2, 12);
const redTailedHawk = new Hawk("Red Tailed", 3, 50);

console.log(pygmyRabbit);
console.log(pygmyRabbit.name);
console.log(pygmyRabbit.age);
console.log(pygmyRabbit.runSpeed);
pygmyRabbit.run();

console.log(salmonFish);
console.log(salmonFish.name);
console.log(salmonFish.age);
console.log(salmonFish.swimSpeed);
salmonFish.swim();

console.log(redTailedHawk);
console.log(redTailedHawk.name);
console.log(redTailedHawk.age);
console.log(redTailedHawk.flySpeed);
redTailedHawk.fly();
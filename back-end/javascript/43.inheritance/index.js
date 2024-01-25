// inheritance =    allow a new class to inherit porperties and methods from an existing class (parent -> child)
//                  helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{  // Rabbit class inherit all properties and methods from Animal class using "extends"
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "Hawk";


    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
class RedTailedHawk extends Hawk{ // (Animal -> Hawk -> RedTailedHawk)
    static typeName = "RedTailedHawk";
    
    static minLengthSize = 18;
    static maxLengthSize = 25;
    static wingspanSize = 4;

    static size(){
        console.log(`The ${RedTailedHawk.typeName} usually has between ${RedTailedHawk.minLengthSize}-${RedTailedHawk.maxLengthSize} inches in lenght with a wingspan of ${RedTailedHawk.wingspanSize} feet`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
const redTailedHawk = new RedTailedHawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
// fish.run(); //it doesn't work because the classes inherit from the same class, but the children don't share the same properties and methods
fish.swim();

console.log(hawk.alive);
console.log; 
hawk.eat();
hawk.sleep();
hawk.fly();

redTailedHawk.eat();
console.log(RedTailedHawk.typeName); // using static keyword, we'll need to acces the class name itself
RedTailedHawk.size();
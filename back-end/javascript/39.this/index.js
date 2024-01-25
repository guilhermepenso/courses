//  this =  reference to the object where THIS is used
//          (the object depends on the immediate context)
//          person.name = this.name

//      ** DOESN'T WORK WITH ARROW FUNCTION **

const person1 = {
    name: "Spongebob",
    favFood: "hamburguers",
    sayHello: function(){console.log(`Hi I am ${this.name}`)}, // ${this.name} it's the same as ${person1.name}
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi I am ${this.name}`)}, // it uses only properties from the same object
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();

console.log(this);
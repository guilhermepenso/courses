// nested objects = Objects inside of other objects
//                  Allows you to represent more comples data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// EXAMPLE 1

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(`${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}`);
console.log(person.address);
console.log(`${person.address.street}, ${person.address.city}, ${person.address.country}`);

for(const property in person.address){
    console.log(person.address[property]);
}

// EXAMPLE 2

class Person{
    constructor(name, age, ...address){ // we can use spread operator to get the property from the Address object inside the array address from Person object
        this.name = name;
        this.age = age;
        this.address = new Address (...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Guilherme", 25, "Rua Olivia Bandeira Singer, 380", "Curitiba", "Brasil");
const person2 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")
const person3 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters")

console.log(person1);
console.log(person1.name);
console.log(person1.address.country);


console.log(person2);
console.log(person2.age);
console.log(person2.address.city)

console.log(person3);
console.log(person3.address);
console.log(person3.address.street);
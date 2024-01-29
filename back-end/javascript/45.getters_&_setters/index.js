// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

// EXAMPLE 1

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // underscore prefix means it's private property and shouldn't be touched
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight){ 
        if(newHeight > 0){
            this._height = newHeight; // underscore prefix means it's private property and shouldn't be touched
        }
        else{
            console.error("Height must be a positive number")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    } 

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }

}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5; // we can change the property with setters
rectangle.height = 6;

console.log(rectangle.width); // with just setters, it won't be readable
console.log(rectangle.height); // getters enable the readability of the property

console.log(rectangle.area); // we can access like a property

// EXAMPLE 2

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get canDrink(){
        if(this._age > 18){
            return `${this._firstName} is ${this._age} years old, he can drink alcohol`;
        }
        else{
            return `${this._firstName} is ${this._age} years old, he cannot drink alcohol`;
        }
    }
}

const person = new Person("Guilherme", "Penso", 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

console.log(person.fullName);
console.log(person.canDrink);
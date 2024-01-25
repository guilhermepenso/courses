//  static =    keyword that defines properties or methods that belong to a class itself rather than the objects created from that class 
//              (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * Math.pow(radius, 2);
    }
}

// INSTEAD OF
const MathUtil1 = console.log(MathUtil.PI);

// SIMPLY USE
console.log(MathUtil.PI); // allows to acces the static property, as the static belongs to the class itself, not to a object inside the class

console.log(MathUtil.getDiameter(10)); // also allows to acces methods or functions inside the class

console.log(MathUtil.getCircumference(10));

console.log(MathUtil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Squidward");
const user4 = new User("Sandy");
const user5 = new User("Garry");

console.log(user1.username);
console.log(user1.userCount); // we can't acces the userCount because it doesn't belong to the constructor or object, as it is from the class

user1.sayHello();
user2.sayHello();
user3.sayHello();

// Static use as a property from the class
console.log(User.userCount);

// Static use as a property from the class inside a function
User.getUserCount();

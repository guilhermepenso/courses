const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];   

fruits.push({name: "grapes", color: "purple", calories: 62})

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].calories);

fruits.pop();

fruits.splice(1, 2);

console.log(fruits);

//forEach()

fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

// map()

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

// filter()

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);

const highCalories = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalories);

// reduce()

const maxFruit = fruits.reduce( (prevElem, nextElem) => nextElem.calories > prevElem.calories ? nextElem : prevElem);
console.log(maxFruit);
console.log(maxFruit.calories);

const minFruit = fruits.reduce( (prevElem, nextElem) => nextElem.calories < prevElem.calories ? nextElem : prevElem);
console.log(minFruit);
console.log(minFruit.name);
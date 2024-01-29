const cards = ['A', 2, 3, 4,  5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// cards.sort(() => Math.random() - 0.5); // not recommended, result aren't perfectly uniform (as it increase the size, it gets more unefficient)

shuffle(cards);

console.log(cards);

// Fisher-Yates algorithm

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){ //i = "array.length - 1" means we get the number of elements -1 as we start counting with 0, then continue drecreasing with i--
        const random = Math.floor(Math.random() * (i + 1)); // random receives a random number with Math.random() from 1 to 13 rounded by Math.floor() 

        [array[i], array[random]] = [array[random], array[i]]; // using destructuring, we swap the property in the current position with the random number
    }
}
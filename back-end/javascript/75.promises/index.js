// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500);
// };

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
        
            if(dogWalked){
                resolve("You walk the dog");
            }
            else {
                reject("You didn't walk the dog")
            }
        }, 1000);
    });
};

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500);
// };

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen")
            }

        }, 1000);
    }, 1000);
};

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// };

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash");
            } 
            else {
                reject("You didn't take out the trash");
            }
        }, 1000);
    });
}

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores!");
//         });
//     });
// });

walkDog().then(value => { console.log(value); return cleanKitchen() })
         .then(value => { console.log(value); return takeOutTrash() })
         .then(value => { console.log(value); console.log("You finished all the chores!") })
         .catch(error => { console.error(error)});
// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

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

// walkDog().then(value => { console.log(value); return cleanKitchen() })
//          .then(value => { console.log(value); return takeOutTrash() })
//          .then(value => { console.log(value); console.log("You finished all the chores!") })
//          .catch(error => { console.error(error)});

async function doChores(){
    
    try {    
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    } catch (error) {
        console.error(error);
    }
}

doChores();
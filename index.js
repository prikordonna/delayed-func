// Task 3. Implement function, that will return result after 10 second.

async function hoursPerDay() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Every person should sleep for 7–9 hours per night.");
        }, 10000);
        
    })
}

// Task 4. Implement Promise inside Promise, haha. The second Promise should
// call function from task #3, and you should use async and await.


async function sleep(hours) {
    let waitFunc = await hoursPerDay();
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("This is " + hours / 24 + " part of the day");
        }, 5000);
        resolve();
        console.log("You slept today for " + hours + " hours");
    });
}


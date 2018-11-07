function question () {
    let ask = prompt("How many countries are there in the world?", 0);

    setTimeout (() => {
        if ( ask == 195) {
            console.log("You are correct!")
        } else {
            console.log("Sorry, you've run out of time.") 
        }
    }, 10000);

    console.log("Okay, let me check the answer");
}

question();
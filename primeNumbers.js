//Implement recursing to print only PRIME numbers from n to 1. 
//I would like to run function func(10) and see 7, 5, 3, 2, 1

function isPrime (number,divider) {
    if(number === 2) {
        return true;
    }
    if(!Number.isInteger(number) || number < 2) {
        return false;
    }
    
    if(divider * divider > number) {
        return true;
    }
    
    else if(number % divider == 0) {
        return false; 
    }
    return isPrime(number, divider + 1);
}


function showPrimeNumber(number) {
    for (let i = number; i >= 1; i--) {
        if(isPrime(i, 2)) {
            console.log(i);
        }
    }
}


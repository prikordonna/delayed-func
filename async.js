// Task 3. Implement function, that will return result after 10 second.

const names = [
    {name: "Alvin", age: 34 },
    {name: "Coby", age: 45},
    {name: "Junior", age: 21 }
];

const getName = () => {
    setTimeout(() => {
        let output = '';
        names.forEach((name) => {
            output += `<li>${name.name}</li>`;
        });
        document.body.innerHTML += output;
    }, 10000);
}

// Task 4. Implement Promise inside Promise, haha. The second Promise should
// call function from task #3, and you should use async and await.
// const hours = prompt("Please enter how many hours have you slept today?");

const addName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            names.push(name);
            resolve();
        }, 2000);
    });
}

async function init() {
    await addName({name: "Sponge Bob"});
    await getName();
}

init();

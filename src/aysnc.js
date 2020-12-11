const { rejects } = require("assert")

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Oh Error'))
    });
}


const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');



const anotherFuction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (e) {
        console.log(e);
    }
}

console.log('Before2');
anotherFuction();
console.log('After2');
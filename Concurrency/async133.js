let counter = 0;

function incrementCounter(value) {
    return new Promise( resolve => {
        setTimeout(() => {
            counter++
            resolve(`x value ${value} counter: ${counter}`)
        }, 1000)
    })
}

async function asyncFunction(value) {
    console.log(`ready ${value} counter: ${counter}`);
    const resolvedValue = await incrementCounter(value);
    console.log(resolvedValue);
}

for (let i = 1; i < 4; i++) {
    asyncFunction(i)
}
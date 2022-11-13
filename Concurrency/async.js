const myPromise = new Promise((resolve, reject) => {
    resolve("I am resolved.")
})

async function myFunction() {
    const resolvedValue = await myPromise;
    console.log(resolvedValue);
}

myFunction();
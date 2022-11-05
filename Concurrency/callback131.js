function greet(fullName) {
    console.log(`Hello ${fullName[0] + ' ' + fullName[1]}`);
}

function mainFunction(userName,callback) {
    const name = userName.split(" ")
    callback(name);
}

mainFunction("Adil Altaf",greet)
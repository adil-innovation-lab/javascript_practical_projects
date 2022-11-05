function doFlexibleStuff(callback) {
    callback();
}

const function1 = () => console.log("Hello from Function 1")
const function2 = () => console.log("Hello from Function 2")

doFlexibleStuff(function1)
doFlexibleStuff(function2)
function factorial(nr) {
    console.log(nr);
    if (nr === 0) {
        return 1
    } else {
        return nr * factorial(--nr)
    }
}

console.log(factorial(2));
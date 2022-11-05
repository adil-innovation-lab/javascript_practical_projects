// function add (x,y) {
//     return x+y
// }
// add(1,2)

// let add2 = (x,y) => x+y
// add2(1,2)

const student = {
    firstName: "Adil",
    lastName: "Altaf",
    fullName: function () {return this.firstName + ' ' + this.lastName}
}

console.log(student.fullName())
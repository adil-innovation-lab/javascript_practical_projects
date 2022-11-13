const notAllowedPasswords = ["password", "Alexander", "PIAIC"];

function checkPassword(password) {
  return notAllowedPasswords.includes(password);
}

function validatePassword(password) {
    return new Promise ((resolve, reject) => {
        if (checkPassword(password)) {
            reject({
                status: false
            })
        } else {
            resolve({
                status: true
            })
        }
    })
}

function checker(password) {
    validatePassword(password)
        .then(value => {
            console.log("Authorize User");
            console.log(value);
        })
        .catch(value => {
            console.log("Reject User");
            console.log(value);
        })
}

checker("password")
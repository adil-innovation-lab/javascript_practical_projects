const promise = new Promise(function (resolve, reject) {
    resolve('JavaScript!')
});

promise.then(function (success) {
    console.log("success: ", success);
}).catch(function(error){
    console.log("error: ", error);
})
const promise = new Promise((resolve, reject) =>
  reject("Something went wrong")
); // resolve("Start Counting"));

const counter = (value) => console.log(value);

promise
  .then((value) => {
    counter(value);
    return "one";
  })
  .then((value) => {
    counter(value);
    return "two";
  })
  .then((value) => {
    counter(value);
    return "three";
  })
  .then((value) => {
    counter(value);
  })
  .catch((error) => console.error(error));
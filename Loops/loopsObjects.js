let car = {
    make: "Land Rover",
    model: "Defender 110",
    year: "2023",
    color: "Black"
}

for (const key in car) {
    console.log(car[key]);
}
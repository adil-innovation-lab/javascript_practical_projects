function breakfastOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${item} is ready.`);
    }, 3000);
  });
}

async function Order(item) {
  const order = await breakfastOrder(item);
  console.log(order);
}

Order("Omelette");
Order("Paratha");
Order("Coffee");

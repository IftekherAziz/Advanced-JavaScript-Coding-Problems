const shoppintCart = [
  { name: "shoe", price: 1000, quantity: 2 },
  { name: "shirt", price: 2000, quantity: 1 },
  { name: "pant", price: 3000 , quantity: 3 },
  { name: "watch", price: 4000, quantity: 1 }
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
    // console.log(product);
  }
  return sum;
}

const expense = totalCost(shoppintCart);
console.log("Total expense:", expense);

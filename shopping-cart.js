const shoppintCart = [
    {name:'shoe', price: 1000},
    {name:'shirt', price: 2000},
    {name:'pant', price: 3000},
    {name:'watch', price: 4000}
];

function totalCost(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product;
       // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppintCart);
console.log('Total expense:', expense);
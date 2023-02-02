const phones = [
    { name: 'iPhone 8', camera:12, storage: '32gb',color: 'silver', price: 70000 },
    { name: 'Samsung', camera:10, storage: '32gb',color: 'golden',  price: 50000 },
    { name: 'Nokia', camera:8, storage: '16gb',color: 'white',  price: 40000 },
    { name: 'realme', camera:18, storage: '32gb',color: 'black',  price: 30000}
];

const cheapest = phones.reduce((cheapest, phone) => {
    if (phone.price < cheapest.price) {
        return phone;
    }
    return cheapest;
}, phones[0]);

console.log(cheapest);
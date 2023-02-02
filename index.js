const country = 'Bangladesh';
const age = 20;
const isIndependent = true;
const student = {id: 1, name: 'Rahim', age: 20, country: 'Bangladesh'};
const friends = [13, 14, 15, 16, 17, 18, 19, 20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// Check array using Array.isArray() function
console.log(Array.isArray(friends));
console.log(typeof add);


console.log(friends.includes(13));
if(friends.indexOf(13) != -1){
    console.log('13 is available');
}
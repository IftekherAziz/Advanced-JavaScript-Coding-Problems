function add(num1, num2) {
    if (typeof num1 !== 'number') {
         return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add('18', 82);
console.log(result);
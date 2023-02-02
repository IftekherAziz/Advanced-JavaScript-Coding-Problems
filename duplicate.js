const names = ['John', 'Paul', 'George', 'Ringo', 'John', 'Paul', 'John','Antony', 'Max', 'Alex', 'Paul'];

// Remove duplicates from an array using a Set
// const uniqueNames = [...new Set(names)];
// console.log(uniqueNames);

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.indexOf(name) == -1){
            unique.push(name);
        }
    }
    return unique;
}

console.log(removeDuplicate(names));
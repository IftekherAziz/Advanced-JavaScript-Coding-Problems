const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// Remove elements from an array
// and, if necessary , inserts new elements in their place
// will change the original array contents

const partial =  friends.splice(2,5);
console.log(partial);

// Print original array after splice 
console.log(friends);
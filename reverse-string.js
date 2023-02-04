const x = "aziz";
const y = "shovan";
var newString = "";

if (x.length > y.length) {
  for (let i = x.length - 1; i >= 0; i--) {
    let element = x[i];
    newString += element;
  }
  console.log("The reverse string is:", newString);
} else {
  for (let i = y.length - 1; i >= 0; i--) {
    let element = y[i];
    newString += element;
  }
  console.log("The reverse string is:", newString);
}

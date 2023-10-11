const stringArray = ["hello", "world", "javascript"];
const titleCapsArray = stringArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(titleCapsArray);

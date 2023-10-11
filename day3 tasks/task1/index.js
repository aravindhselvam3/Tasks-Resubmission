
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert the JSON objects to strings
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

// Sort the characters within the strings
let sortedStr1 = str1.split('').sort().join('');
let sortedStr2 = str2.split('').sort().join('');

// Compare the sorted strings for equality
if (sortedStr1 === sortedStr2) {
    console.log("The JSON objects have the same properties (ignoring order).");
} else {
    console.log("The JSON objects have different properties.");
}

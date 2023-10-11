const Circle = require('./Circle'); // Provide the correct path to your Circle class file

const myCircle = new Circle(3.0, "blue"); // Example usage with custom radius and color
console.log(myCircle.toString());
console.log(`Area: ${myCircle.getArea()}`);
console.log(`Circumference: ${myCircle.getCircumference()}`);

const Circle = require('./Circle'); 

const myCircle = new Circle(3.0, "blue"); 
console.log(myCircle.toString());
console.log(`Area: ${myCircle.getArea()}`);
console.log(`Circumference: ${myCircle.getCircumference()}`);

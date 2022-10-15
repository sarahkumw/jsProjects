// a. Write a JavaScript program to find the diagonal of a square where the length of each
// side is 9.
// b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6 and 7.
// c. Write a JavaScript program to find the circumference and surface area of a circle whose
// radius is 4.

function squareDiagonal(side) {
    const squareRootTwo = Math.sqrt(2);
    const diagonal = side * squareRootTwo;
    console.log(`The diagonal of a square with side ${side} is ${diagonal}`)
};


function areaOfTriangle(side1, side2, side3) {
    const semiPerimeter = (side1 + side2 + side3)/2;
    const areaSquared = semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3);
    const area = Math.sqrt(areaSquared);
    console.log(`The area of a triangle with sides ${side1}, ${side2}, and ${side3} is ${area}`)
};


function areaOfCircle(radius) {
    const circumference = 2 * Math.PI * radius;
    const surfaceArea = radius * radius * Math.PI;
    console.log(`A circle with radius ${radius} has a circumference of 
        ${circumference} and surface area of ${surfaceArea}`);
};
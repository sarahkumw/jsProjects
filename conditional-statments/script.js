// a) Write a JavaScript program that accepts two integers and displays the larger of the two.
// b) Write a JavaScript program that checks whether an integer is an even or an odd number.

function largerNumber(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is greater than ${num2}`)
    }
    if(num2 > num1) {
        console.log(`${num2} is greater than ${num1}`)
    }
    else {
        console.log("Numbers are the same or undefined")
    }
};


function isEvenOrOdd (int) {
    if(int % 1 === 0 && int != 0){
        if(int % 2 === 0){
            console.log(`${int} is an even number`)
        }
        else {
            console.log(`${int} is an odd number`)
        }
    }
    else {
        console.log(`${int} is not a valid integer`)
    }
};
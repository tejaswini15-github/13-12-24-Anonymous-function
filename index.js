/**
 *     Callbacks in js
 *          
 * function defination which as argument to another function , method or 
 * constructor parameter is known as callbacks
 */
function one(callback) {
    console.log(callback);
    callback();
}
function two() {
    console.log("Two");
}
one(two);



function one(callback) {
    console.log(callback);
    callback();
}
one(function two() {
    console.log("Two");
});



// lower order function: the function that doesn't take any parameter as callback is known as lower level function



// Higher order function   : the function which is taking call back as parameter is known as higher order function
function one(callback) {
    callback(10, 20);
}
function two(a, b) {
    console.log(`A + b = ${a + b}`);
}
one(two);




function funOne(a, b, c) {
    console.log(c(a, b));
}
function getSum(a, b) {
    return a + b;
}
funOne(10, 30, getSum);




function funThree(a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
function funFour(x) {
    return x * 2;
}
function funFive(x) {
    return x * 5;
}

funThree(14, funFive, funFour);



function test(callback1, callback2) {
    callback1();
    console.log("2");
    callback1();
    console.log("8");
    callback2();
    console.log("9");
    callback2();
}
test(function x() {
    console.log("3");
}, function y() {
    console.log("6");
});









/**
 * Anonymous functions in Javascipt
 * ---------------------------------
 *      The function which is not having any function name is known anonymous function
 *      these functions are used to pass as argument to another functions , 
 *      methods , events and timing functions (setTimeout and setInterval);
 *      These functions can store in variable or can be passed as arguments
 *      SYn : 
 *               function([parameters])       
 *                         [or]
 *              function(parameter1, .... , paramterN){
 *                      // statements
 *                    [return value]
 *              }
 *              variable referenceVariable = function([parameter]){
 *                      // statements
 *                      [return value];
 *              }
 *              referenceVaraible([arguments]);
 * 
 */

/*  First class functions:  The functions which are stored as value is known as first class functions 
    varaiable syntax: variable identifier = value;  */

//first class function syntax:

 var y = function x() {
    console.log("Hello World")
}
console.log(y)
y()



// function expression:
//The function which is stored in a variable as a value is known as function expression 

//Anonymous function syntax:
var y = function() {
    console.log("Hello World");
}
console.log(y);
y();


//    first class function
var print = function demo(a, b) {
    console.log("Demo Function Called", a + b);
}
console.log(print);
print(10, 30);


// Anonymous function
var print = function (a, b) {
    console.log("Demo Function Called", a + b);
}
console.log(print);
print(10, 30);









// named fun
function printer(a, b, c) {
    console.log(a + b + c);
}
printer(10, 40, 50)


//  first class fun
var printer = function demo1(a, b, c) {
    console.log(a + b + c);
}
printer(10, 40, 50)


// anonymous fun
var printer = function (a, b, c) {
    console.log(a + b + c);
}
printer(10, 40, 50)








// named 
function sample(a, b) {
    console.log("Hey");
    return a + b;
}
console.log(sample(10, 30));


// Anonymous fun
var sample = function (a, b) {
    console.log("Hey");
    return a + b;
}
console.log(sample(10, 30));





function demo1(callback) {
    callback();
}
demo1(function () {
    console.log("Anonymous Function");
});



demo1( ()=> {
    console.log("Arrow Function");
});

// demo1(() => console.log("Arrow Function"));





// named fun
function funOne(a, b, c) {
    console.log(c(a, b));
}
function getSum(a, b) {
    return a + b;
}
funOne(10, 30, getSum);


//  converting

// Anonymous fun
function funOne(a, b, c) {
    console.log(c(a, b));
}
funOne(10, 30, function (a, b) {
    return a + b;
});







// named fun
function funThree(a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
function funFour(x) {
    return x * 2;
}
function funFive(x) {
    return x * 5;
}
funThree(14, funFive, funFour);



// anonymous
function funThree(a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
funThree(14, function (x) {
    return x * 5;
}, function (x) {
    return x * 2;
});


// anonymous
var funThree = function (a, b, c) {
    var result = b(a) + c(a + 5);
    console.log(result);
}
funThree(14, function (x) {
    return x * 5;
}, function (x) {
    return x * 2;
});




TASK QUESTIONS
//named fun
function sayHello() { 
    console.log("Hello"); 
}
sayHello()

//first class fun
var printer=function sayHello() { 
    console.log("Hello"); 
}
printer()

//Anonymous fun
var printer=function () { 
    console.log("Hello"); 
}
printer()




// named fun
function printNumber() { 
    console.log(5); 
}
printNumber()

// first class fun
var demo=function printNumber() { 
    console.log(5); 
}
demo()    

// Anonymous fun
var demo=function () { 
    console.log(5); 
}
demo()       







// named fun
function addAndPrint() { 
    console.log(2 + 3); 
}
addAndPrint()    


//first class fun
var print=function addAndPrint() { 
    console.log(2 + 3); 
}
print()

// Anonymous fun
var print=function () { 
        console.log(2 + 3); 
}
print()      




// named
function add(a, b) {
    return a + b; 
}
console.log(add(15,30))

// first class fun
var demo1=function add(a, b) {
    return a + b; 
}
console.log(demo1(15,30))

// Anonymous fun
var demo1=function (a, b) {
    return a + b; 
}
console.log(demo1(15,30))







// named fun
function subtract(a, b) { 
    return a - b; 
}
console.log(subtract(14, 7))
    
// first class fun
var result=function subtract(a, b) { 
    return a - b; 
}
console.log(result(14, 7))
    
// Anonymous fun
var result=function (a, b) { 
    return a - b; 
}
console.log(result(14, 7))



// named fun
function double(x) { 
    return x + x; 
}
console.log(double(10))

// first class fun
var demo2=function double(x) { 
    return x + x; 
}
console.log(demo2(10))

// Anonymous fun
var demo2=function (x) { 
    return x + x; 
}
console.log(demo2(10))





// named fun
function square(x) { 
    return x * x; 
}
console.log(square(5))

// first class fun
var multiply=function square(x) { 
    return x * x; 
}
console.log(multiply(5))

// Anonymous fun
var multiply=function (x) { 
    return x * x; 
}
console.log(multiply(5))






// named fun
function isPositive(x) { 
    return x > 0;
}
console.log(isPositive(3))

// first class fun
var operator=function isPositive(x) { 
    return x > 0;
}
console.log(operator(3))

// Anonymous fun
var operator=function (x) { 
    return x > 0;
}
console.log(operator(3))





// named fun
function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(absolute(20))



// first class fun
var statement=function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(statement(20))


// Anonymous fun
var statement=function (x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(statement(20))






// named fun
function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(absolute(-5))



// first class fun
var statement=function absolute(x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(statement(-5))


// Anonymous fun
var statement=function (x) { 
    if (x < 0) { 
    return 0 - x; 
    }
     return x; 
}
console.log(statement(-5))






// named fun
function max(a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
}
console.log(max(12,14))


// first class fun
var greater=function max(a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
}
console.log(greater(12,14))


// Anonymous fun
var greater=function (a, b) { 
    if (a > b) { 
    return a;
    } 
    return b;
}
console.log(greater(12,14))








// named fun
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); 


// first class fun
var add=function sum(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Anonymous fun
var add=function (a, b) {
    return a + b;
}
console.log(add(10, 20));



// named fun
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8)); 
console.log(isEven(9)); 

// first class fun
var evenNumber=function isEven(num) {
    return num % 2 === 0;
}
console.log(evenNumber(8)); 
console.log(evenNumber(9)); 

// Anonumous fun
var evenNumber=function (num) {
    return num % 2 === 0;
}
console.log(evenNumber(8)); 
console.log(evenNumber(9)); 



// named fun
function square(num) {
    return num * num;
}
console.log(square(5)); 
 

// first class fun
var multiple=function square(num) {
    return num * num;
}
console.log(multiple(5)); 

// Anonymous  fun
var multiple=function (num) {
    return num * num;
}
console.log(multiple(5)); 








// named fun
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hello")); 


// first class fun
var convert=function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(convert("hello")); 



// Anonymous class fun
var convert=function (str) {
    return str.toUpperCase();
}
console.log(convert("hello")); 



// named fun
function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maxOfThree(10, 20, 15)); 

// first class fun
var maximum=function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maximum(10, 20, 15)); 

// Anonymous fun
var maximum=function maxOfThree(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(maximum(10, 20, 15)); 




// named fun
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); // 

// first class fun
var factor=function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factor(5)); // Output: 120

// Anonymous fun
var factor=function (num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factor(5)); // Output: 120





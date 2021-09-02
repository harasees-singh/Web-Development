// node js is a runtime environment for javascript
// it is not a framework
// it is fundamentally the v8 engine embedded in cpp code

// node js applications are asynchronous out of the box
// that is a single thread allocated to handle a request doesn't sit and wait while the request
// is getting processed or some data base is being enquired; it can be used to handle other server requests simultanueously.
// node applications are ideal for i/o intensive apps.
// should not be used for cpu intensive apps because of single threaded nature.

// Node Module System

// console object is a global object

// setTimeout(); 
// clearTimeout();

// setInterval();
// clearInterval();

// window.console.log() works the same as console.log()
// all these objects belong to the window object
// we don't have window in node; we have global instead.

var message = '';

// console.log(global.message);        // gives undefined; because message is local to app.js

// console.log(module);

// const logger = require('./logger');

// logger.log('message');

function make_func(){

    return function (a, b){console.log(a + b);}
}

let new_func = make_func();

console.log(new_func(3, 4));

numbers = [1, 2, 3, 4, 5];

function print(element){

    console.log(element);
}
// array callback method
numbers.forEach(print);


const doubles = numbers.map(function (ele){

    return ele*2;
})

console.log(doubles);

// arrow functions

const add = (x, y) => {return x + y;}

// console.log(add(4, 5));
const square = x => {return x*x;}


console.log(square(3));

const rolldie = () => {console.log(Math.floor(Math.random()*6 + 1));}

rolldie();

// replace {} with () for implicit return 

const rolldieImplicitReturn = () => (Math.floor(Math.random()*6 + 1))

// works with arrow functions only

// further shortening code;

const hue = (a, b) => a + b;

// implicit returns work for one liners only

numbers.map(function (ele) {return 2*ele;})

// this is equivalent to 

numbers.map(ele => {return 2*ele})

const something = numbers.map(ele => 3*ele)

console.log(something)

// setTimeout and setInterval

setTimeout(() => (console.log("u waited for 3 secs to see this")), 3000)

const id = setInterval(() => {console.log(Math.random())}, 500)

clearInterval(id) // to stop the infinite printing 

const holywater = numbers.filter(n => n&1)

const stayaway = numbers.filter(n => n==1)

const somethingWeird = numbers.every(n => n > 2)    // returns ture or false

console.log([4, 5, 8, 4, 5, 4, 1].reduce((accumulator, currentval) => accumulator + currentval))

console.log([1, 4, -7, 8, 5, 2, 0].reduce((minima, curr) => {

    if(minima < curr) {return minima;}

    return curr;
}))                                                                              

// this keyword behaves differently for regular and arrow functions

console.log(..."helllo")// works with all iterables

console.log(...numbers)

const a = {
    assortment : 5,

    age : 45,

    key : "value"
};

const b = {

    class : "outclass",

    holy : "water"
};
// learning about spread
console.log({...a, ...b, id : 98, ...[12, 2, 2, 7]});

// rest params

function sum(...nums){

    return nums.reduce((total, ele) => total+ele)
}

console.log(sum(3, 4, 6, 7, 7));

// destructuring arrays

const scores = [3, 4, 5, 7, 8, 9];

const [gold, silver, bronze, ...everyoneElse] = scores;

// destructuring objects

const user = {

    email : 'haraseessingh.btcse20@pec.edu.in',
    password : 'wont tell u this',
    lastname : 'singh'
}

const {email, password} = user;














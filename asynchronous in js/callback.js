// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

function number(sum) {
    console.log("two number of subtrection", sum);

}

function totalsumofnumber(a, b, number) {
    let sum = a+b
    number(sum)
}

// const number = (sum) => {
//     console.log("two number of subtrection", sum);
// };

// const totalsumofnumber = (a, b, number) => {
//     let sum = a + b;
//     number(sum);
// };


totalsumofnumber(10, 23, number)
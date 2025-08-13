function outer() {
    let a = 0;
    return function inner() {
        a++;
        return a;
    }
}

const num = outer();

console.log(num());
console.log(num());
console.log(num());
console.log(num());

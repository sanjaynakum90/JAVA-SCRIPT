// let fruits = ["mango", "apple", "banana","pie"]

// for(let items of fruits){
//     console.log(items);
// }

let code = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let prev = undefined;
for (let num of code) {
    if (prev !== undefined) {
        let sum = prev + num;
        console.log(sum);
    }
    prev = num;
}

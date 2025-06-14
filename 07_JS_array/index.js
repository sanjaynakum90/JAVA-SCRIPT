

// let arr = new Array();



// arr[0] = 20;
// arr[1] = 30;

// arr.push(40)
// arr.push(50)


// arr.pop()
// console.log(arr)

let nums = [11,22,33,44,55,66]

// nums.shift()

// nums.unshift(99)

// let check = nums.every(odd)

// function odd(ele){
//     return ele%2 == 0
// }
// nums.length()
let check = nums.every((ele) => ele%2 == 0)
console.log(check)


let evNum = nums.some((n)=> n%2 ==0)

console.log(evNum)


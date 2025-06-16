

let arr = [1,2,3,4,5]

let c =[]


// STEP 1
// arr.forEach(cube)
// function cube(n){
//     c.push(n*n*n)
// }

// STEP 2
// arr.forEach(function(n){
//     c.push(n*n*n)
// })

// STEP 3
// arr.forEach((n)=>{
//     c.push(n*n*n)
// })

// STEP 4

arr.forEach((n)=> c.push(n*n*n))

console.log(c)
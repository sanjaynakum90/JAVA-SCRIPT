let data = ["one", "two", "three", "four", "five", 11, 22]



let chunk = data.slice(1, 4)


// let revchunk = data.slice(-4, -1)
console.log(chunk)
console.log(data)
// console.log(revchunk)

let cut = data.splice(1,3)

console.log(cut)

let revCut = data.splice(-2, -1)

console.log(cut)
console.log(data)
console.log(revCut)
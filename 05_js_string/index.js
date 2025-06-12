

let str = new String("krish")

let passkey = "krish@123"

let str1 = "sahani"

let quote = "wise man live wise life...!"

let pass = "  naming  "


// for(let s of str1)
// {
//     console.log(s)
// }


let f1 = str1.charAt(3)

let f2  = str1.indexOf("h")

let f3 = passkey.includes("$" || "#")

let substr = quote.substring(quote.length-8, quote.length-1)

let newQuote = quote.replaceAll("wise", "good")
 newQuote = quote.replaceAll(" ", "-")

console.log(f1)
console.log(f2) 
console.log(f3) 
console.log(str.toLocaleUpperCase())
console.log(substr)

console.log(pass.trim())
console.log(newQuote)



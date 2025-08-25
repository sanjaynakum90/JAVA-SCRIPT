let text = "sanjay nakum"

console.log("----------------------------------------------------------------");

console.log("finding match in string", text.match("na"));

console.log("not finding match in string :", text.match("ac"));

console.log("----------------------------------------------------------------");

console.log("repeating the string :", text.repeat(2));

console.log("----------------------------------------------------------------");


// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("replacing hello to hi :", text.replace("sanjay", "hii"));
console.log("----------------------------------------------------------------");


// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("replacing l to L in all syntax :", text.replaceAll("s", "h"));
console.log("----------------------------------------------------------------");


// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match

console.log("searching l in text :", text.search("s"));
console.log("----------------------------------------------------------------");

//here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>", text.indexOf("n", 6));
console.log("----------------------------------------------------------------");



console.log("text example", text); // sanjay nakum

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 5));

console.log("slice OP", text.slice(3, 8));

console.log("slice OP :", text.slice(-1));
console.log("----------------------------------------------------------------");

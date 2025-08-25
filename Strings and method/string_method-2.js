let text = "sanjay nakum";

//  split() methods ==> Splits a string into an array of substrings

console.log("split string into array with space added ", text.split(" "));

console.log("split string into array without space", text.split(""));

console.log("split string with o", text.split("s")); // will remove specified value in text and return string

// startsWith() methods ==> startswith method whether a string begins with specified characters

console.log("startswith method", text.startsWith("sanjay"));

console.log("startswith method", text.startsWith("nakum"));

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

// The substring() method extracts characters from start to end (exclusive).

// The substring() method does not change the original string.

// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

// Start or end values less than 0, are treated as 0

console.log("substring example", text.substring(2));

console.log("substring op =>", text.substring(1, 4));

console.log("substring op =>", text.substring(-1)); // return full text

// tolowerCase() ==> toLowerCase()	Returns a string converted to lowercase letters

console.log("lowercase op =>", text.toLowerCase());

// toupperCase() ==> Returns a string converted to uppercase letters

console.log("upper case op =>", text.toUpperCase());

// trim()	Returns a string with removed whitespace

let trimTextExample = "         sanjay               ";

console.log("length op text for trim =>", trimTextExample.length);

console.log(
    "whitespace removed and then after length of string =>",
    trimTextExample.trim().length
);

// we can trim from start and end using trim.start() and trim.end() methods

// example

console.log(
    "removing whitespaces from starting part only and then after length of string =>",
    trimTextExample.trimStart().length
);

// trim.end() example

console.log(
    "removing whitespaces from ending part only and then after length of string =>",
    trimTextExample.trimEnd().length
);
// && AND --> 2 condition -> true
// || OR  -> 1  condition ->true
// ! NOT -> reverse

// &&
let age = false;

let hasLicense = false;

if (age && hasLicense) {
    console.log("you can drive");
}

// OR

if (age || hasLicense) {
    console.log("you can drive");
}

// NOT

if (!hasLicense) {
    console.log("you can  drive");
}
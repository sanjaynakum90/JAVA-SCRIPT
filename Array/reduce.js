// JavaScript reduce() Method
// This method uses a reducer function that reduces the results into a single output.

// Example: In this example, we will add all the values of the array and return a single output using the reduce() function.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("number array : " + numberArray);

const sumOfNumbers = numberArray.reduce((accumulator, element) => {
    return accumulator + element;
});

console.log("sumOfNumbers : " + sumOfNumbers);

// another example finding with for loop

function findingMax(numberArray) {
    let max = 0;

    for (let i = 0; i < numberArray.length; i++) {
        max = Math.max(numberArray[i]);
    }
    console.log("max number in number array : " + max);
}

findingMax(numberArray);

// with reduce method

const maxNum = numberArray.reduce((accumulator, current) =>
    Math.max(accumulator, current)
);

console.log("maxNum : " + maxNum);

// another example

const personDetails = [
    { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
    {
        name: "Emily Davis",
        age: 45,
        city: "Los Angeles",
        profession: "Graphic Designer",
    },
    { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
    { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
    {
        name: "David Martinez",
        age: 38,
        city: "San Francisco",
        profession: "Developer",
    },
];

// suppose we want to find age of a person with total number of people in personDetails array of object how can we ??

let similarAgeNumber = personDetails.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log("similarAgeNumber: ", similarAgeNumber);

// another example

const personDetails2 = [
    { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
    {
        name: "Emily Davis",
        age: 45,
        city: "Los Angeles",
        profession: "Graphic Designer",
    },
    { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
    { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
    {
        name: "David Martinez",
        age: 38,
        city: "San Francisco",
        profession: "Developer",
    },
];

// suppose we want to filter out people which age is greater than 40 and their first name  using reduce method

const personAge = personDetails2.reduce(function (acc, curr) {
    if (curr.age > 40) {
        acc.push(curr.name);
    }

    return acc;
}, []);

console.log("personAge name which age is greater than 40: ", personAge);
// ?

// The ?. operator safely accesses nested properties of an object without throwing an error if a property is undefined or null.

let person = {
  name: "xyz",
  address: {
    city: "ABCD",
  },
};

console.log(person.address?.city);

console.log(person?.profile?.email);
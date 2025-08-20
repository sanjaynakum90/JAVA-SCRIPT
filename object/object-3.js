
//  creating objects using class constructor

class personDetails {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new personDetails("sanjay", 24, "full stack webdeveloper");

console.log("person details: ", person);

console.log("--------------------------------------------------------------");

// creating one more  object with different values using object literals

const studentsDetails = {
  totalStudents: 500,
  exam: "common entrance test",
  block: "A-d",
};

console.log("--------------------------------------------------------------");

// now merging two objects into one object

const allDetails = { ...person, ...studentsDetails };

console.log("allDetails: ", allDetails);

console.log("--------------------------------------------------------------");

// object length

console.log("allDetails length: ", Object.keys(allDetails).length);

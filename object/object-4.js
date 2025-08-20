
// In JavaScript, there are two kinds of object properties:

// Data properties
// Accessor properties

const student = {
  firstName: "sanjay",
};

// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

// get method example

console.log("--------------------------------------------------------------");

const studentDetails = {
  name: "sanjay",
  age: 24,

  get studentAge() {
    return this.age;
  },
};

console.log("student age is ", studentDetails.studentAge);

console.log("--------------------------------------------------------------");

// another example

const carDetail = {
  company: "porsche",
  color: "Blue",

  get carCompany() {
    return this.company;
  },
};

console.log("car company is ", carDetail.carCompany);

console.log("color is ", carDetail);

console.log("--------------------------------------------------------------");

// set method example

const person = {
  name: "sanjay",
  age: 24,

  set person(job) {
    this.learn = "web devloper"
  },

  get person(){
    return this.age;
  }
};

console.log("Person details :",person);

console.log("--------------------------------------------------------------");

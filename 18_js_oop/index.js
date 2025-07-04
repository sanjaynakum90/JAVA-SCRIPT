

class Big{
    

       constructor(name, age, role){
            this.name = name
            this.age = age
            this.role = role
       }
    
       updateProfile(name){
        this.name = name;
       }
  
   getProfile(){
        console.log("Name: "+ this.name)
        console.log("age: "+ this.age)
        console.log("role: "+ this.role)
    }
}

class Small extends Big{
  
    constructor(){
        super()
        this.course = "fsd"
        this.duration = 15
    }

    getAlldetails(){
        //   console.log("Name: "+this.name)
        console.log("course: "+ this.course)
        console.log("duration: "+ this.duration)
    }

       updateProfile(course){
        this.course = course;
       }

    getAlldetails(time, batch){
        console.log(time, batch)
    }
}


let b1 = new Big("yash", 18, "frontend")
let b2 = new Big("krisha", 20, "full stack")


b1.updateProfile("amit")
b1.getProfile()

console.log("-------------------")

b2.getProfile()
console.log("-------------------")

let s1 = new Small()
s1.getAlldetails()

s1.getAlldetails(20, "fsd2")

// console.log(b1.name)

console.log(b1)




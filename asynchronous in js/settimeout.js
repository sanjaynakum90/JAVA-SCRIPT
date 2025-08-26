// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.


const number = (a,b) =>{
    console.log("number function will print sum after 6 second");
    setTimeout(() => {
        let sum = a+b
        console.log(sum);
        
    },6000);
    
}

number(10,20)


const currentyear = () =>{
    console.log("checking current year");

    setTimeout(() =>{
        let year = new Date().getFullYear();
        console.log("current year :",year);
    })
    
}

currentyear()
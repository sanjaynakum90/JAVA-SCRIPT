// The setInterval() method repeats a block of code at every given timing event.

// The commonly used syntax of JavaScript setInterval is:

// setInterval(function, milliseconds);
// Its parameters are:
// function - a function containing a block of code
// milliseconds - the time interval between the execution of the function
// The setInterval() method returns an intervalID which is a positive integer.


function currenttime() {
    let time = new Date().toLocaleTimeString();

    console.log("current time :", time);

}

const interval = setInterval(currenttime, 1000);

setTimeout(() => {
    clearInterval(interval)
    console.log("time stoped");
}, 10000)
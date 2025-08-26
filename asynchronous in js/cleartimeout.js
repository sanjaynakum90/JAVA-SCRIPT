// in setTimeOut the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.
let stop;

const currenttime = () => {
    let dateandtime = new Date();
    let time = dateandtime.toLocaleTimeString();

    console.log(time);
    stop = setTimeout(currenttime, 3000);
}


currenttime();


setTimeout(() => {
    clearTimeout(stop);
    console.log("Stopped showing time.");
}, 10000);
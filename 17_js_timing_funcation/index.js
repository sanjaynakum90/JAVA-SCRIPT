
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")


// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())


setInterval(function () {
    let d = new Date();
    hour.textContent = d.getHours()
    minute.textContent = d.getMinutes()
    second.textContent = d.getSeconds()

}, 1000)

setInterval(function () {
    minute.classList += " minuteAnim";

}, 60000)



// clock  developerment started

let timeNumber = document.querySelector(".timeNumber")
let aud = document.querySelector("#aud")
let clock = document.querySelector("#clock")

function startTimer() {
    setTimeout(function () {
        aud.play();
        clock.classList += " shake"

    }, timeNumber.value * 1000)
}


// clock  developerment started
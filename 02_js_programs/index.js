let cookies = document.getElementById("cookies")
let chips = document.getElementById("chips")
let milk = document.getElementById("milk")
let bread = document.getElementById("bread")


let cookies_qtn = document.getElementById("cookies_qtn")
let chips_qtn = document.getElementById("chips_qtn")
let milk_qtn = document.getElementById("milk_qtn")
let bread_qtn = document.getElementById("bread_qtn")

let total_qtn = document.getElementById("total_qtn")


let cookies_price = document.getElementById("cookies_price")
let chips_price = document.getElementById("chips_price")
let milk_price = document.getElementById("milk_price")
let bread_price = document.getElementById("bread_price")

let total_price = document.getElementById("total_price")





function bill(){

    cookies_qtn.innerHTML = "<b>" + cookies.value  +"</b>";
    cookies_price.innerText = cookies.value * 20;

    chips_qtn.innerHTML = "<b>" + chips.value  +"</b>";
    chips_price.innerText = chips.value * 10;

    milk_qtn.innerHTML = "<b>" + milk.value  +"</b>";
    milk_price.innerText = milk.value * 34;

    bread_qtn.innerHTML = "<b>" + bread.value  +"</b>";
    bread_price.innerText = bread.value * 43;

    total_qtn.innerText = Number(cookies.value) + chips.value + milk.value + bread.value;
    total_price.innerText = cookies.value * 20 + chips.value*10 + milk.value*34 + bread.value*43;
    

let d = new Date()

console.log(d.getMonth(), d.getDate(), d.getFullYear())




}
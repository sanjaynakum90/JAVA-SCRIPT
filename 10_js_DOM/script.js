// let click2 =document.getElementById("click2")
// console.log(click2)
// console.log(click2.innerHTML)

// let para = document.getElementsByTagName("p")



// for (let i = 0; i < para.length; i++) {
//     console.log(arr[i])
// }

// console.log(para)

let qcl1 = document.querySelector("#click2")
console.log(qcl1)

let qcl2 = document.querySelector(".btn")
console.log(qcl2)

let qcl3 = document.querySelector("p")
console.log(qcl3.innerText)



let qclAll = document.querySelectorAll("p")

console.log(qclAll)


let dom = document.querySelector(".row")

console.log(dom)
console.log(dom.children)
console.log(dom.children[0])
console.log(dom.children[0].querySelector(".card"))



let evt = document.querySelector("#event")

// evt.onclock = hello;

// function hello(){
//      // BOM 
//      window.alert("alert message")
//  }

// evt.onclick = function(){
//     window.alert("alert message")
// }

evt.addEventListener("click", function () {
    evt.classList = "btn btn-primary"

    document.querySelector("body").style.background = "gray";
    let row = document.querySelector(".row").classList += " g-3 ";
    // let row = document.querySelector(".row").style.background = "orange";
})


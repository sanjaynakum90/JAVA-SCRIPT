


let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")

let sp = ["&", "@", "$", "#", "%", "*", "^"]

//  let ans = sp.some((n) => password.ariaValueMax.includes(n))
//  console.log(ans)

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(password.value.length < 8)
    {
        alert("password length must have minmum 8 letters")
    }
    else if(!sp.some((n) => password.value.includes(n)))
    {
        alert("must have special characters")
    }
    else if(!password.value.split("").some((n)=> n.toUpperCase() == n && n != n.toLowerCase())){

        alert("must have atleast one capital letter")
    }
    else{
        console.log(email.value)
    console.log(password.value) 
    }
   
})



// let link = document.getElementById("link")

// link.addEventListener("click", function(e){
//     e.preventDefault()
// })

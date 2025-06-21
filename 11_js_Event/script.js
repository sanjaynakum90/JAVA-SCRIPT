function message(){
   window.alert("Login successfull...!")

   window.location.href="https://www.amazon.in/"
}


let popup = document.querySelector("#popup");
let input = document.querySelector("#input");


popup.addEventListener("mouseleave", function(){
    window.alert("hello everyone")
})




let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let passkey = document.querySelector("#passkey")

submit.addEventListener("click", function(){

     if(email.value != "sanjay@gmail.com" && password.value != "sanjay123")
    {
        window.alert("⚠️ wrong Crediential..1")
        email.classList += " border border-danger";
        password.classList += " border border-danger"
    }
   else if(email.value !="sanjay@gmail.com")
    {
        window.alert("📧 Wrong Email")
           email.classList += " border border-danger";
    }
    else if(password.value != "sanjay123")
    {
        window.alert("🔑 Wrong Password")
         password.classList += " border border-danger"
    }
    else{
        window.alert("✅ Login Successfull...!")
        window.location.href="https://alishanshaikh-portfolio-website.netlify.app"
    }
})


passkey.onclick = function(){
    if(password.type=="password")
        {
            password.type="text"
            passkey.children[0].className = "bi bi-eye-slash"
        }
        else{
            password.type="password"
            passkey.children[0].className = "bi bi-eye"

        }
}

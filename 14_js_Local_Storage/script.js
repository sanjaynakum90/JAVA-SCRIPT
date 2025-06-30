

let data = JSON.parse(localStorage.getItem("data")) || []

let pic = document.querySelector("#pic");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let submit = document.querySelector("#submit");
let allUsers = document.querySelector("#allUsers");


submit.addEventListener("click", function () {
    let obj = {
        pic: pic.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
    }

    data.push(obj)

    let strData = JSON.stringify(data)
    localStorage.setItem("data", strData)

    showUsers()
})


function showUsers() {
    let strData = localStorage.getItem("data")
    let data = JSON.parse(strData)

    allUsers.innerHTML = "";
    data.map((ele) => {
        allUsers.innerHTML += `
         <div class="shadow-md rounded-lg p-3 flex flex-col gap-3 items-center">
                <img class="w-[60%] rounded-full shadow p-1" src="${ele.pic}" alt="">
                <h4>${ele.name}</h4>
                <h4>${ele.email}</h4>
                <h4>${ele.phone}</h4>
                  <button id="submit" class="p-1 bg-amber-500 hover:bg-amber-600 text-white mx-auto shadow rounded-md w-[200px]">Follow</button>
            </div>
       `;
    })

}

showUsers()

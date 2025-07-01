

let data = JSON.parse(localStorage.getItem("data")) || []

let userId = document.querySelector("#id");
let pic = document.querySelector("#pic");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let submit = document.querySelector("#submit");
let allUsers = document.querySelector("#allUsers");

submit.addEventListener("click", function () {




    if (pic.value == "" ||
        name.value == "" ||
        email.value == "" ||
        phone.value == "") {
        window.alert("fill all details")
    } else {


        if (userId.value) {
            data = data.map((ele) => {
                if (ele.id == userId.value) {
                    ele.pic = pic.value;
                    ele.name = name.value;
                    ele.email = email.value;
                    ele.phone = phone.value;
                }
                return ele;
            })
        } else {
            let obj = {
                id: Math.round((Math.random() + 1) * 100),
                pic: pic.value,
                name: name.value,
                email: email.value,
                phone: phone.value,
            }

            data.push(obj)

        }

        let strData = JSON.stringify(data)
        localStorage.setItem("data", strData)
        id.value = ""
        pic.value = ""
        name.value = ""
        email.value = ""
        phone.value = ""

        showUsers()
    }


})


function editUser(id) {
    let user = data.find((ele) => ele.id == id)
    console.log(user)

    userId.value = user.id
    pic.value = user.pic
    name.value = user.name
    email.value = user.email
    phone.value = user.phone



    submit.className = submit.className.replace("slate", "amber")
    submit.textContent = "Update"
}


function deleteUser(id) {

    data = data.filter((ele) => ele.id != id);

    let strData = JSON.stringify(data)
    localStorage.setItem("data", strData)

    showUsers();

}


function showUsers() {
    let strData = localStorage.getItem("data")
    let data = JSON.parse(strData)

    allUsers.innerHTML = "";
    data.map((ele) => {
        allUsers.innerHTML += `
         <div class="shadow-md group rounded-lg p-3 flex flex-col gap-3 items-center">
                <img class="w-[60%] rounded-full shadow p-1" src="${ele.pic}" alt="">
                <h4>${ele.name}</h4>
                <h4>${ele.email}</h4>
                <h4>${ele.phone}</h4>
                  <button id="submit" class="p-1 bg-amber-500 hover:bg-amber-600 text-white mx-auto shadow rounded-md w-[200px]">Follow</button>
                <div class="flex gap-3 invisible group-hover:visible">
                  <button onclick="editUser(${ele.id})" class="bg-gray-100 hover:bg-gray-300 rounded-full w-7 h-7">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button onclick="deleteUser(${ele.id})" class="bg-gray-100 hover:bg-gray-300 rounded-full w-7 h-7">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button class="bg-gray-100 hover:bg-gray-300 rounded-full w-7 h-7">
                   <i class="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
             </div>
       `;
    })

}

showUsers()

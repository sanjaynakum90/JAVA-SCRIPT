





// data.map((ele) => console.log(ele.first_name + " - " + ele.email +" - " + ele.phone))


let tbody = document.querySelector("#tbody")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let form = document.querySelector("#form")
let total = document.querySelector("#total")
let userId = document.querySelector("#id")
let submitbtn = document.querySelector("#submitbtn")

let alldata = []

console.log(tbody)


form.onsubmit = function(e){

    e.preventDefault()
    
    if(userId.value){

       alldata = alldata.map((ele)=>{
            if(ele.id == userId.value){
                ele.first_name = name.value
                ele.email = email.value
                ele.phone = phone.value
            }
            return ele;
        })

        showData(alldata)

    } else {

        let obj = {
            id: alldata.length+1,
            first_name:name.value,
            email:email.value,
            phone:phone.value
        }
        alldata.push(obj);
        showData(alldata)
    }


        userId.value="",
        name.value="",
        email.value = "",
        phone.value = ""

        submitbtn.innerText="Submit"
        submitbtn.className ="btn btn-success"

}





function deleteData(id){
   alldata = alldata.filter((ele) => ele.id != id)
    showData(alldata)
}


function editData(id)
{
    console.log(id)

    let newObj = alldata.find((ele) => ele.id == id);
    console.log(newObj)

        userId.value=newObj.id,
        name.value=newObj.first_name,
        email.value = newObj.email,
        phone.value = newObj.phone

        submitbtn.innerText="Edit"
        submitbtn.className ="btn btn-warning"
}







function showData(newData){

    tbody.innerHTML = "";
    newData.map(function(ele){
        let newTr =`<tr>
                        <td>${ele.id}</td>
                        <td>${ele.first_name}</td>
                        <td>${ele.email}</td>
                        <td>${ele.phone}</td>
                        <td>
                            <button onclick="deleteData(${ele.id})" class="btn btn-danger btn-sm">🗑️</button>
                            <button onclick="editData(${ele.id})" class="btn btn-warning btn-sm">✏️</button>
                        </td>
                    </tr>`
        tbody.innerHTML += newTr;
    })

    total.innerText = newData.length
}

showData(alldata)
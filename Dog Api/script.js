const dogApi = fetch("https://dog.ceo/api/breeds/image/random");

// dogapi
//     .then((res) => res.json())
//     .then((data) => {
//         document.getElementById("dog").src = data.message
//     })

// ---------------------------------------------------------------

// async function fetchData() {
//   const res = await dogApi;

//   const data = await res.json();

//   document.getElementById("dog").src = data.message;
// }

// fetchData();

// ---------------------------------------------------------------

// const fetchdog = new Promise((reject,resolve)=>{
//     if(!dogApi.status == 200){
//         return console.log("server is not respond");
//     }
//     setTimeout(() => {
//         resolve(dogapi);
//     },2000);
// })

// fetchData
// .then((res)=> res.json())
// .then((data)=> document.getElementById("dog").src = data.message)
// .catch((err)=>{
//     console.log(err.message);  
// })
// ---------------------------------------------------------------

async function fetchData() {
    try {
        const res = await dogApi;

        const data = await res.json();

        document.getElementById("dog").src = data.message;
    } catch (error) {
        console.log(error.message);
    }
}

fetchData();
// ---------------------------------------------------------------
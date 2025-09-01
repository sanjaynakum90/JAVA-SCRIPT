// Functions running in parallel with other functions are called asynchronous.

// Asynchronous functions take some time to complete.

// With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks in parallel.

// However, asynchronous programs can be difficult to write and debug.

// Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, asynchronous programming is solved using Promises and async-await.

// An async function always returns a Promise.

// JavaScript is a synchronous and single-threaded programming language.

// But you can perform asynchronous programming using callbacks, Promises, and async-await.

// async-await allows you to write asynchronous code in a synchronous manner.

// This makes the code more readable and easier to maintain.


const api = fetch("https://jsonplaceholder.typicode.com/users");

// const users = new Promise((resolve, reject) => {
//   if (api.length === 0) {
//     reject("no data found");
//   } else {
//     setTimeout(() => {
//       resolve(api);
//     }, 5000);
//   }
// });

// users
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log("it will print immediately");

async function fetchData() {
  try {
    const res = await api;

    const data = await res.json();

    console.log(data);

    console.log("it will wait");
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();

const data = async () => { };
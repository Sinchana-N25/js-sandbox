// Async/Await and Promises
// Tasks:
// - Created a basic promise and consumed it with .then() and .catch()
// - Used async/await to fetch data from an external API (dummyjson.com)
// - Handled fetch errors with try-catch and simulated loading delay

function getSomeData() {
  let error = false;

  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => resolve("Data Fetched!"), 2000);
    } else {
      reject("An error happened along the way.");
    }
  });
}

getSomeData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getUser() {
  let response = await fetch(
    "https://dummyjson.com/users?limit=5&skip=10&select=firstName,age"
  );
  if (response.ok === false) {
    throw new Error("Something went wrong. 😦");
  }
  let data = await response.json();
  setTimeout(() => console.log(data), 1000);
}

getUser();

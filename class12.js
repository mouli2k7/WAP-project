// 1. A JavaScript Object (Live in memory)
const user = {
    name: "Rahul",
    age: 25
};

// 2. A JSON String (Text for transmission)
// Notice the quotes around "name" and "age"
const jsonString = '{"name": "Rahul", "age": 25}';



// conversion tools
// const data = JSON.parse(jsonString); // String -> Object
// console.log(data)
// const text = JSON.stringify(user);   // Object -> String
// console.log(text)



const url = "https://dummyjson.com/products/1"


// fetch(url).then((response)=>{
//     if(!response.ok){
//         throw new Error('Data not found')
//     }
//     return response.json()
// })
// .then((data)=>{
//      console.log(data.title)
//      console.log(data.brand)
// })
// .catch((error)=>{
//      console.log(error)
// })

async function fetchData(api){
    try{
        let response = await fetch(api)
        if(!response.ok){
         throw new Error('Data not found')
     }
    let data = await response.json()
         console.log(data.title)
         console.log(data.brand)
    }
    catch(err){
        console.log(err)
    }

}
// fetchData(url)















// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => {
// return response.json();
//   })
//   .then(data => {
// console.log(data.name);// top-level field
// console.log(data.address.city);// nested field
// console.log(data.company.name);// nested field
//   })
//   .catch(error => {
// console.error("Error:", error);
//   });





// The Code Example (The "Dog Facts" App)
// We will build a tiny app that fetches a random fact about dogs.

const API_URL = "https://dogapi.dog/api/v2/facts";







function getDogFact(url) {
    console.log("1. Calling the waiter... (Fetching)");

    // A. Make the Request
    fetch(url)
        .then((response) => {
            // B. Check if the Kitchen is okay (Status 200)
            if (!response.ok) {
                // This error will skip the next .then() and jump to .catch()
                throw new Error("Kitchen is closed! (API Error)");
            }

            // C. Read the Order Ticket (Parse JSON)
            // We return this Promise so the next .then() waits for it
            return response.json();
        })
        .then((data) => {
            // D. Use the Data
            console.log("2. Order Received:", data);

            // Extract the specific fact text
            const fact = data.data[0].attributes.body;
            console.log("Fact:", fact);
        })
        .catch((error) => {
            // Handles network errors OR the "Kitchen is closed" error
            console.log("3. Something went wrong:", error.message);
        });
}

// Run it
// getDogFact(API_URL);







// Task: "The GitHub User Finder" Ask the students to modify the code to fetch data from GitHub's public API.

// API URL: https://api.github.com/users/YOUR_USERNAME

// Goal: Print the user's name, bio, and public_repos count.






function getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    // 1. Send the request
    fetch(url)
        .then((response) => {
            // 2. Check if the user exists (Status 200)
            if (!response.ok) {
                throw new Error(`User not found: ${response.status}`);
            }
            // 3. Parse the JSON body (Returns a Promise)
            return response.json();
        })
        .then((user) => {
            // 4. Use the data
            console.log(`Name: ${user.name}`);
            console.log(`Bio: ${user.bio || "No bio available"}`);
            console.log(`Public Repos: ${user.public_repos}`);
        })
        .catch((error) => {
            // 5. Handle any error (Network failure OR User not found)
            console.error("Error:", error.message);
        });
}
// Usage
getUser("facebook");
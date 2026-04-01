const url_3 = "https://jsonplaceholder.typicode.com/users";

fetch(url_3)
  .then(response => response.json())
  .then(users => {
    const filteredUsers = users.filter(
      user => user.address.city === "South Christy"
    );

    console.log("Users from South Christy:");
    filteredUsers.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error("Error fetching users:", error);
  });
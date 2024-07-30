let userName = localStorage.getItem("loggedInUserName")
let userEmail = localStorage.getItem("loggedInUserEmail")

let profileName = document.getElementById("userName")
let profileEmail = document.getElementById("userEmail")

profileName.textContent = `UserName : ${userName}`;
profileEmail.textContent = `Email : ${userEmail}`;

console.log(userName);
console.log(userEmail);


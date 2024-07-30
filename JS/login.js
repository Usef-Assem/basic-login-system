document.getElementById("form-login").addEventListener("submit", function(event){
    event.preventDefault();
    
    let emailLogin = document.getElementById("Email-login").value;
    let passLogin = document.getElementById("pass-login").value;
    let UsersData = JSON.parse(localStorage.getItem("users")) || [];
    let userExist = false;
    let userName = "";
    let userEmail = ""

    for (let i = 0; i < UsersData.length; i++) {
        if(UsersData[i].Email === emailLogin && UsersData[i].password === passLogin){
            userExist = true;
            userName = UsersData[i].userName;
            userEmail = UsersData[i].Email;
            break;
        }
    }
   
    let feedback = document.getElementById("login-feedback");
    if(userExist){
        feedback.textContent = "Login successful!";
        feedback.style.color = "green";
        localStorage.setItem("loggedInUserName", userName);  // Store the userName in localStorage
        localStorage.setItem("loggedInUserEmail", userEmail);  // Store the userEmail in localStorage
        location.href = "../Home.html";
    } else {
        feedback.textContent = "Login failed! Incorrect email or password.";
        feedback.style.color = "red";
    }
});

// Get the button element
let submitButton = document.getElementById("sub-button"); // register
let loginButton = document.getElementById("login-button") // login

// Validation functions
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9 _-]{4,16}$/;
    return usernameRegex.test(username);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Add event listener to the button
submitButton.addEventListener("click", function() {
    // Get the values of the input fields
    let userName = document.getElementById("user").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("pass").value;

    // Validate the input values
    let isUsernameValid = validateUsername(userName);
    let isEmailValid = validateEmail(Email);
    let isPasswordValid = validatePassword(password);

    // Clear previous error messages
    document.getElementById("username-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Display error messages if validation fails
    if (isUsernameValid && isEmailValid && isPasswordValid) {
        let users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve the existing data from local storage
        users.push({ userName, Email, password });
        localStorage.setItem("users", JSON.stringify(users));
        location.href = "/index.html"

    } else {
        if (!isUsernameValid) {
            document.getElementById("username-error").textContent = "Invalid Username. Must be 4-16 characters long and can include letters, numbers, and underscores.";
        }
        if (!isEmailValid) {
            document.getElementById("email-error").textContent = "Invalid Email format.";
        }
        if (!isPasswordValid) {
            document.getElementById("password-error").textContent = "Invalid Password. Must be at least 8 characters long with one uppercase letter, one lowercase letter, and one digit.";
        }
    }
});







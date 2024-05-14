document.addEventListener("DOMContentLoaded", function() {
document.body.classList.add("loaded");

document.getElementById("username").value = "";
document.getElementById("password").value = "";


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");


    if (username === "user" && password === "password") {

        alert("Login successful!");
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});
});

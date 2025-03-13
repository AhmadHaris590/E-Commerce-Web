document.getElementById("loginBtn").addEventListener("click", function () {
    // Get input values
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get error message elements
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validation
    if (email === "") {
        emailError.textContent = "Email field is empty!";
        return;
    } else if (!email.includes("@gmail.com")) {
        emailError.textContent = "Email must be a Gmail account!";
        return;
    }

    if (password === "") {
        passwordError.textContent = "Password field is empty!";
        return;
    }else if(password.length < 8){
        passwordError.textContent="Password must contain 8 or more digit!";
        return;
    }

    // Redirect to index page if everything is fine
    window.location.href = "index.html";
});
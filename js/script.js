console.log("js connected");


// ==================================================
// SIGN UP
// ==================================================

const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const city = document.getElementById("city");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const cityError = document.getElementById("cityError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


if (signupForm) {

    // ----------------------------------------------
    // SIGN UP SUBMIT
    // ----------------------------------------------

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        cityError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let isValid = true;


        // Full Name

        if (fullName.value.trim() === "") {

            nameError.textContent = "Full Name is required";
            isValid = false;

        }


        // Email

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            emailError.textContent = "Email is required";
            isValid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            emailError.textContent = "Please enter a valid email address";
            isValid = false;

        }


        // Phone Number

        const phonePattern = /^\d{10}$/;

        if (phoneNumber.value.trim() === "") {

            phoneError.textContent = "Phone Number is required";
            isValid = false;

        } else if (!phonePattern.test(phoneNumber.value.trim())) {

            phoneError.textContent =
                "Please enter a valid 10-digit phone number";

            isValid = false;

        }


        // City

        const cityPattern = /^[a-zA-Z\s]+$/;

        if (city.value.trim() === "") {

            cityError.textContent = "City is required";
            isValid = false;

        } else if (!cityPattern.test(city.value.trim())) {

            cityError.textContent = "Please enter a valid city name";
            isValid = false;

        }


        // Password

        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (password.value === "") {

            passwordError.textContent = "Password is required";
            isValid = false;

        } else if (!passwordPattern.test(password.value)) {

            passwordError.textContent =
                "Password must be at least 8 characters and contain letters and numbers";

            isValid = false;

        }


        // Confirm Password

        if (confirmPassword.value === "") {

            confirmPasswordError.textContent =
                "Please confirm your password";

            isValid = false;

        } else if (confirmPassword.value !== password.value) {

            confirmPasswordError.textContent =
                "Passwords do not match";

            isValid = false;

        }


        // Save user

        if (isValid) {

            const user = {

                fullName: fullName.value.trim(),

                email: email.value.trim().toLowerCase(),

                phoneNumber: phoneNumber.value.trim(),

                city: city.value.trim(),

                password: password.value

            };


            localStorage.setItem(
                "registeredUser",
                JSON.stringify(user)
            );


            alert("Account created successfully!");

            window.location.href = "./signIn.html";

        }

    });


    // ----------------------------------------------
    // FULL NAME REAL-TIME VALIDATION
    // ----------------------------------------------

    fullName.addEventListener("input", function() {

        if (fullName.value.trim() === "") {

            nameError.textContent = "Full Name is required";

            fullName.classList.remove("is-valid");
            fullName.classList.add("is-invalid");

        } else {

            nameError.textContent = "";

            fullName.classList.remove("is-invalid");
            fullName.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // EMAIL REAL-TIME VALIDATION
    // ----------------------------------------------

    email.addEventListener("input", function() {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            emailError.textContent = "Email is required";

            email.classList.remove("is-valid");
            email.classList.add("is-invalid");

        } else if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address";

            email.classList.remove("is-valid");
            email.classList.add("is-invalid");

        } else {

            emailError.textContent = "";

            email.classList.remove("is-invalid");
            email.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // PHONE REAL-TIME VALIDATION
    // ----------------------------------------------

    phoneNumber.addEventListener("input", function() {

        const phonePattern = /^\d{10}$/;

        if (phoneNumber.value.trim() === "") {

            phoneError.textContent = "Phone Number is required";

            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");

        } else if (!phonePattern.test(phoneNumber.value.trim())) {

            phoneError.textContent =
                "Please enter a valid 10-digit phone number";

            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");

        } else {

            phoneError.textContent = "";

            phoneNumber.classList.remove("is-invalid");
            phoneNumber.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // CITY REAL-TIME VALIDATION
    // ----------------------------------------------

    city.addEventListener("input", function() {

        const cityPattern = /^[a-zA-Z\s]+$/;

        if (city.value.trim() === "") {

            cityError.textContent = "City is required";

            city.classList.remove("is-valid");
            city.classList.add("is-invalid");

        } else if (!cityPattern.test(city.value.trim())) {

            cityError.textContent =
                "Please enter a valid city name";

            city.classList.remove("is-valid");
            city.classList.add("is-invalid");

        } else {

            cityError.textContent = "";

            city.classList.remove("is-invalid");
            city.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // PASSWORD REAL-TIME VALIDATION
    // ----------------------------------------------

    password.addEventListener("input", function() {

        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (password.value === "") {

            passwordError.textContent = "Password is required";

            password.classList.remove("is-valid");
            password.classList.add("is-invalid");

        } else if (!passwordPattern.test(password.value)) {

            passwordError.textContent =
                "Password must be at least 8 characters and contain letters and numbers";

            password.classList.remove("is-valid");
            password.classList.add("is-invalid");

        } else {

            passwordError.textContent = "";

            password.classList.remove("is-invalid");
            password.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // CONFIRM PASSWORD REAL-TIME VALIDATION
    // ----------------------------------------------

    confirmPassword.addEventListener("input", function() {

        if (confirmPassword.value === "") {

            confirmPasswordError.textContent =
                "Please confirm your password";

            confirmPassword.classList.remove("is-valid");
            confirmPassword.classList.add("is-invalid");

        } else if (confirmPassword.value !== password.value) {

            confirmPasswordError.textContent =
                "Passwords do not match";

            confirmPassword.classList.remove("is-valid");
            confirmPassword.classList.add("is-invalid");

        } else {

            confirmPasswordError.textContent = "";

            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");

        }

    });

}



// ==================================================
// SIGN IN
// ==================================================

const signinForm = document.getElementById("signinForm");


if (signinForm) {

    const signinEmail = document.getElementById("signinEmail");

    const signinPassword =
        document.getElementById("signinPassword");

    const signinEmailError =
        document.getElementById("signinEmailError");

    const signinPasswordError =
        document.getElementById("signinPasswordError");


    // ----------------------------------------------
    // SIGN IN SUBMIT
    // ----------------------------------------------

    signinForm.addEventListener("submit", function(event) {

        event.preventDefault();

        signinEmailError.textContent = "";
        signinPasswordError.textContent = "";

        let isValid = true;


        // Email validation

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (signinEmail.value.trim() === "") {

            signinEmailError.textContent =
                "Email is required";

            isValid = false;

        } else if (!emailPattern.test(signinEmail.value.trim())) {

            signinEmailError.textContent =
                "Please enter a valid email address";

            isValid = false;

        }


        // Password validation

        if (signinPassword.value === "") {

            signinPasswordError.textContent =
                "Password is required";

            isValid = false;

        }


        // Check registered user

        if (isValid) {

            const registeredUser =
                JSON.parse(
                    localStorage.getItem("registeredUser")
                );


            if (!registeredUser) {

                signinEmailError.textContent =
                    "No registered account found. Please sign up first.";

                return;

            }


            // Check email and password

            if (
                signinEmail.value.trim().toLowerCase() !==
                    registeredUser.email ||

                signinPassword.value !==
                    registeredUser.password
            ) {

                signinPasswordError.textContent =
                    "Incorrect email or password";

                return;

            }


            // Login successful

            alert("Sign in successful! Welcome back.");

            window.location.href = "./travelApp.html";

        }

    });


    // ----------------------------------------------
    // SIGN IN EMAIL REAL-TIME VALIDATION
    // ----------------------------------------------

    signinEmail.addEventListener("input", function() {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (signinEmail.value.trim() === "") {

            signinEmailError.textContent =
                "Email is required";

            signinEmail.classList.remove("is-valid");
            signinEmail.classList.add("is-invalid");

        } else if (!emailPattern.test(signinEmail.value.trim())) {

            signinEmailError.textContent =
                "Please enter a valid email address";

            signinEmail.classList.remove("is-valid");
            signinEmail.classList.add("is-invalid");

        } else {

            signinEmailError.textContent = "";

            signinEmail.classList.remove("is-invalid");
            signinEmail.classList.add("is-valid");

        }

    });


    // ----------------------------------------------
    // SIGN IN PASSWORD REAL-TIME VALIDATION
    // ----------------------------------------------

    signinPassword.addEventListener("input", function() {

        if (signinPassword.value === "") {

            signinPasswordError.textContent =
                "Password is required";

            signinPassword.classList.remove("is-valid");
            signinPassword.classList.add("is-invalid");

        } else {

            signinPasswordError.textContent = "";

            signinPassword.classList.remove("is-invalid");
            signinPassword.classList.add("is-valid");

        }

    });

}



// ==================================================
// SHOW / HIDE PASSWORD
// ==================================================

const toggleButtons =
    document.querySelectorAll(".toggle-password");


toggleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const input =
            document.getElementById(this.dataset.target);


        if (input.type === "password") {

            input.type = "text";

            this.textContent = "Hide";

        } else {

            input.type = "password";

            this.textContent = "Show";

        }

    });

});
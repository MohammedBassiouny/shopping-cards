import Popup from "./Popup.js";

const logInForm = document.querySelector("#loginForm")



    logInForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const email = document.getElementById("InputEmail").value.trim().toLowerCase();
        const password = document.getElementById("InputPassword").value.trim();
        
        console.log(email)
        const users = JSON.parse(localStorage.getItem("formData")) || [];
        // console.log(users)
    
        const user = users.find(user => user.email === email && user.passWord === password);

        if (user) {
            sessionStorage.setItem("status", JSON.stringify(true));
            sessionStorage.setItem("currentUser", JSON.stringify(user));
            Popup("You have successfully logged in!");
            window.location.href = '../index.html'; 
        } else {
            Popup("The email or password is incorrect!",'red',"white",'1000000');
        }
    });
    
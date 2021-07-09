const input = document.querySelectorAll(".inactive");
const show = document.querySelectorAll(".password_show");
const pass = document.querySelectorAll(".hide");

input.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.add("active");
    })
});

show.forEach(s => {
    s.addEventListener('click', () => {
        pass.forEach(p => {
            if (p.type === "password") {
                p.type = "text";
            } else {
                p.type = "password";
            }
        })
    })
});
// let loginOverlay = document.getElementById("login_container");

// Axios HTTP Requests and Responses 
let signUpButton = document.getElementById("signup_button");
signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    let url = "https://kidvacc.herokuapp.com/api/child/rest-auth/registration/";
    let signUpEmail = document.getElementById("signup_email").value;
    let signUsername = document.getElementById("signup_username").value;
    let signUpPassword1 = document.getElementById("signup_password1").value;
    let signUpPassword2 = document.getElementById("signup_password2").value;

    if (signUpPassword1 === signUpPassword2) {
        const parentInformation = {
            "username": signUsername,
            "email": signUpEmail,
            "password1": signUpPassword1,
            "password2": signUpPassword2
        };

        axios.post(url, parentInformation)
        .then( () => {
            window.location.href = "index.html"
            // loginOverlay.style.display = "flex"
        }, error => {
            alert(error)
        })
    } else{
        alert("Password Mismatch")
    }
    
    

});

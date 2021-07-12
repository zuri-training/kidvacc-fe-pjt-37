let loginPassword = document.getElementById("login_password");
let eyeIcon = document.getElementById("eye_icon");
let navBarBefore = document.querySelector(".before-login");
let navBarAfter = document.querySelector(".after-login");


eyeIcon.addEventListener("click", () => {

    if( ( eyeIcon.classList.contains("fa-eye-slash") ) && ( loginPassword.type === "password" ) ) {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye")
        loginPassword.type = "text"

    } else{
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        loginPassword.type = "password"
    }
});

// Axios HTTP Requests and Responses 
let loginButton = document.getElementById("submit_btn");
loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    let url = "https://kidvacc.herokuapp.com/api/child/rest-auth/login/";
    let loginUsername = document.getElementById("login_username").value;
    let loginPassword = document.getElementById("login_password").value;

    const parentLoginInformation = {
        "username": loginUsername,
        "password": loginPassword,
    }
    axios.post(url, parentLoginInformation)
        .then( () => {
            navBarBefore.style.display = "none";
            navBarAfter.style.display = "flex"
            window.location.href = "./pages/parentProfileEdit.html"
        }, error => {
            alert(error)
        })
});

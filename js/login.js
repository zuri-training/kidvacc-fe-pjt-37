let loginPassword = document.getElementById("login_password");
let eyeIcon = document.getElementById("eye_icon");

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
})

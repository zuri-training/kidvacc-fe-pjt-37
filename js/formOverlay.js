let closeOverlay = document.querySelector(".closebtn");
let loginBTN = document.getElementById("click_login");
let loginContainer = document.getElementById("login_container");

let signupBTN = document.getElementById("click_signup");
let signupContainer = document.querySelector(".signup_container");

loginBTN.addEventListener("click", () => {
  loginContainer.style.display = "flex";
  closeOverlay.style.display = "block"
})
closeOverlay.addEventListener("click", () => {
  loginContainer.style.display = "none";
  closeOverlay.style.display = "none";
})
// END OF LOGIN OVERLAY



// SIGNUP OVERLAY
signupBTN.addEventListener("click", () => {
  signupContainer.style.display = "flex";
  closeOverlay.style.display = "block"
})
closeOverlay.addEventListener("click", () => {
  signupContainer.style.display = "none";
  closeOverlay.style.display = "none";
})
// END OF SIGNUP OVERLAY
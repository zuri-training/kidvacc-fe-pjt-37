let closeOverlay = document.querySelector(".closebtn");
let loginBTN = document.getElementById("click_login");
let navLoginBTN = document.getElementById("nav_login");

let loginContainer = document.getElementById("login_container");

let signupBTN = document.getElementById("click_signup");
let navSignupBTN = document.getElementById("nav_signup");
let signupContainer = document.querySelector(".signup_container");

loginBTN.addEventListener("click", () => {
  loginContainer.style.display = "flex";
  closeOverlay.style.display = "block"
});
closeOverlay.addEventListener("click", () => {
  loginContainer.style.display = "none";
  closeOverlay.style.display = "none";
});
// END OF LOGIN OVERLAY
//NAV LOGIN
navLoginBTN.addEventListener("click", () => {
  loginContainer.style.display = "flex";
  closeOverlay.style.display = "block"
});
closeOverlay.addEventListener("click", () => {
  loginContainer.style.display = "none";
  closeOverlay.style.display = "none";
});



// SIGNUP OVERLAY
signupBTN.addEventListener("click", () => {
  signupContainer.style.display = "flex";
  closeOverlay.style.display = "block"
});
closeOverlay.addEventListener("click", () => {
  signupContainer.style.display = "none";
  closeOverlay.style.display = "none";
});

// NAV SIGNUP OVERLAY
navSignupBTN .addEventListener("click", () => {
  signupContainer.style.display = "flex";
  closeOverlay.style.display = "block"
});
closeOverlay.addEventListener("click", () => {
  signupContainer.style.display = "none";
  closeOverlay.style.display = "none";
});

// END OF SIGNUP OVERLAY
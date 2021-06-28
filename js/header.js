const linkContainer = document.querySelector(".nav_links");
const links = linkContainer.querySelectorAll(".link");

links.forEach(l => {
    l.addEventListener("click", function() {
        const current = document.getElementsByClassName("active_link");
        current[0].className = current[0].className.replace(" active_link", "");
        this.className += " active_link";
      });
})


//before login modal
const modal = document.querySelector(".myModal");
const btn = document.querySelector(".myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//commented out because it clashes in some way (will fix)
//after login modal
/* const afterModal = document.querySelector(".after_myModal");
const afterBtn = document.querySelector(".after_myBtn");

afterBtn.onclick = function() {
  afterModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == afterModal) {
    afterModal.style.display = "none";
  }
} */


/* before login dropdown */
renDrop = document.querySelector(".dropbtn");
renDrop.addEventListener('click', () => {
  document.querySelector(".myDropdown").classList.toggle("show");
})


/* after login dropdown */
afterRenDrop = document.querySelector(".after_dropbtn");
afterRenDrop.addEventListener('click', () => {
  document.querySelector(".after_myDropdown").classList.toggle("show");
})

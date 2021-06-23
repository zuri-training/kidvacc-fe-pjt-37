const linkContainer = document.querySelector(".nav_links");
const links = linkContainer.querySelectorAll(".link");

links.forEach(l => {
    l.addEventListener("click", function() {
        const current = document.getElementsByClassName("active_link");
        current[0].className = current[0].className.replace(" active_link", "");
        this.className += " active_link";
      });
})
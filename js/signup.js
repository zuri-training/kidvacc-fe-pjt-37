const input = document.querySelectorAll(".inactive");
const show = document.querySelectorAll(".password_show");
const pass = document.querySelectorAll(".hide")


input.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.add("active");
    })
})

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
})
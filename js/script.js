document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


function switchToContactFromProjects() {
    localStorage.setItem('goToContact', true)
    window.location.replace('index.html')
    setTimeout(() => {
        console.log(localStorage)
    }, 2000);
}
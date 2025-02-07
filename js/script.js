let indexNav = document.getElementById('index-nav');
let projectNav = document.getElementById('project-nav');

setTimeout(() => {
    if (window.location.pathname === '/Users/milos/Desktop/portfolio/index.html') {
        indexNav.style.color = 'rgba(176, 126, 9, 0.789);';
    } else if (window.location.pathname === '/Users/milos/Desktop/portfolio/projects.html') {
        projectNav.style.color = 'rgba(176, 126, 9, 0.789);';
    }
}, 1000);

console.log(window.location.pathname)
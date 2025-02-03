
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.help-footer, .contact-us-footer , .projects , .container , .container h2, .container h1 , .container p , .container ul ' );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});


const sidebar = document.querySelector('.sidebar');
const ionCircle = document.querySelector('.ion-circle');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.navbar');
const cancelIcon = document.querySelector('.cancel-icon');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    navbar.classList.toggle('dimmed'); 
}


ionCircle.addEventListener('click', toggleSidebar);


cancelIcon.addEventListener('click', toggleSidebar);
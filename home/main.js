
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.card, .title-01, .help h1, .brands img, .images img, .description-02 p, .description-03 .box01 h1, .description-03 .box02 p, .description-03 .box02 a, .projects, .contact-us-footer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
                entry.target.style.transform = "translateY(0)"; 
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);

        // Add hover effect
        if (element.classList.contains('card')) {
            element.addEventListener("mouseenter", function () {
                element.style.transform = "translateY(0) scale(1.05)"; 
            });

            element.addEventListener("mouseleave", function () {
                element.style.transform = "translateY(0)"; 
            });
        }
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

// Event listener for the ion-circle to open the sidebar
ionCircle.addEventListener('click', toggleSidebar);

// Event listener for the cancel icon to close the sidebar
cancelIcon.addEventListener('click', toggleSidebar);

// search button

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");

    searchBtn.addEventListener("click", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        
        if (searchValue) {
            localStorage.setItem("searchQuery", searchValue); 
            window.location.href = "/Properties/properties.html"; 
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.card, .help-footer, .contact-us-footer , .projects');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
                entry.target.style.transform = "translateY(0)"; // Ensure scroll animation works
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
                element.style.transform = "translateY(0) scale(1.05)"; // Combine both
            });

            element.addEventListener("mouseleave", function () {
                element.style.transform = "translateY(0)"; // Reset to final animation state
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
    const cards = document.querySelectorAll('.card');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const address = card.querySelector('.address').innerText.toLowerCase();
            if (address.includes(searchTerm)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
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



// search button
document.addEventListener("DOMContentLoaded", function () {
    const searchValue = localStorage.getItem("searchQuery"); 
    const propertyCards = document.querySelectorAll(".card");

    if (searchValue) {
        propertyCards.forEach(card => {
            const address = card.querySelector(".address").innerText.toLowerCase();
            if (address.includes(searchValue)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });

        localStorage.removeItem("searchQuery"); 
    }
});

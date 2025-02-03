

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.card, .section , .section p , .section h3 , .form-container, .form-container h2 , .form-container input , .form-container button , .projects, .contact-us-footer , header, header h1 , header p , .hero , .hero button , .hero h2');

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


ionCircle.addEventListener('click', toggleSidebar);


cancelIcon.addEventListener('click', toggleSidebar);





document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("get-started-btn");
    const cardsContainer = document.querySelector(".cards-container");

    getStartedBtn.addEventListener("click", function () {
        cardsContainer.scrollIntoView({ behavior: "smooth" });
    });
});


// upload images

document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

let images = [];
let currentIndex = 0;

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const popup = document.getElementById('popup');

imageInput.addEventListener('change', function(event) {
    const files = event.target.files;
    if (files.length > 5) {
        popup.textContent = 'You can upload up to 5 images only.';
        popup.style.backgroundColor = 'red';
        popup.style.display = 'block';
        setTimeout(() => { popup.style.display = 'none'; }, 3000);
        return;
    }
    images = Array.from(files);
    currentIndex = 0;
    displayImage();
});

function displayImage() {
    if (images.length === 0) return;
    
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        imagePreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview">`;
    };
    fileReader.readAsDataURL(images[currentIndex]);
    
    prevBtn.style.display = currentIndex > 0 ? 'inline' : 'none';
    nextBtn.style.display = currentIndex < images.length - 1 ? 'inline' : 'none';
}

prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        displayImage();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        displayImage();
    }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const popup = document.getElementById('popup');
    const imagePreview = document.getElementById('imagePreview')
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')

    popup.style.display = 'block';
    imagePreview.style.display ='none';
    prevBtn.style.display ='none';
    nextBtn.style.display ='none';

    this.reset();

    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
});
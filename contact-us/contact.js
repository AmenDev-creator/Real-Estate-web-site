document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(' .help-footer, .adress img , .contact-us-footer , .projects ,  .form-container ,.form-container h2 , .form-container button , .form-container input ' );

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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

   
    this.reset();

   
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
});



document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const fullName = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get the error message div
    const errorMessageDiv = document.getElementById('errorMessage');

    // Clear previous error messages
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    // Validate full name
    if (fullName.trim() === '') {
        errorMessageDiv.textContent = 'Full Name is required.';
        errorMessageDiv.style.display = 'block'; 
        setTimeout(() => {
            errorMessageDiv.style.display = 'none';
        }, 3000);
        return; 
    }

    // Validate email
    if (!emailPattern.test(email)) {
        errorMessageDiv.textContent = 'Invalid email address.';
        errorMessageDiv.style.display = 'block'; 
        setTimeout(() => {
            errorMessageDiv.style.display = 'none'; 
        }, 3000);
        return; 
    }

    // Validate password
    if (password.length < 6) {
        errorMessageDiv.textContent = 'Password must be at least 6 characters long.';
        errorMessageDiv.style.display = 'block';
        setTimeout(() => {
            errorMessageDiv.style.display = 'none';
        }, 3000);
        return; 
    }

    
    window.location.href = 'index.html';
});
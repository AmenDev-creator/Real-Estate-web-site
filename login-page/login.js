document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const errorMessageDiv = document.getElementById('errorMessage');

    
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    
    if (!emailPattern.test(email)) {
        errorMessageDiv.textContent = 'Invalid email address.';
        errorMessageDiv.style.display = 'block'; 
        setTimeout(() => {
            errorMessageDiv.style.display = 'none'; 
        }, 3000); 
        return; 
    }

    
    if (password.length < 6) {
        errorMessageDiv.textContent = 'Password must be at least 6 characters long.';
        errorMessageDiv.style.display = 'block'; 
        setTimeout(() => {
            errorMessageDiv.style.display = 'none'; 
        }, 3000); 
        return; 
    }

   
    window.location.href = '/home/index.html';
});
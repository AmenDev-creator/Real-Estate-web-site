document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      
        errorMessage.textContent = "Invalid email";
        errorMessage.style.display = "block"; 

      
        setTimeout(() => {
            errorMessage.style.display = "none"; 
        }, 3000); 
    } else {
       
        errorMessage.style.display = "none";
       
        console.log("Valid email, proceed with sending reset link.");
    }
});
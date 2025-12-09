document.addEventListener('DOMContentLoaded', function () {

   
    const contactForm = document.getElementById('contactForm');

    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            
            event.preventDefault();

            
            const name = document.getElementById('name').value;
            const favorite = document.getElementById('favorite').value;

            
            const feedbackMsg = document.getElementById('feedback-message');
            const userResponse = document.getElementById('user-response');

           
            contactForm.style.display = 'none';

           
            feedbackMsg.style.display = 'block';

          
            userResponse.textContent = `Thanks, ${name}! We also think ${favorite} is an awesome choice. We'll be in touch soon.`;
        });
    }

    
    console.log("TCG Hideout script loaded successfully.");

});

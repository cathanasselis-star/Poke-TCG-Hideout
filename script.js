document.addEventListener('DOMContentLoaded', function () {

    var contactForm = document.getElementById('contactForm');

    if (contactForm) {


        contactForm.addEventListener('submit', function (event) {

            event.preventDefault();

           
            var name = document.getElementById('name').value;
            var favorite = document.getElementById('favorite').value;

           
            var feedbackMsg = document.getElementById('feedback-message');
            var userResponse = document.getElementById('user-response');

           
            contactForm.style.display = 'none';

           
            feedbackMsg.style.display = 'block';

            userResponse.textContent = "Thanks, " + name + "! We also think " + favorite + " is an awesome choice. We'll be in touch soon.";
        });
    }

    console.log("Script loaded successfully");
});
document.addEventListener('DOMContentLoaded', function () {

    // Check if the contact form exists on this page
    const contactForm = document.getElementById('contactForm');

    // Only run this code if the form is found (prevents errors on other pages)
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // 1. Prevent the page from refreshing (default form behavior)
            event.preventDefault();

            // 2. Get the values the user typed into the input fields
            const name = document.getElementById('name').value;
            const favorite = document.getElementById('favorite').value;

            // 3. Get the HTML elements where we will show the success message
            const feedbackMsg = document.getElementById('feedback-message');
            const userResponse = document.getElementById('user-response');

            // 4. Hide the form so the user knows it was submitted
            contactForm.style.display = 'none';

            // 5. Show the success message div
            feedbackMsg.style.display = 'block';

            // 6. Set the custom message text using the user's name and favorite Pokemon
            userResponse.textContent = `Thanks, ${name}! We also think ${favorite} is an awesome choice. We'll be in touch soon.`;
        });
    }

    // Log to the browser console to confirm the script loaded
    console.log("TCG Hideout script loaded successfully.");
});
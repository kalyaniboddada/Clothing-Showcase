// JavaScript for handling the redirect button functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const redirectButton = document.getElementById('redirectButton');

    // Add an event listener to handle the click event
    redirectButton.addEventListener('click', function() {
        // Redirect the user to the desired page (could be any URL)
        window.location.href = 'web.html'; // Replace with the actual URL you want to redirect to
    });
});


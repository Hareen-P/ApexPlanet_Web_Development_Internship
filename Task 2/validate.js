// Select the form and its inputs
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        alert("Name is required.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate message
    if (message === "") {
        alert("Message is required.");
        return;
    }

    // If all fields are valid
    alert("Form submitted successfully!");
});

// Simple contact form message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-status").textContent = "Message Sent!";
});

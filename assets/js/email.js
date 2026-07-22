// ==================== EMAILJS CONTACT FORM ====================

// Replace these with your EmailJS credentials
const SERVICE_ID = "service_ny8yjgp";
const TEMPLATE_ID = "template_vy7k19l";
const PUBLIC_KEY = "SSWfwSXWMeKOKXY-U";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

// Select form
const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitButton = contactForm.querySelector("button");

        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: contactForm.querySelector('input[type="text"]').value,
            from_email: contactForm.querySelector('input[type="email"]').value,
            subject: contactForm.querySelectorAll('input')[2].value,
            message: contactForm.querySelector("textarea").value
        })

        .then(() => {

            alert("Message sent successfully!");

            contactForm.reset();

            submitButton.disabled = false;
            submitButton.innerText = "Send Message";

        })

        .catch((error) => {

            console.error(error);

            alert("Failed to send message.");

            submitButton.disabled = false;
            submitButton.innerText = "Send Message";

        });

    });

}
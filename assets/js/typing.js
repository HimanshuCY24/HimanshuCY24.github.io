document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    new Typed(".typing", {
        strings: [
            "Cybersecurity Student",
            "Blue Team Enthusiast",
            "Python Developer",
            "Future Security Engineer",
            "SOC Analyst Aspirant",
            "Linux & Network Security Learner"
        ],
        typeSpeed: 70,
        backSpeed: 45,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "|"
    });

});
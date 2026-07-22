/* ======================================================
   CYBER PORTFOLIO MAIN JS
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       PRELOADER
    ========================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            preloader.style.transition = "0.6s";
        }
    });

    /* ==========================
       STICKY NAVBAR
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================
       ACTIVE NAV LINK
    ========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({

                behavior:"smooth"

            });

        });

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(".reveal");

    function reveal(){

        revealElements.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if(top < windowHeight - 100){

                el.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.className = "topBtn";

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    });

    /* ==========================
       THEME TOGGLE
    ========================== */

    const toggle = document.querySelector(".theme-toggle");

    toggle.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        const icon = toggle.querySelector("i");

        icon.classList.toggle("fa-moon");

        icon.classList.toggle("fa-sun");

    });

});
// ===============================
// TYPING ANIMATION
// ===============================

const text = "Hi! I'm JD Bayani";
let index = 0;

const typingElement = document.querySelector(".typing");


function typingEffect(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,150);

    }

}


window.onload = typingEffect;





// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll(){

    revealElements.forEach(element => {


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }


    });


}


window.addEventListener("scroll", revealOnScroll);









// ===============================
// FOOTER YEAR
// ===============================


const year = new Date().getFullYear();

document.getElementById("year").textContent = year;









// ===============================
// FLOATING PARTICLES
// ===============================


const particleContainer = document.querySelector(".particles");


for(let i = 0; i < 40; i++){


    let particle = document.createElement("span");


    particle.classList.add("particle");


    particle.style.left = Math.random()*100 + "%";


    particle.style.animationDuration =
    (Math.random()*10 + 5) + "s";


    particle.style.animationDelay =
    Math.random()*5 + "s";


    particleContainer.appendChild(particle);


}








// ===============================
// NAVBAR EFFECT
// ===============================


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,23,42,0.85)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.08)";

    }


});
/* =================================
   BOOYAH ARENA - SCRIPT.JS
   ================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       FIRE PARTICLES
       =============================== */

    const particleContainer =
        document.querySelector(".fire-particles");

    if (particleContainer) {

        const particleCount = 35;

        for (let i = 0; i < particleCount; i++) {

            const particle = document.createElement("span");

            particle.style.position = "absolute";
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = "50%";
            particle.style.background = "#ff6500";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = "-20px";

            particle.style.boxShadow =
                "0 0 10px #ff4500";

            particle.style.opacity =
                Math.random() * 0.7 + 0.3;

            const duration =
                Math.random() * 5 + 4;

            const delay =
                Math.random() * 5;

            particle.style.animation =
                `riseFire ${duration}s linear ${delay}s infinite`;

            particleContainer.appendChild(particle);
        }
    }


    /* ===============================
       CREATE FIRE ANIMATION
       =============================== */

    const fireStyle = document.createElement("style");

    fireStyle.textContent = `
        @keyframes riseFire {
            0% {
                transform: translateY(0) scale(1);
                opacity: 0;
            }

            15% {
                opacity: 0.8;
            }

            80% {
                opacity: 0.5;
            }

            100% {
                transform:
                    translateY(-110vh)
                    translateX(${Math.random() * 100 - 50}px)
                    scale(0.2);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(fireStyle);


    /* ===============================
       SCROLL ANIMATIONS
       =============================== */

    const animatedElements = document.querySelectorAll(
        ".section, .card, .team, .register"
    );

    animatedElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {
        observer.observe(element);
    });


    /* ===============================
       TOURNAMENT INTERACTIONS
       =============================== */

    const tournamentCards =
        document.querySelectorAll(".card");

    tournamentCards.forEach(card => {

        const button =
            card.querySelector(".card-btn");

        if (!button) return;

        button.addEventListener("click", event => {

            event.preventDefault();

            const tournamentName =
                card.querySelector("h3")?.textContent ||
                "Tournament";

            alert(
                `${tournamentName}\n\nRegistration will open soon!`
            );

        });

    });


    /* ===============================
       REGISTER BUTTON
       =============================== */

    const registerButtons =
        document.querySelectorAll(
            'a[href="#register"]'
        );

    registerButtons.forEach(button => {

        button.addEventListener("click", () => {

            setTimeout(() => {

                const registerSection =
                    document.querySelector("#register");

                if (registerSection) {

                    registerSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 50);

        });

    });


    /* ===============================
       FIRE ORB INTERACTION
       =============================== */

    const fireOrb =
        document.querySelector(".fire-orb");

    if (fireOrb) {

        fireOrb.addEventListener("click", () => {

            fireOrb.style.transform = "scale(1.15)";

            setTimeout(() => {
                fireOrb.style.transform = "";
            }, 250);

        });

    }


    /* ===============================
       NAVBAR SCROLL EFFECT
       =============================== */

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(0, 0, 0, 0.96)";

        } else {

            header.style.background =
                "rgba(5, 5, 5, 0.85)";
        }

    });


    /* ===============================
       WELCOME MESSAGE
       =============================== */

    console.log(
        "🔥 Booyah Arena loaded successfully!"
    );

});

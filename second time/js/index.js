/* Vanila tilt.js */
VanillaTilt.init(document.querySelectorAll(".tiltcard"), {
    max: 10,
    speed: 400,
    glare: true,
});

/* navbar code */
const navbar = document.querySelector("nav#navbar");

const navbarDropdownAtMobile = () => {
    if (window.innerWidth <= 800) {
        document.querySelectorAll(".dropdown-wrapper").forEach((dropdown) => {
            const dropdownItem = dropdown.querySelector(".dropdown-items");
            const dropdownLink = dropdown.querySelector(".dropdown-link");
            let clicked = true;
            dropdownLink.onclick = () => {
                if (clicked) {
                    dropdownItem.style.maxHeight = dropdownItem.scrollHeight + "px";
                    clicked = !clicked;
                } else {
                    dropdownItem.style.maxHeight = 0 + "px";
                    clicked = !clicked;
                }
            };
        });
    }
};

try {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarItemsContainer = document.querySelector(".navbar-items-container");
    navbarToggler.addEventListener("click", () => {
        navbarItemsContainer.classList.add("active");
        navbarCloser.classList.toggle("active");
    });

    const navbarCloser = document.querySelector(".container-closer");
    navbarCloser.addEventListener("click", () => {
        navbarItemsContainer.classList.remove("active");
        navbarCloser.classList.toggle("active");
    });
} catch (e) {
    console.error(e);
}

window.addEventListener("resize", () => {
    navbarDropdownAtMobile();
});

navbarDropdownAtMobile();

window.addEventListener("scroll", () => {
    if (window.scrollY >= 45) {
        navbar.style.cssText = `
        background: var(--green-dark);
        `;
    } else {
        navbar.style.cssText = null;
    }
});

/* Glidejs carousel */
const glide = new Glide("#our-result-carousel", {
    type: "carousel",
    perView: 1,
});

glide.mount();

/* swiper js carousel for discover carousel */
new Swiper("#discover-slider", {
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: false,
    autoHeight: true,
    breakpoints: {
        440: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: -20,
        },
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

try {
    const allDiscoverSliderPlayIcons = document.querySelectorAll(".discover-card .play-icon");

    //  createing bootstrap Modal instance
    const discoverModalElement = document.getElementById("discover-slider-videoShower");
    const discoverSliderModal = new bootstrap.Modal(discoverModalElement, {
        keyboard: false,
    });

    allDiscoverSliderPlayIcons.forEach((playIcon) => {
        playIcon.addEventListener("click", () => {
            discoverSliderModal.show();
            console.log(discoverModalElement);
            console.log(discoverSliderModal);
        });
    });
} catch (e) {
    console.error(e);
}

/* counter of Review */
//======================================
try {
    const counterContainer = document.querySelector(".counters-container");
    const counterCards = document.querySelectorAll(".counters-container .counter-card");

    window.onscroll = () => {
        if (counterContainer.getBoundingClientRect().top <= window.innerHeight / 1.15) {
            [...counterCards].forEach((card) => {
                const counterDigit = card.querySelector("span.counter-digit");

                const updateCount = () => {
                    const countDestination = +counterDigit.getAttribute("data-count");
                    const count = +counterDigit.innerText;
                    const speed = +counterDigit.getAttribute("data-count-speed") || 200;
                    const increement = Math.round(countDestination / speed);
                    if (count <= countDestination) {
                        counterDigit.innerText = increement + count;
                        setTimeout(updateCount, 25);
                    } else {
                        counterDigit.innerText = countDestination;
                    }
                };
                updateCount();
            });
        } else {
            counterCards.forEach((card) => (card.querySelector("span.counter-digit").innerText = 0));
        }
    };

} catch (e) {}

// testomonials review carousel initialization
try {
    new Swiper(".testimonial-review-slider", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
} catch (e) {}

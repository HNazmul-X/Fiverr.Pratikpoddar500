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
var swiper = new Swiper("#discover-slider", {
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
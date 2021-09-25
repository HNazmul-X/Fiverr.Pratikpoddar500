//vanila tilt js for animation
VanillaTilt.init(document.querySelectorAll(".tiltcard"), {
    max: 10,
    speed: 400,
});

/* =====================================================
            Navbar Releted Code
=========================================================*/
try {
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
    navbarDropdownAtMobile();

    window.addEventListener("resize", () => {
        navbarDropdownAtMobile();
    });

    //toggoline navbar content
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

    // Adding dynamic Navbar Background
    const dynamicBgNavbar = () => {
        if (window.scrollY >= 45) {
            navbar.style.cssText = `background: var(--green-dark);`;
        } else {
            navbar.style.cssText = null;
        }
    };

    window.addEventListener("scroll", dynamicBgNavbar);
} catch (e) {
    console.error(e);
}

//our result carousel
//turning slider for Learge and Small device
try {
    const sliderLg = document.getElementById("our-result-lg-carousel");
    const sliderSm = document.getElementById("our-result-sm-carousel");

    new Swiper("#our-result-carousel", {
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const togglingSlider = () => {
        if (window.innerWidth < 800) {
            sliderLg.style.cssText = "display:none";
            sliderSm.style.cssText = "display:block";
        } else if (window.innerWidth >= 800) {
            sliderSm.style.cssText = "display:none";
            sliderLg.style.cssText = "display:block";
        }
    };
    togglingSlider();
    window.addEventListener("scroll", togglingSlider);
} catch (e) {
    console.log(e);
}

/* swiper js carousel for discover carousel */
try {
    new Swiper("#discover-slider", {
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
} catch (e) {
    console.log(e);
}

try {
    const allDiscoverSliderPlayIcons = document.querySelectorAll(".discover-card .play-icon");
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

    window.addEventListener("scroll", () => {
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
    });
} catch (e) {}

// testomonials review carousel initialization
try {
    new Swiper(".testimonial-review-slider", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            779: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1233: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
} catch (e) {
    console.log(e);
}

//teacher sharing modal bootstrap
try {
    const videoPlayIcon = document.querySelector(".some-best-teacher .play-icon-svg")
    const modalElement = document.getElementById('some-best-teacher-modal');
    const modal = new bootstrap.Modal(modalElement, {
        keyboard:true,
        backdrop:"static"
    })
    videoPlayIcon.addEventListener("click", () => modal.show())

} catch (e) {
    console.log(e);
}

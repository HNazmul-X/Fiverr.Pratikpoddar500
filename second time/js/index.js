
/* Vanila tilt.js */
VanillaTilt.init(document.querySelectorAll(".tiltcard"), {
    max: 10,
    speed: 400,
    glare:true
});



/* navbar code */
const navbar = document.querySelector("nav#navbar")

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
};

window.addEventListener("resize", () => {
    navbarDropdownAtMobile();
});

navbarDropdownAtMobile();


window.addEventListener("scroll", () => {
    if(window.scrollY >=45){
        navbar.style.cssText = `
        background: var(--green-dark);
        `;
    } else {
        navbar.style.cssText = null
    }
})


/* Glidejs carousel */
var glide = new Glide("#our-result-carousel", {
    type: "carousel",
    perView: 1,
});

glide.mount();
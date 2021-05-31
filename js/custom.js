/* navbar toggling javscript here */
const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

navbarToggleIcon.addEventListener("click", () => {
    NavbarContent.classList.toggle("navbar-show");
});
navbarCloserIcon.addEventListener("click", () => {
    NavbarContent.classList.toggle("navbar-show");
});

/* use profile toogleer */
const togglerIcon = document.querySelector("#hnazmul-toogle-content-area .hnazmul-toggler-icon");
const togglerContent = document.querySelector("#hnazmul-toogle-content-area .hnazmul-toggler-content");

togglerIcon.addEventListener("click", () => {
    togglerContent.classList.toggle("left");
});


/* quize card mbl responsive text shower */
const mblviewedText = document.querySelectorAll("#quizes-card .for-mbl-view-text-SWSHTSHT"); 
const mblviewedTextComeUp = document.querySelectorAll("#quizes-card .come-up-text"); 
mblviewedText.forEach((eachNode, index) => {
    eachNode.innerHTML = mblviewedTextComeUp[index].innerHTML
})
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
    eachNode.innerHTML = mblviewedTextComeUp[index].innerHTML;
});

/* quize card toogle code */
// width of canceler
const quizesitebarCanceler_SDDHT = document.querySelector('main#page_2 #carousel-1_2 [id*="catagory_"] .toogle___QUIZE_SITEBAR .toogle-content .content-wrapper .toggle-content-canceler');
const quzesitebarContent_Sksnsa5t = document.querySelector('main#page_2 #carousel-1_2 [id*="catagory_"] .toogle___QUIZE_SITEBAR .toogle-content .content-wrapper .content');

const resizingCancelerHeight = () => {
    if (quizesitebarCanceler_SDDHT && quzesitebarContent_Sksnsa5t) {
        quizesitebarCanceler_SDDHT.style.height = quzesitebarContent_Sksnsa5t.clientHeight + "px";
    }
};

const quizeSiteBarToogleIcon = document.querySelector('main#page_2 #carousel-1_2 [id*="catagory_"] .toogle___QUIZE_SITEBAR .toogle-icon');
const quizeSitebarToogleContent = document.querySelector('main#page_2 #carousel-1_2 [id*="catagory_"] .toogle___QUIZE_SITEBAR .toogle-content');
quizeSiteBarToogleIcon.addEventListener("click", () => {
    resizingCancelerHeight();
    quizeSitebarToogleContent.classList.toggle("view");
});

quizesitebarCanceler_SDDHT.addEventListener("click", () => {
    quizeSitebarToogleContent.classList.toggle("view");
});

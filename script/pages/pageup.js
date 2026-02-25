let mybutton = document.getElementById("pageUpBtn");
let footer = document.querySelector("footer");

window.onscroll = function () {
    let footerTop = footer.offsetTop;
    let viewportBottom = window.scrollY + window.innerHeight;    
    if (window.scrollY > 290) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
    if (viewportBottom >= footerTop + 40) {
        mybutton.classList.add("docked");
    } else {
        mybutton.classList.remove("docked");
    }
};

mybutton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
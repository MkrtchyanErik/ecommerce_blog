window.addEventListener("scroll", function () {
    let header = document.querySelector(".menu-header");
    if (window.scrollY > 250) {
        header.classList.add("sticky");
        header.classList.remove("not_sticky");
    }
    else if (window.scrollY <= 250 && header.classList.contains("sticky")) {
        header.classList.remove("sticky");
        header.classList.add("not_sticky");
    }
});
export const activeLink = () => {
    const links = document.querySelectorAll(".navbar__menu");    
    links.forEach((element) => {
    if (element.href == window.location.href) {
        element.classList.add("navbar__menu-active");
    } else {
        element.classList.remove("navbar__menu-active");
    }
    });
    }
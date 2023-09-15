const header = document.querySelector("header");
header.style.position = "fixed";

const headerTransparency = (current) => {
    if(current) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    } else {
        header.style.backgroundColor = "var(--primary-color)";
        header.style.boxShadow = "0 0 5px #000";
    }
}

window.addEventListener("load", () => {
    if(window.innerWidth > 950) {
        headerTransparency(true);
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        headerTransparency(false);
    } else {
        if(window.innerWidth <= 950) {
            headerTransparency(false);
        } else {
            headerTransparency(true);
        }
    }
});

window.addEventListener("resize", (event) => {
    if(window.innerWidth > 950) {
        headerTransparency(true);
    } else {
        headerTransparency(false);
    }
});
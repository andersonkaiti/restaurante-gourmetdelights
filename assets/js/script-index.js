const header = document.querySelector("header");

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
    if(window.innerWidth > 970) {
        headerTransparency(true);
        header.style.position = "fixed";
    } else {
        header.style.position = "sticky";
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        headerTransparency(false);
    } else {
        if(window.innerWidth <= 970) {
            headerTransparency(false);
        } else {
            headerTransparency(true);
        }
    }
});

window.addEventListener("resize", (event) => {
    if(window.innerWidth > 970) {
        headerTransparency(true);
        header.style.position = "fixed";
    } else {
        headerTransparency(false);
        header.style.position = "sticky";
    }
});
const header = document.querySelector("header");

const headerTransparency = (current) => {
    if(current) {
        header.style.marginTop = "-5.1em";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    } else {
        header.style.marginTop = "0";
        header.style.backgroundColor = "var(--primary-color)";
        header.style.boxShadow = "0 0 5px #000";
    }
}

window.addEventListener("load", () => {
    document.querySelector(".about-us").style.marginTop = "0";
    if(this.window.innerWidth > 950) {
        headerTransparency(true);
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        headerTransparency(false);
    } else {
        if(this.innerWidth <= 950) {
            headerTransparency(false);
        } else {
            headerTransparency(true);
        }
    }
});

window.addEventListener("resize", (event) => {
    if(this.window.innerWidth > 950) {
        headerTransparency(true);
    } else {
        headerTransparency(false);
    }
});
const navBar = document.getElementById("navbar");
var showSidebar = false;

const toggleSidebar = () => {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navBar.style.display = "flex";
    } else {
        navBar.style.display = "none";
    }
}

document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        toggleSidebar();
    })
});

window.addEventListener("resize", (event) => {
    if(window.innerWidth <= 970) {
        if(showSidebar) {
            showSidebar = !showSidebar;
            navBar.style.display = "none";
        } else {
            navBar.style.display = "none";
        }
    } else {
        if(showSidebar == false) {
            navBar.style.display = "flex";
        } else {
            showSidebar = !showSidebar;
        }
    }
});

document.getElementById("content").addEventListener("click", () => {
    if(showSidebar) {
        toggleSidebar();
    }
});
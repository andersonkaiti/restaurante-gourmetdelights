var navigationHeader = document.getElementById("navbar");
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigationHeader.style.display = "flex";
    } else {
        navigationHeader.style.display = "none";
    }
}

document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        toggleSidebar();
    })
});

window.addEventListener("resize", function(event) {
    if(this.window.innerWidth > 950 && showSidebar) {
        toggleSidebar();
        navigationHeader.style.display = "flex";
    }
});

document.getElementById("content").addEventListener("click", () => {
    if(showSidebar) {
        toggleSidebar();
    }
});
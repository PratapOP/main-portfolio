/* =========================================
   NETFLIX INTRO CONTROL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("netflix-intro");

    if (intro) {
        setTimeout(() => {
            intro.remove();
        }, 4700); // sync with CSS animation
    }
});

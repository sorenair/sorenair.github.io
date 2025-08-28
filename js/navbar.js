function showDiv() {
    const menu = document.getElementById('nav_mobile_options');
    const track = document.getElementById('image-track');

    if (menu.style.display === "flex") {
        // Closing menu
        menu.style.display = "none";
        document.body.style.overflow = "";       // re-enable scroll
        if (track) track.style.overflowX = "";    // re-enable horizontal scroll
    } else {
        // Opening menu
        menu.style.display = "flex";
        document.body.style.overflow = "hidden"; // disable scroll
        if (track) track.style.overflowX = "hidden"; // disable horizontal scroll
    }
}
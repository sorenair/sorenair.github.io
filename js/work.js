document.addEventListener("DOMContentLoaded", () => {
    // Position Indicator Logic
    const panes = document.querySelectorAll(".work-pane");
    const dots = document.querySelectorAll(".dot");
    const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(panes).indexOf(entry.target);
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
            if (index !== 0) { // Hide arrow if not on first pane
                const arrow = document.getElementById("scroll-arrow");
                if (arrow) {
                    arrow.style.opacity = "0";
                    arrow.style.pointerEvents = "none";
                }
            }
        }
        });
    },
    {
        threshold: 0.6
    }
    );
    panes.forEach(pane => observer.observe(pane));
});
document.addEventListener("DOMContentLoaded", () => {
  const panes = document.querySelectorAll(".work-pane");
  const dots = document.querySelectorAll(".dot");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(panes).indexOf(entry.target);
          dots.forEach(dot => dot.classList.remove("active"));
          dots[index].classList.add("active");
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  panes.forEach(pane => observer.observe(pane));
});
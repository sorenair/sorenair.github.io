const track = document.getElementById("image-track");

const verticalProjects = {
  electronics: [
    {
      title: "PORTAL",
      description: "A smart messenger display system with a web interface allowing people to send pictures, animations, and messages to friends and family.",
      image: "images/work/personal/electronics/portal.png"
    },
    {
      title: "NightEye",
      description: "A Raspberry Pi-based night vision headset using infrared imaging and machine vision.",
      image: "images/work/personal/electronics/ne_fd.png"
    }
  ]
};

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = e => {
    if (document.querySelector(".image-wrapper.expanded")) return;
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if (document.querySelector(".image-wrapper.expanded")) return;
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100; 
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${nextPercentage + 100}% 50%`
        }, { duration: 1200, fill: "forwards" });
    }
}

window.addEventListener("DOMContentLoaded", () => {
  const startPercentage = parseFloat(track.dataset.percentage) || -50;
  track.style.transform = `translate(${startPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${100 + startPercentage}% 50%`;
  }

  const wrappers = document.querySelectorAll(".image-wrapper");

  wrappers.forEach(wrapper => {
    const closeBtn = wrapper.querySelector(".close-detail");

    wrapper.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-detail")) return;

      // Prevent re-triggering if already expanded
      if (wrapper.classList.contains("expanded")) return;

      track.style.transform = "translate(0%, -50%)";
      track.dataset.percentage = "0";
      track.dataset.prevPercentage = "0";

      for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `100% 50%`;
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const rect = wrapper.getBoundingClientRect();

          const clone = wrapper.cloneNode(true);
          clone.classList.add("expanding-clone");
          clone.style.position = "fixed";
          clone.style.top = `${rect.top}px`;
          clone.style.left = `${rect.left}px`;
          clone.style.width = `${rect.width}px`;
          clone.style.height = `${rect.height}px`;
          clone.style.margin = "0";
          clone.style.zIndex = 999;
          document.body.appendChild(clone);

          requestAnimationFrame(() => {
            clone.style.transition = "all 0.5s ease";
            clone.style.top = "0";
            clone.style.left = "0";
            clone.style.width = "100vw";
            clone.style.height = "100vh";
          });

          setTimeout(() => {
            document.body.removeChild(clone);
            const index = Array.from(track.children).indexOf(wrapper);
            wrapper.dataset.originalIndex = index;

            track.removeChild(wrapper);
            document.body.appendChild(wrapper);

            wrapper.classList.add("expanded");

            // Dynamically load vertical track
            const detail = wrapper.querySelector(".project-detail");
            populateVerticalTrack(wrapper, wrapper.querySelector(".image-label").textContent.trim());
            detail.style.display = "flex";
            track.style.display = "none";
            document.body.style.overflow = "hidden";

            // Reattach close button logic
            detail.querySelector(".close-detail").addEventListener("click", (e) => {
              e.stopPropagation();
              detail.style.display = "none";
              wrapper.classList.remove("expanded");
              document.body.style.overflow = "auto";
              track.dataset.mouseDownAt = "0";

              const index = parseInt(wrapper.dataset.originalIndex, 10);
              const children = Array.from(track.children);
              const targetEl = children[index] || children[children.length - 1];
              if (!targetEl) return;

              track.style.display = "flex";

              const targetRect = targetEl.getBoundingClientRect();
              const clone = wrapper.cloneNode(true);
              clone.classList.add("expanding-clone");
              clone.style.position = "fixed";
              clone.style.top = "0";
              clone.style.left = "0";
              clone.style.width = "100vw";
              clone.style.height = "100vh";
              clone.style.zIndex = "999";
              clone.style.margin = "0";
              clone.querySelector(".project-detail").style.display = "none";
              document.body.appendChild(clone);
              wrapper.style.display = "none";

              requestAnimationFrame(() => {
                clone.style.transition = "all 0.5s ease";
                clone.style.top = `${targetRect.top}px`;
                clone.style.left = `${targetRect.left}px`;
                clone.style.width = `${targetRect.width}px`;
                clone.style.height = `${targetRect.height}px`;
              });

              setTimeout(() => {
                document.body.removeChild(clone);
                delete wrapper.dataset.originalIndex;

                if (!isNaN(index) && index <= children.length) {
                  if (index === children.length) {
                    track.appendChild(wrapper);
                  } else {
                    track.insertBefore(wrapper, children[index]);
                  }
                }

                wrapper.classList.remove("expanded");
                wrapper.style.display = "";

                track.classList.remove("dimmed");
                track.style.transform = "translate(0%, -50%)";
                track.dataset.percentage = "0";
                track.dataset.prevPercentage = "0";

                for (const image of track.getElementsByClassName("image")) {
                  image.style.objectPosition = `100% 50%`;
                }
              }, 250);
            });
          }, 250);
        });
      });
    });
  });
});

function createIndexIndicator(content, darken=false) {
  const indicator = document.createElement("div");
  indicator.className = "slide-index";
  indicator.textContent = content;
  if (darken) {
    indicator.style = "color: black"
  }
  return indicator;
}

function setupDotCarousel(carouselWrapper) {
  const carousel = carouselWrapper.querySelector(".image-carousel");
  const images = carousel.querySelectorAll("img");
  const dotsContainer = carouselWrapper.querySelector(".carousel-dots");

  if (!carousel || images.length <= 1) return;

  // Create dots
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      const imageWidth = carousel.clientWidth;
      carousel.scrollTo({
        left: index * imageWidth,
        behavior: "smooth"
      });

      // update active dot
      dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => dot.classList.remove("active"));
      dot.classList.add("active");
    });
    dotsContainer.appendChild(dot);
  });

  // Optional: update dot on scroll (sync when swiped)
  carousel.addEventListener("scroll", () => {
    const scrollLeft = carousel.scrollLeft;
    const imageWidth = carousel.clientWidth;
    const index = Math.round(scrollLeft / imageWidth);
    dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => dot.classList.remove("active"));
    if (dotsContainer.children[index]) dotsContainer.children[index].classList.add("active");
  });
}
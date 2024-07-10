// script.js
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const modal = document.getElementById("details-modal");
  const closeBtn = document.querySelector(".close-btn");
  const detailsFrame = document.getElementById("details-frame");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, { y: -10 });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, { y: 0 });
    });

    item.addEventListener("click", () => {
      const detailsUrl = item.getAttribute("data-details");
      //   const detailsUrl = "/step3/step3.html";
      detailsFrame.src = detailsUrl;
      modal.style.display = "flex";
      gsap.set(modal, { xPercent: 80 });
      const tl = gsap.timeline();
      tl.to(modal, { xPercent: 0, opacity: 1, duration: 2 }).to(detailsFrame, {
        opacity: 1,
        duration: 1,
      });
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.opacity = 0;
    detailsFrame.style.opacity = 0;
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

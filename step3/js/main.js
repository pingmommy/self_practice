const boxes = gsap.utils.toArray(".box");
const path = document.getElementById("route");
const modal = document.getElementById("details-modal");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
// 경로 길이 계산
const pathLength = path.getTotalLength();

boxes.forEach((box, i) => {
  gsap.set(box, {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      autoRotate: true,

      transformOrigin: "50% 50%",
      start: i * (1 / boxes.length),
      end: (i + 1) * (1 / boxes.length) - 0.076,
    },
  });

  box.addEventListener("mouseenter", mouseEnter);
  box.addEventListener("mouseleave", mouseLeave);
  box.addEventListener("click", showModal);
});

closeBtn.addEventListener("click", () => {
  const ani = gsap.timeline();
  ani
    .to(modalContent, { opacity: 0, duration: 0.5, ease: "none" })
    .to(modal, { autoAlpha: 0, duration: 0.5, ease: "none" }, "0.3");
});

function mouseEnter() {
  gsap.to(this, {
    yPercent: -8,
    duration: 0.1,
    ease: "none",
  });
}

function mouseLeave() {
  gsap.to(this, {
    yPercent: 0,
    duration: 0.1,
    ease: "none",
  });
}

function showModal() {
  modal.style.backgroundColor = this.id;

  gsap.set(modal, { xPercent: "50" });
  const ani = gsap.timeline();
  ani
    .to(modal, { autoAlpha: 1, xPercent: "0", duration: 0.5 })
    .to(modalContent, { delay: 0.4, opacity: 1 });
}

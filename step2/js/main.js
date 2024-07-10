const boxes = gsap.utils.toArray(".box");

const path = document.getElementById("route");

// 경로 길이 계산
const pathLength = path.getTotalLength();

ScrollTrigger.create({
  trigger: ".pin",
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: true,
  // markers: true,
});

boxes.forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: ".pin",
      start: "top top",
      end: "30% top",
      scrub: 1,
      markers: true,
    },
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: i * (1 / boxes.length),
      end: (i + 1) * (1 / boxes.length),
    },
  });
});

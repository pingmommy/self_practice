for (let i = 0; i < 90; i++) {
  let tem = "<div class='box'></div>";
  document.querySelector(".stage").insertAdjacentHTML("beforeend", tem);
}

gsap.from(".stage>div", {
  duration: 1,
  scale: 0,
  //   repeat: -1,
  //   yoyo: true,
  stagger: { each: 0.1, from: "edges", grid: "auto" },
});

const ani = gsap.to(".wrapper01", {
  x() {
    return -(this.targets()[0].offsetWidth - innerWidth);
  },
});

ScrollTrigger.create({
  trigger: ".section",
  start: "top",
  end: "+=2000",
  //   markers: true,
  animation: ani,
  scrub: 1,
  pin: true,
});

const { chars } = new SplitText("h1", { type: "chars" });

const disX = gsap.utils.distribute({
  base: -300,
  amount: 600,
});

const tl = gsap.timeline({ repeat: -1 });

gsap.set(chars, { transformPerspective: 500 });
tl.from(chars, {
  opacity: 0,
  filter: "blur(8px)",
  y: gsap.utils.wrap([-10, 10]),
  stagger: {
    each: 0.1,
    from: "center",
  },
})
  .to(chars, {
    textShadow: "10px 10px 10px grey",
    z: 200,
    x: disX,
    duration: 2,
    ease: "power3.inOut",
  })
  .to(chars, {
    delay: -0.5,
    filter: "blur(8px)",
    opacity: 0,
    stagger: {
      each: 0.1,
      from: "edges",
    },
  });

GSDevTools.create();

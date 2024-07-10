const sectionColors = [
  "#f2eee5",
  "#e5c1c5",
  "#c3e2dd",
  "#6eceda",
  "#FB9DA7",
  "#FCCCD4",
  "#FBDEA2",
  "#F2E2C6",
  "#8EB695",
];

// gsap.set(".section", { backgroundColor: gsap.utils.wrap(sectionColors) });

//gsap.set(".box", { backgroundColor: gsap.utils.wrap(sectionColors) });

// gsap.utils.toArray(".section").forEach((item, index) => {
//   let h2 = `
//   <h2>section${index + 1}</h2>
//   `;
//   item.insertAdjacentHTML("beforeend", h2);
// });

const { wrap, toArray } = gsap.utils;

gsap.set(".box", { backgroundColor: wrap(sectionColors) });

toArray(".box").forEach((box, index) => {
  let h3 = `
  <h3>box${index + 1}</h3>
  `;
  box.insertAdjacentHTML("beforeend", h3);
});

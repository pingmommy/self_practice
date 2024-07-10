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

const { wrap, toArray } = gsap.utils;

gsap.set(".box", { backgroundColor: wrap(sectionColors) });

toArray(".box").forEach((box, index) => {
  box.id = sectionColors[index];
  // let h3 = `
  // <h3>PROJECT ${index + 1}</h3>
  // `;
  // box.insertAdjacentHTML("afterbegin", h3);
});

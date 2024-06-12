let textToChange = document.getElementById("text-to-change");
let words = [
  "innovators",
  "thinkers",
  "problem-solvers",
  "creators",
  "developers",
  "designers",
]; // add more words as needed

let counter = 0;
setInterval(() => {
  textToChange.innerText = words[counter];
  counter = (counter + 1) % words.length; // loop back to start when reaching the end
}, 2000); // 2000ms = 2 seconds

ScrollReveal({
  reset: false,
  distance: "100px",
  duration: 1500,
});

// bio section
ScrollReveal().reveal("#bio-pic", { duration: 1500, origin: "bottom" });
ScrollReveal().reveal("#bio-title   ", {
  duration: 1500,
  origin: "left",
  delay: 1500,
});
ScrollReveal().reveal("#bio-text", {
  duration: 1500,
  origin: "left",
  delay: 2500,
});

// company section
ScrollReveal().reveal("#company-title", { duration: 1500, origin: "bottom" });
ScrollReveal().reveal("#company-logo", { duration: 1500, origin: "left" });
ScrollReveal().reveal("#company-text", { duration: 1500, origin: "right" });

// swot section
ScrollReveal().reveal("#swot-title", { duration: 1500, origin: "right" });
ScrollReveal().reveal("#row1", { duration: 1500, origin: "left", delay: 500 });
ScrollReveal().reveal("#row2", {
  duration: 1500,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".s", { duration: 1500, delay: 2000, distance: "0px" });
ScrollReveal().reveal(".w", { duration: 1500, delay: 2500, distance: "0px" });
ScrollReveal().reveal(".o", { duration: 1500, delay: 3000, distance: "0px" });
ScrollReveal().reveal(".t", { duration: 1500, delay: 3500, distance: "0px" });

// chart section
ScrollReveal().reveal("#survey-title", { duration: 1500, delay: 1000, distance: "0px" });
ScrollReveal().reveal("#survey-text", { duration: 1500, delay: 1500, distance: "0px" });
ScrollReveal().reveal("#survey-points", { duration: 1500, delay: 2000, distance: "0px" });
ScrollReveal().reveal("#survey-chart", { duration: 1500, delay: 2500, distance: "0px" });

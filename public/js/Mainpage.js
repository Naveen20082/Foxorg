// ///////////////////////////////////////////////////

const headingFade = document.querySelectorAll(".fade-in");
const imgfade = document.querySelectorAll(".fade-lf");
const linefade = document.querySelector(".fade-out");

const vanish1 = document.querySelectorAll(".vanish1");
const vanish2 = document.querySelectorAll(".vanish2");

const Dmag_img = document.querySelector("#Dmag_img");
const Dmag_heading = document.querySelector("#Dmag_heading");
const pg2_line = document.querySelectorAll(".pg2_line");

const appear_options = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
  rootMargin: "0px 0px -200px 0px",
};
const appearonscroll = new IntersectionObserver(function (entries, appearonscroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      Dmag_heading.classList.add("appear");
      Dmag_heading.classList.remove("vanish1");
      Dmag_img.classList.add("appearr");
      Dmag_img.classList.remove("vanish2");
      // console.log("dfd");
      appearonscroll.unobserve(entry.target);
    }
  });
}, appear_options);

headingFade.forEach((fader) => {
  appearonscroll.observe(fader);
});

imgfade.forEach((fader) => {
  appearonscroll.observe(fader);
});

//////////////////////////////////button ////////////////
const mute = document.querySelector(".mute");

mute.addEventListener("click", () => {
  const vid = document.querySelector(".vid");

  if (vid.muted == true) {
    vid.muted = false;
    mute.style.background = "url('./Images/Mainpage Images/images/volume.png') no-repeat center center/cover";
    mute.title = "Mute ";
  } else {
    vid.muted = true;
    mute.style.background = "url('./Images/Mainpage Images/SVG/mute.svg') no-repeat center center/cover";
    mute.title = " UnMute";
  }
});

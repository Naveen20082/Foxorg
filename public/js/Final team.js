var mem = document.querySelectorAll(".member1");

menuu = document.querySelector(".menubar");

document.querySelector(".menu").addEventListener("click", () => {
  console.log("hello world");
  document.querySelector(".menu2").style.display = "none";

  if (menuu.style.display != "flex") {
    menuu.style.display = "flex";
  } else {
    menuu.style.display = "none";
  }
});

menuu.addEventListener("mouseleave", () => {
  if (menuu.style.display != "flex") {
    menuu.style.display = "flex";
  } else {
    menuu.style.display = "none";
  }
});

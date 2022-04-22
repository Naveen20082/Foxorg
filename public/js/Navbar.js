const dark_light = document.querySelector(".dark-light");
const app = document.querySelector(".app");
const close = document.querySelector(".close");
const main_nav = document.querySelector(".main_nav");
const arrange = document.querySelector(".arrange");
const arrange_hide = document.querySelector(".arrange_hide");

const arr_hide = () => {
  if (!arrange.classList.contains("app_show")) {
    arrange.classList.add("app_show");
    arrange.classList.remove("app_hide");
  } else {
    arrange.classList.add("app_hide");
    arrange.classList.remove("app_show");
  }
};

const nav_gap = () => {
  const nav_btn = document.querySelector(".nav_btn");

  if (!nav_btn.classList.contains("nav_btn_rotate")) {
    nav_btn.classList.add("nav_btn_rotate");
    nav_btn.classList.remove("nav_btn_unrotate");
  } else {
    nav_btn.classList.remove("nav_btn_rotate");

    nav_btn.classList.add("nav_btn_unrotate");
  }
};

const nav_btn = document.querySelector(".nav_btn");
nav_btn.addEventListener("click", () => {
  nav_gap();
  arr_hide();
  arrange.style = "animation-duration: 1s;";
});

const click = document.querySelector(".nav_ser a");

click.addEventListener("click", () => {
  const click2 = document.querySelector(".nav_ser ul");
  // click2.classList.toggle("hide");
  if (click2.style.height == "0px") {
    click2.style.height = "fit-content";
    click2.style.transition = "all 2s ease";
    // click2.style.animationName = "dropdown";
  } else {
    click2.style.height = "0px";
  }
});

arrange_hide.addEventListener("click", () => {
  nav_gap();
  arr_hide();
});

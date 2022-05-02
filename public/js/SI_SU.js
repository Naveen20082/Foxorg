const signinBtn2 = document.querySelector(".nav_signin");
const signin = document.querySelector(".sip");
const signinCancel = document.querySelector(".cancel");
const signupbtn = document.querySelector(".nav_signup");
const signup = document.querySelector(".SP_main");
const signupCancel = document.querySelector(".SP_main_cancel");
const SI_hide = document.querySelector(".SI_hide");
const SU_hide = document.querySelector(".SU_hide");

signinBtn2.addEventListener("click", () => {
  console.log("signin");
  if (signin.style.display == "none") {
    signin.style.display = "flex";
  } else {
    signin.style.display = "none";
  }
});
signinCancel.addEventListener("click", () => {
  if (signin.style.display == "none") {
    signin.style.display = "flex";
  } else {
    signin.style.display = "none";
  }
});
signupbtn.addEventListener("click", () => {
  console.log("signup");
  if (signup.style.display == "none") {
    signup.style.display = "flex";
  } else {
    signup.style.display = "none";
  }
});
signupCancel.addEventListener("click", () => {
  if (signup.style.display == "none") {
    signup.style.display = "flex";
  } else {
    signup.style.display = "none";
  }
});

SI_hide.addEventListener("click", () => {
  signin.style.display = "none";
});

SU_hide.addEventListener("click", () => {
  signup.style.display = "none";
});

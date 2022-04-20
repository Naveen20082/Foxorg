(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-PFK425");

//////////////////////////////////////////////////////

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

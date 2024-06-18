window.addEventListener("scroll", function fixed() {
  let nav = document.querySelector("nav.nav");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 208) {
    nav.classList.add("navFixed");
  } else {
    nav.classList.remove("navFixed");
  }
});

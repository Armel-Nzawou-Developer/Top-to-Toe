
///Hamburger menu Javascript
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});




///Scroll to Top button

  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
      scrollBtn.classList.add("flex");
    } else {
      scrollBtn.classList.add("hidden");
      scrollBtn.classList.remove("flex");
    }
  });

  // Smooth scroll to top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

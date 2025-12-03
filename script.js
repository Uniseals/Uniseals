// script.js
document.addEventListener("DOMContentLoaded", () => {
  const seals = document.querySelectorAll(".seal-stamp");

  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate each seal one by one when Shop is visible
        seals.forEach((seal, i) => {
          setTimeout(() => {
            seal.classList.add("stamped");
          }, i * 300);
        });
      } else {
        // Reset when Shop goes out of view
        seals.forEach(seal => {
          seal.classList.remove("stamped");
        });
      }
    });
  }, options);

  const shop = document.querySelector("#shop");
  if (shop) observer.observe(shop);
});

// SCROLL NAV
window.addEventListener("scroll", () => {
    const nav = document.getElementById('nav');
    (window.scrollY > 40)
      ? nav.style.background = "#000"
      : nav.style.background = "transparent"
  })

// Tooltip de bootstrap //
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})

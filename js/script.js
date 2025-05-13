document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (href && !href.startsWith("#") && !this.hasAttribute("target")) {
      e.preventDefault();
      document.body.classList.add("fade-leave");

      setTimeout(() => {
        window.location.href = href;
      }, 400); // Match the CSS transition duration
    }
  });
});

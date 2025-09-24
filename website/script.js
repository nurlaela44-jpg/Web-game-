(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches && target.matches('a[href^="#"]')) {
      const id = target.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          if (nav) nav.classList.remove("open");
          if (navToggle) navToggle.setAttribute("aria-expanded", "false");
        }
      }
    }
  });

  const form = document.getElementById("contact-form");
  const statusEl = document.querySelector(".form-status");
  if (form && statusEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      if (!name || !email || !message) {
        statusEl.textContent = "Please fill out all fields.";
        return;
      }
      statusEl.textContent = "Thanks! This demo doesn't send email, but your input was captured.";
      form.reset();
    });
  }
})();
/* Helmholt HomeBuyers Inc. — site interactions */
(function () {
  "use strict";

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var mnav = document.querySelector(".mobile-nav");
  function closeNav() { if (mnav) { mnav.classList.remove("open"); document.body.style.overflow = ""; } }
  function openNav() { if (mnav) { mnav.classList.add("open"); document.body.style.overflow = "hidden"; } }
  if (toggle) toggle.addEventListener("click", openNav);
  if (mnav) {
    mnav.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]") || e.target.classList.contains("scrim")) closeNav();
    });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Animated counters ---- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (target % 1 !== 0) ? 1 : 0;
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- Contact / offer form (demo submit) ---- */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.querySelector(".form-success");
      var fields = form.querySelector(".form-fields");
      if (success && fields) {
        fields.style.display = "none";
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.textContent = "Thank you — we'll be in touch!"; btn.disabled = true; }
      }
    });
  });

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

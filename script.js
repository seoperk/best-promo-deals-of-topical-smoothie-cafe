function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleFAQ(el) {
  const p = el.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}

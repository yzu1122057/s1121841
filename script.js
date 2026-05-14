const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });
reveals.forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.float-main, .float-small, .crocs-logo, .crocs-box, .crocs-bag, .crocs-cup').forEach((el, i) => {
    el.style.translate = `0 ${Math.sin((y / 260) + i) * 8}px`;
  });
});

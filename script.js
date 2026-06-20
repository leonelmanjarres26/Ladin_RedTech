document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 50
    ? 'rgba(4, 15, 36, 0.98)'
    : 'rgba(4, 15, 36, 0.92)';
});

const hamburger = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const form     = e.target;
  const nombre   = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const email    = form.email.value.trim();
  const servicio = form.servicio.value;
  const mensaje  = form.mensaje.value.trim();

  const text = [
    `Hola RedTech! 👋`,
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Email: ${email}`,
    `Servicio: ${servicio}`,
    mensaje ? `Mensaje: ${mensaje}` : null
  ].filter(Boolean).join('\n');

  // Reemplaza TUNUMERO con tu número colombiano sin el + (ej: 573001234567)
  const waNumber = '57TUNUMERO';
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '¡Enviado! Abriendo WhatsApp...';
  btn.style.background = '#2a9d8f';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Solicitar diagnóstico gratis';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 4000);
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(4, 15, 36, 0.98)';
    } else {
      nav.style.background = 'rgba(4, 15, 36, 0.92)';
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Solicitud enviada! Te contactamos pronto.';
    btn.style.background = '#2a9d8f';
    btn.disabled = true;
  }
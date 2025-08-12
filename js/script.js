document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();           
        form.reportValidity();        
        const firstInvalid = form.querySelector(':invalid');
        firstInvalid && firstInvalid.focus();
        return;
      }
      e.preventDefault();              
      alert('✅ Datos enviados (demo). En la próxima etapa lo guardamos de verdad.');
      form.reset();
    });
  });

  
  document.querySelectorAll('.card img').forEach((img) => {
    img.style.transition = 'transform 0.25s ease';
    img.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.05)'; });
    img.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });
  });

  
  document.querySelectorAll('.card .btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.closest('.card')?.querySelector('h3')?.textContent?.trim() || 'Producto';
      alert(`🛒 "${title}" agregado (demo).`);
    });
  });
});

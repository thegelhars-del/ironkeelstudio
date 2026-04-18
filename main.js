// Iron Keel Studio — shared client JS

// Mobile nav toggle
(function initMobileNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close on link click (mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();

// Notify-me form handling (Formspree)
// Replace FORMSPREE_ENDPOINT_PLACEHOLDER with the real endpoint once Pedro creates the form.
(function initNotifyForms() {
  const forms = document.querySelectorAll('form[data-notify]');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      const error = form.querySelector('.form-error');
      success && success.classList.remove('visible');
      error && error.classList.remove('visible');

      const endpoint = form.getAttribute('action');
      if (!endpoint || endpoint.includes('FORMSPREE_ENDPOINT_PLACEHOLDER')) {
        if (error) {
          error.textContent = 'Signup not yet wired — check back soon.';
          error.classList.add('visible');
        }
        return;
      }

      const data = new FormData(form);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (success) {
            success.textContent = 'You\u2019re on the list. We\u2019ll be in touch.';
            success.classList.add('visible');
          }
        } else {
          if (error) {
            error.textContent = 'Something went wrong. Try again in a moment.';
            error.classList.add('visible');
          }
        }
      } catch (err) {
        if (error) {
          error.textContent = 'Connection issue. Try again in a moment.';
          error.classList.add('visible');
        }
      }
    });
  });
})();

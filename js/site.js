// Hello People Co. site scripts: mobile menu + Formspree forms (no dependencies)
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  document.querySelectorAll('form.form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var button = form.querySelector('button[type="submit"]');
      function say(msg, isError) {
        status.textContent = msg;
        status.classList.toggle('is-error', !!isError);
      }
      if (form.action.indexOf('REPLACE_WITH') !== -1) {
        say('This form is not connected yet. Please email info@hellopeopleco.com.au in the meantime.', true);
        return;
      }
      button.disabled = true;
      say('Sending...', false);
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          say(form.getAttribute('data-done') || 'Thanks! Your message is on its way.', false);
        } else {
          say('Something went wrong. Please try again or email info@hellopeopleco.com.au.', true);
        }
      }).catch(function () {
        say('Something went wrong. Please try again or email info@hellopeopleco.com.au.', true);
      }).then(function () { button.disabled = false; });
    });
  });
})();

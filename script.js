const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#project-form');
const formNote = document.querySelector('#form-note');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent(`Project enquiry — ${data.get('service')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`
  );
  formNote.classList.add('is-ready');
  formNote.textContent = 'Your email draft is ready. Review it in your email app before sending.';
  window.location.href = `mailto:seanamon6@gmail.com?subject=${subject}&body=${body}`;
});

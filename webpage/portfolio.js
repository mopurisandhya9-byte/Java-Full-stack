const themeButton = document.getElementById('themeButton');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeButton.textContent = body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
});

// Sample services data
const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'Data Analytics'
];

// Populate services list
const serviceList = document.getElementById('service-list');
services.forEach(service => {
  const li = document.createElement('li');
  li.textContent = service;
  serviceList.appendChild(li);
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you would typically send this data to a server
  console.log('Form submitted:', { name, email, message });
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});
const hamburger = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', function() {
	navLinks.classList.toggle('open');
});
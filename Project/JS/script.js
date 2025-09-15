// Header: hamburger menu toggle for mobiles
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav li a');

	// Toggle the menu on hamburger click
	hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Toggle ARIA-expanded attribute
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded); // Toggle the state of ARIA-expanded
});

	// Close the menu when a link is clicked (mobiles)
	navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false'); // Ensure the menu is closed
        }
    });
});

// header:sticky
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});



//Gallery filters

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryImages = document.querySelectorAll('.gallery-images figure');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = button.getAttribute('data-filter');

            // Show all images if 'all' is chosen
            galleryImages.forEach(image => {
                if (filterValue === 'all' || image.classList.contains(filterValue)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });

            // active class to the chosen button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


// Accessibility: ARIA attributes for better screen reader support
hamburger.setAttribute('aria-label', 'Toggle navigation menu');
hamburger.setAttribute('aria-expanded', 'false'); // originale, the menu is not expanded

// focus styles
navLinks.forEach(link => {
    link.setAttribute('tabindex', '0');  
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #b54c21'; 
    });
    link.addEventListener('blur', () => {
        link.style.outline = ''; 
    });
});

//keyboard events for the Hamburger Menu ('Enter' or 'Space')
hamburger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        hamburger.click(); 
    }
});

//Email Validation

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Get the email input field, error message div, and form submission button
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit');  
const emailHelp = document.createElement('div');  
emailHelp.style.color = 'red';
emailHelp.setAttribute('id', 'emailHelp');
emailInput.parentNode.appendChild(emailHelp);  

// event listener to validate email when the user submits the form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const email = emailInput.value;
    
	//clear privous error message
    emailHelp.textContent = '';

    // If email is invalid, show an error message and prevent  submission
    if (!isValidEmail(email)) {
        event.preventDefault(); 
        emailHelp.textContent = 'Please enter a valid email address.';
    } else {
        alert('Your email has been successfully submitted!');
    }
});
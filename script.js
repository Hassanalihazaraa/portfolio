// Toggle dark mode, dark mode ui adjustment needs to be madez still this is only for the switch button
document.getElementById('toggleSwitch').addEventListener('change', function() {
  if (this.checked) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#ffffff"
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333"
  }
});

// Toggle mobile menu
document.getElementById('navbar-toggle').addEventListener('click', function() {
  const navbarLinks = document.getElementById('navbar-links');
  navbarLinks.classList.toggle('active');
  this.classList.toggle('active');
});

// About me section image slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll('.slider-container img');
  let dots = document.querySelectorAll('.slider-dots .dot');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach((slide, index) => {
    slide.style.display = index + 1 === slideIndex ? 'block' : 'none';
  });

  dots.forEach((dot, index) => {
    dot.className = dot.className.replace(' active', '');

    if (index + 1 === slideIndex) {
      dot.className += ' active';
    }
  });
}

// Projects section
const next = document.querySelector(".carousel__btn--next"),
back = document.querySelector(".carousel__btn--back"),
carousel = document.querySelector(".carousel__cards");
let angle = 0;

next.addEventListener("click", () => {
  angle -= 45;
  carousel.style.transform = `translateZ(-5rem) rotateY(${angle}deg)`;
});

back.addEventListener("click", () => {
  angle += 45;
  carousel.style.transform = `translateZ(-5rem) rotateY(${angle}deg)`;
});


// Contact form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Get form values
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    let isValid = true;
    
    if (!firstname) {
      document.getElementById('firstnameError').textContent = 'Firstname is required.';
      isValid = false;
    }
    
    if (!lastname) {
      document.getElementById('lastnameError').textContent = 'Lastname is required.';
      isValid = false;
    }
    
    if (!email || !validateEmail(email)) {
      document.getElementById('emailError').textContent = 'A valid email is required.';
      isValid = false;
    }
    
    if (!phone) {
      document.getElementById('phoneError').textContent = 'Phone number is required.';
      isValid = false;
    }
    
    if (!message) {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
    }
    
    // Save to local storage if valid
    if (isValid) {
      const formData = {
        firstname,
        lastname,
        email,
        phone,
        message
      };
      
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      alert('Form data saved successfully!');
      form.reset(); // Clear the form fields
    }
  });
  
  // Email regex validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
});
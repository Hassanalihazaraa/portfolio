// Toggle dark mode, dark mode ui adjustment needs to be madez still this is only for the switch button
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navbarLinks = document.getElementById('navbar-links');
  const themeSwitch = document.getElementById('theme-switch');

  hamburgerMenu.addEventListener('click', function () {
      navbarLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('open');
  });

  themeSwitch.addEventListener('change', function () {
      if (themeSwitch.checked) {
          document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg');
          document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--dark-text');
          document.querySelector('.navbar').style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg');
      } else {
          document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light-bg');
          document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--light-text');
          document.querySelector('.navbar').style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light-bg');
      }
  });
});

// About me section image slider
let slideIndex = 1;
displaySlides(slideIndex);

function currentSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  let slides = document.querySelectorAll('.carousel-container img');
  let dots = document.querySelectorAll('.carousel-dots .dot');

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

// Project section
document.addEventListener("DOMContentLoaded", () => {
  const projectsData = [
    {
      image: "images/project-1.png",
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project1",
      linkSource: "https://example.com/project1",
      labels: ["HTML/CSS", "Ruby on Rails", "PHP"]
    },
    {
      image: "images/project-2.jpeg",
      name: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project2",
      linkSource: "https://example.com/project2",
      labels: ["HTML/CSS", "Java", "JavaScript"]
    },
    {
      image: "images/project-3.png",
      name: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project3",
      linkSource: "https://example.com/project3",
      labels: ["HTML/CSS", "Python"]
    },
    {
      image: "images/project-4.jpeg",
      name: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project4",
      linkSource: "https://example.com/project4",
      labels: ["HTML/CSS", "Ruby on Rails", "JavaScript"]
    },
    {
      image: "images/project-5.png",
      name: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project5",
      linkSource: "https://example.com/project5",
      labels: ["HTML/CSS", "JavaScript"]
    },
    {
      image: "images/project-3.png",
      name: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://example.com/project6",
      linkSource: "https://example.com/project6",
      labels: ["HTML/CSS", "Ruby on Rails", "JavaScript"]
    }
  ];

  const carouselCards = document.querySelector('.carousel__cards');
  const nextBtn = document.querySelector('.carousel__btn--next');
  const backBtn = document.querySelector('.carousel__btn--back');
  const modal = document.getElementById("projectModal");
  const modalClose = document.querySelector(".close");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const modalLabels = document.getElementById("modalLabels");

  let angle = 0;

  // Create carousel cards dynamically for the main carousel
  projectsData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'carousel__card';
    card.innerHTML = `<img class="carousel__img" src="${project.image}" alt="${project.name}">`;
    card.addEventListener("click", () => openModal(index));
    carouselCards.appendChild(card);
  });

  // Apply the rotation transformations for each card in the main carousel
  const cards = document.querySelectorAll('.carousel__card');
  cards.forEach((card, index) => {
    const rotationAngle = index * 60;
    card.style.transform = `rotateY(${rotationAngle}deg) translateZ(25rem)`;
  });

  // Function to rotate the main carousel when the next button is clicked
  nextBtn.addEventListener("click", () => {
    angle -= 60;
    carouselCards.style.transform = `translateZ(-5rem) rotateY(${angle}deg)`;
  });

  // Function to rotate the main carousel when the back button is clicked
  backBtn.addEventListener("click", () => {
    angle += 60;
    carouselCards.style.transform = `translateZ(-5rem) rotateY(${angle}deg)`;
  });

  // Function to open the modal and populate it with the selected project data
  function openModal(index) {
    const project = projectsData[index];
    modalTitle.textContent = project.name;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;

    // Create and display the image for the modal
    const modalImage = document.createElement('img');
    modalImage.className = 'modal-img';
    modalImage.src = project.image;
    modalImage.alt = project.name;



    // Clear previous content and set the new image
    const imageContainer = document.querySelector('.modal-image-container');
    imageContainer.innerHTML = '';
    const viewProjectLinkLive = `<a class="project-link" href="${project.link}" target="_blank">View Source <i class='bx bx-link-external' ></i></a>`;
    imageContainer.innerHTML = viewProjectLinkLive;
    imageContainer.appendChild(modalImage);


    // Populate labels
    modalLabels.innerHTML = project.labels.map(label => `<span class="label">${label}</span>`).join(' ');
    const viewProjectLink = `<a class="project-source" href="${project.linkSource}" target="_blank">View Source <i class='bx bxl-github'></i></a>`;
    modalLabels.innerHTML += viewProjectLink;

    // Open the modal
    modal.style.display = "block";
  }

  // Function to close the modal
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Function to close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

// Contact form
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById("contactForm");
  const formElements = contactForm.elements;
  const formAlert = document.createElement('div');
  formAlert.id = "formAlert";
  contactForm.appendChild(formAlert);

  // Load data from local storage
  const loadFormData = () => {
    const savedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedData) {
      Object.keys(savedData).forEach(key => {
        const input = document.getElementById(key);
        if (input) {
          input.value = savedData[key];
        }
      });
    }
  };

  // Save data to local storage
  const saveFormData = () => {
    const formData = {};
    Array.from(formElements).forEach(element => {
      if (element.name && element.value !== "") {
        formData[element.name] = element.value;
      }
    });
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;

    // Validate first name
    const firstname = document.getElementById("firstname");
    const firstnameError = document.getElementById("firstnameError");
    if (firstname.value.length > 30) {
      firstnameError.textContent = "Firstname must be 30 characters or less.";
      isValid = false;
    } else {
      firstnameError.textContent = "";
    }

    // Validate last name
    const lastname = document.getElementById("lastname");
    const lastnameError = document.getElementById("lastnameError");
    if (lastname.value.length > 30) {
      lastnameError.textContent = "Lastname must be 30 characters or less.";
      isValid = false;
    } else {
      lastnameError.textContent = "";
    }

    // Validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value) || email.value !== email.value.toLowerCase()) {
      emailError.textContent = "Please enter a valid email address in lowercase.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate phone number
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone.value)) {
      phoneError.textContent = "Please enter a valid phone number.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Validate message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.length > 500) {
      messageError.textContent = "Message must be 500 characters or less.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    return isValid;
  };

  // Event listener for form submission
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid
      formAlert.className = "form-alert success";
      formAlert.textContent = "Form submitted successfully!";
      formAlert.style.display = "block";
      
      // Clear local storage upon successful submission
      localStorage.removeItem('contactFormData');
      contactForm.reset(); // Optionally clear the form
      
    } else {
      // Show validation error
      formAlert.className = "form-alert error";
      formAlert.textContent = "Please fill in the form correctly.";
      formAlert.style.display = "block";
    }
  });

  // Event listeners for input changes
  Array.from(formElements).forEach(element => {
    if (element.name) {
      element.addEventListener("input", () => {
        if (validateForm()) {
          saveFormData(); // Save only if the form is valid
        }
      });
    }
  });

  // Load form data on page load
  loadFormData();
});
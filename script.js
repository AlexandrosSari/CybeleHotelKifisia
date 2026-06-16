const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 5 seconds
function startSlider() {
  interval = setInterval(nextSlide, 5000);
}

// Dot click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(index);
    startSlider();
  });
});

startSlider();


// ROOM SLIDER
document.querySelectorAll(".room-card").forEach(card => {
    const slides = card.querySelectorAll(".room-slide");
    const next = card.querySelector(".next");
    const prev = card.querySelector(".prev");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});


//COOKIES

const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const rejectBtn = document.getElementById('reject-cookies');
const locationDiv = document.querySelector('.location');

//check if user already accepted
const cookieConsent = localStorage.getItem('cookieConsent');

if (cookieConsent === 'accepted') {
    loadMap();
    banner.style.display = 'none';
} else if (cookieConsent === 'rejected') {
    locationDiv.innerHTML = '<p>Ο χάρτης δεν φορτώθηκε λόγω απόρριψης cookies.</p>';
    banner.style.display = 'none';
}

//event for acceptance
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    loadMap();
    banner.style.display = 'none';
});

//event for rejection
rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    locationDiv.innerHTML = '<p>Ο χάρτης δεν φορτώθηκε λόγω απόρριψης cookies.</p>';
    banner.style.display = 'none';
});

//load map
function loadMap() {
    locationDiv.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.8340975209817!2d23.7959846!3d38.07424459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f3c76a57f2d%3A0x75dddb244b7ed359!2sCybele%20Guest%20Accommodation!5e0!3m2!1sen!2sgr!4v1778838786002!5m2!1sen!2sgr" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
}

//BURGER
document.addEventListener("DOMContentLoaded", () => {

    const toggleBurger = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar-options a");

    // Άνοιγμα / κλείσιμο burger
    toggleBurger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Κλείσιμο όταν πατάς link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

});
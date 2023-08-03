// deklarasi
const name = document.getElementById('name');
const email = document.getElementById('email');
const interested = document.getElementById('interested');
const submitButton = document.getElementById('submitButton');

const nameModal = document.getElementById('name-modal');
const emailModal = document.getElementById('email-modal');
const interestedModal = document.getElementById('interested-modal');

const modal = document.getElementById('myModal');
const button = document.getElementById('submitButton');
const span = document.getElementsByClassName('close')[0];

//form c0ntact us
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (name.value == '' || email.value == '' || interested.value == '') {
    alert('Masukkan data dengan lengkap!');
  } else {
    modal.style.display = 'block';
    nameModal.innerText = name.value;
    emailModal.innerText = email.value;
    interestedModal.innerText = interested.value;
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('my-slides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Modal

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

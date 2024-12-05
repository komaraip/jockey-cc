// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Events Sections
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1, intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
    clearInterval(intervalId);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

function validateForm(event){
    event.preventDefault();
    contactForm = document.getElementById("contactForm");
    fullname = document.getElementById("fullname");
    mobile = document.getElementById("mobile");
    email = document.getElementById("email");
    contMobile = document.getElementById("contMobile")
    contEmail = document.getElementById("contEmail")
    message = document.getElementById("message")
    messageSub = document.getElementById("messageSub")
    error = document.getElementById("error");

    if(fullname.value.length < 5){
        error.innerHTML = "Fullname must be at least 5 characters";
    } else if(isNaN(mobile.value)) {
        error.innerHTML = "Mobile number must be a number";
    } else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must ends with '@gmail.com'";
    } else if(mobile.value == '') {
        error.innerHTML = "Mobile number must be fill in";
    } else if(messageSub.value == ''){
        error.innerHTML = "Email Subject must be fill in";
    } else if(message.value == ''){
        error.innerHTML = "Message must be fill in";
    } else if(!(contMobile.checked || contEmail.checked)){
        error.innerHTML = "Preferred contact method must be picked";
    } else {
        error.innerHTML = "Successful";
        contactForm.submit();
    }
}

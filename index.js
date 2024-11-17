const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const display = document.querySelectorAll('.display');
const slides = document.querySelectorAll('.slide-text');
const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.showAnswer');


const openNav = () => {
    menu.style.height = "100vh";
    openMenu.style.display = "none";
}

const closeNav = () => {
    menu.style.height = 0;
    openMenu.style.display = "flex";
}

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);


let slideIndex = 1;
showSlides(slideIndex);


const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("display");
  let tabs = document.getElementsByClassName("myTabs");
  let texts = document.getElementsByClassName("slide-text");

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");  
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";
  }
  slides[slideIndex-1].classList.add("active");  
  tabs[slideIndex-1].style.display = "flex"; 
  texts[slideIndex-1].style.display = "flex";  
}


answers.forEach((answer) => {
    answer.style.display = 'none';
});

questions.forEach((question, index) => {
  question.setAttribute("role", "button");
  question.setAttribute("aria-expanded", "false");
  question.setAttribute("tabindex", "0"); 

  question.addEventListener("click", () => toggleAnswer(index));
  question.addEventListener("keypress", (event) => handleKeyPress(event, index));
  question.addEventListener("keydown", (event) => handleNavigation(event, index));
});
    
const toggleAnswer = (index) => {
    const question = questions[index];
    const answer = document.getElementById(`answer${index}`);
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    const arrows = document.querySelectorAll('.flip');
    const arrow = arrows[index];

    question.setAttribute("aria-expanded", !isExpanded);

    answer.style.display = isExpanded ? "none" : "flex";
    arrow.style.transform = isExpanded ? "none" : "rotate(180deg)";
    arrow.style.filter = isExpanded ? "none" : "hue-rotate(100deg)";

};

const handleKeyPress = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAnswer(index);
    }
};

const handleNavigation = (event, index) => {
    if (event.key === "ArrowUp") {
        navigateTo(index - 1);
    } else if (event.key === "ArrowDown") {
        navigateTo(index + 1);
    }
};

const navigateTo = (index) => {
    if (index >= 0 && index < questions.length) {
        questions[index].focus();
    }
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();
  
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const formDiv = emailInput.closest('.form');
  
    if (!validateEmail(emailInput.value)) {

      emailError.classList.remove('hidden');
      emailError.classList.add('block');
      emailInput.classList.add("border");
      formDiv.classList.add('active');
    } else {
      emailError.classList.add('hidden');
      formDiv.classList.remove('active');
      alert('Form submitted successfully!');
      // document.getElementById('form').submit();
    }
  });
  
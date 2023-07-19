console.log('Hello World!');
// navBar
 const header =document.querySelector('#header').offsetHeight;
const menuIcon = document.querySelector('#menuBtn');
const menuBar = document.querySelector('#navBar');
const headerHeight = menuBar.style.setProperty('--nav-h', String(header).concat('px'));
const welCome = document.querySelector('#welcome');  
const faCult = document.querySelector('#faculty');  

console.log(header);

function showMenu() {
  if (menuBar.style.right === '-100vw') {
    menuBar.style.right = '0vw';
  } 
  else {
    menuBar.style.right = '-100vw';
  }
};

// welcome slide

const sliderContainer = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const pagination = document.querySelector('.pagination');

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Function to display the current slide
const showSlide = () => {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Function to update pagination
const updatePagination = () => {
  pagination.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentSlide) {
      dot.classList.add('active');
    }
    pagination.appendChild(dot);
  }
};

// Function to handle slide navigation
const goToSlide = (slideIndex) => {
  currentSlide = slideIndex;
  showSlide();
  updatePagination();
};

// Event listeners for previous and next arrows
prevArrow.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide();
  updatePagination();
});

nextArrow.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide();
  updatePagination();
});

// Event listener for pagination dots
pagination.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    const dotIndex = Array.from(pagination.children).indexOf(e.target);
    goToSlide(dotIndex);
  }
});

// Touch event listeners
sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Function to handle touch swipe
const handleSwipe = () => {
  const swipeThreshold = 50; // Adjust the threshold as needed

  if (touchEndX - touchStartX > swipeThreshold) {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  } else if (touchStartX - touchEndX > swipeThreshold) {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  }

  showSlide();
  updatePagination();
};

// Auto-scrolling
setInterval(() => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide();
  updatePagination();
}, 15000);

// Initial setup
showSlide();
updatePagination();


// Second slide faculties

const sliderContainer1 = document.querySelector('.slider-container1');
const slides1 = Array.from(document.querySelectorAll('.slide1'));
const prevArrow1 = document.querySelector('.prev-arrow1');
const nextArrow1 = document.querySelector('.next-arrow1');
const pagination1 = document.querySelector('.pagination1');

let currentSlide1 = 0;
let touchStartX1 = 0;
let touchEndX1 = 0;

// Function to display the current slide
const showSlidE = () => {
  sliderContainer1.style.transform = `translateX(-${currentSlide1 * 100}%)`;
};

// Function to update pagination
const updatePaginatioN = () => {
  pagination1.innerHTML = '';
  for (let i = 0; i < slides1.length; i++) {
    const dot1 = document.createElement('span');
    dot1.classList.add('dot1');
    if (i === currentSlide1) {
      dot1.classList.add('active1');
    }
    pagination1.appendChild(dot1);
  }
};

// Function to handle slide navigation
const goToSlide1 = (slide1Index) => {
  currentSlide1 = slide1Index;
  showSlidE();
  updatePaginatioN();
};

// Event listeners for previous and next arrows
prevArrow1.addEventListener('click', () => {
  currentSlide1 = (currentSlide1 === 0) ? slides1.length - 1 : currentSlide1 - 1;
  showSlidE();
  updatePaginatioN();
});

nextArrow1.addEventListener('click', () => {
  currentSlide1 = (currentSlide1 === slides1.length - 1) ? 0 : currentSlide1 + 1;
  showSlidE();
  updatePaginatioN();
});

// Event listener for pagination dots
pagination1.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot1')) {
    const dot1Index = Array.from(pagination1.children).indexOf(e.target);
    goToSlide1(dot1Index);
  }
});

// Touch event listeners
sliderContainer1.addEventListener('touchstart', (e) => {
  touchStartX1 = e.touches[0].clientX;
});

sliderContainer1.addEventListener('touchend', (e) => {
  touchEndX1 = e.changedTouches[0].clientX;
  handleSwipe1();
});

// Function to handle touch swipe
const handleSwipe1 = () => {
  const swipeThreshold1 = 50; // Adjust the threshold as needed

  if (touchEndX1 - touchStartX1 > swipeThreshold1) {
    currentSlide1 = (currentSlide1 === 0) ? slides1.length - 1 : currentSlide1 - 1;
  } else if (touchStartX1 - touchEndX1 > swipeThreshold1) {
    currentSlide1 = (currentSlide1 === slides1.length - 1) ? 0 : currentSlide1 + 1;
  }

  showSlidE();
  updatePaginatioN();
};

// Auto-scrolling
setInterval(() => {
  currentSlide1 = (currentSlide1 === slides1.length - 1) ? 0 : currentSlide1 + 1;
  showSlidE();
  updatePaginatioN();
}, 15000);

// Initial setup
showSlidE();
updatePaginatioN();






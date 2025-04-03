
const typingElement = document.querySelector('.typing');
const phrases = ['Aspiring Data Scientist', 'Data Visualization Enthusiast', 'ML & Analytics Lover'];
let index = 0;
let i = 0;
let current = '';
let isDeleting = false;

function type() {
  if (index >= phrases.length) index = 0;
  current = phrases[index];
  typingElement.innerHTML = current.substring(0, i);

  if (!isDeleting) {
    if (i < current.length) {
      i++;
      setTimeout(type, 100);
    } else {
      isDeleting = true;
      setTimeout(type, 1500);
    }
  } else {
    if (i > 0) {
      i--;
      setTimeout(type, 50);
    } else {
      isDeleting = false;
      index++;
      setTimeout(type, 500);
    }
  }
}

type();

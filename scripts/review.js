const reviews = localStorage.getItem('reviews');
const counterText = document.getElementById('counter');

if (!reviews) {
  localStorage.setItem('reviews', 1);
} else {
  const counter = 1;
  localStorage.setItem('reviews', Number(reviews) + counter);
}

counterText.innerHTML = `<p>Reviews you've made so far: ${localStorage.getItem('reviews')}</p>`;
// TODO: Add counter code here.

const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
  countSpan.innerText++;
  console.log('increment button clicked');
});
decrementButton.addEventListener('click', () => {
  countSpan.innerText--;
  console.log('decrement button clicked');
});

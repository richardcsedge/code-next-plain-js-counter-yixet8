// TODO: Add counter code here.

const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 10;
countSpan.innerText = count;

const updateUi = () => {
  console.log({ count });
  countSpan.innerText = count;
};

incrementButton.addEventListener('click', () => {
  count++;
  updateUi();
  console.log('increment button clicked');
});

decrementButton.addEventListener('click', () => {
  count--;
  updateUi();
  console.log('decrement button clicked');
});

/** I have found this code also works:
 * 
incrementButton.addEventListener('click', () => {
  countSpan.innerText++;
  console.log('increment button clicked');
});

decrementButton.addEventListener('click', () => {
  countSpan.innerText--;
  console.log('decrement button clicked');
});
 */

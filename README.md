# code-next-plain-js-counter-yixet8

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-plain-js-counter-yixet8)

A lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

In this lesson, engineers will

- build a counter component using plain JavaScript
- identify what is difficult about developing with plain JavaScript

## Counter component

### YOUR TURN

Make a counter component in plain JavaScript.

- A display that shows the user what the `count` is at. The `count` should be initialized at 0.
- A decrement button that subtracts 1 from the current `count` and updates the display.
- An increment button that adds 1 to the current `count` and updates the display.

#### Recipes

##### Get single element matching ID

```js
const countSpan = document.getElementById('count');
```

##### Update inner text of element

```js
countSpan.innerText = 42;
```

##### Add click handler

```js
incrementButton.addEventListener('click', () => {
  console.log('increment button clicked');
});
```

### Reflection

- What was difficult about creating a counter component in plain JavaScript?
- What are the things we were responsible of keeping track of?

### More on this topics

- [MDN Intro to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
- [MDN addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

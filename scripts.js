/* Challenge : Using Shoelace Components to build the Tally App*/

const html = {
  key: {
    number: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]'),
    reset: document.querySelector('[data-key="reset"]'),
  },
  reset: {
    overlay: document.querySelector('[data-reset-overlay]')
  }
};



html.key.subtract.addEventListener('click', () => {
  const newValue = parseInt((html.key.number.value), 10)- 1;
  html.key.number.value = newValue;
});

html.key.add.addEventListener('click', () => {
  const newValue = parseInt((html.key.number.value), 10) + 1;
  html.key.number.value = newValue;
});

html.key.reset.addEventListener('click', () => {
  html.key.number.value = 0;

  html.reset.overlay.open() = true;
});
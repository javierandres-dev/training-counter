const d = document,
  $display = d.getElementById('display');

let amount = 0;

d.addEventListener('DOMContentLoaded', () => {
  d.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      if (e.target.name === 'decrease') amount--;
      if (e.target.name === 'reset') amount = 0;
      if (e.target.name === 'increase') amount++;
      updateDisplay(amount);
    }
  });
});

const updateDisplay = () => {
  if (amount > 0) {
    $display.className = 'display positive';
  } else if (amount < 0) {
    $display.className = 'display negative';
  } else {
    $display.className = 'display zero';
  }
  $display.textContent = amount;
};

updateDisplay();

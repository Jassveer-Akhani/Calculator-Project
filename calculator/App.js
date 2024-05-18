function appendToDisplay(value) {
  var display = document.getElementById('display');
  if (display.textContent === '0' && value !== '.') {
      display.textContent = '';
  }
  display.textContent += value;
  document.getElementById('history').textContent = display.textContent;
}

function clearDisplay() {
  document.getElementById('display').textContent = '0';
  document.getElementById('history').textContent = '0';
}

function calculate() {
  var display = document.getElementById('display');
  var result = eval(display.textContent);
  display.textContent = result;
  document.getElementById('history').textContent = display.textContent;
}
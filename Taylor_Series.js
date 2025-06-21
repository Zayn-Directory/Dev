function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function sin(x, limit) {
  if (x == 0) return 0;
  
  let value = 0;
  for (let i = 0; i < limit; i++) {
    const term = ((-1) ** i) * (x ** (2 * i + 1)) / factorial(2 * i + 1);
    value += term;
  }

  return value;
}

function calculateSine() {
  const xInput = document.getElementById('xValue');
  const termsInput = document.getElementById('terms');
  const resultDiv = document.getElementById('result');
  const taylorResultSpan = document.getElementById('taylorResult');

  const x = parseFloat(xInput.value);
  const terms = parseInt(termsInput.value);

  if (isNaN(x)) {
    alert('Please enter a valid number for x');
    return;
  }

  if (isNaN(terms) || terms < 1) {
    alert('Please enter a valid number of terms (at least 1)');
    return;
  }

  try {
    const taylorResult = sin(x, terms);

    taylorResultSpan.textContent = taylorResult.toFixed(10);

    resultDiv.style.display = 'block';
    
  } catch (error) {
    alert('Error calculating sine: ' + error.message);
  }
}

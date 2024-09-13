document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user inputs
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;

  // Calculate BMI
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  // Display the result
  const bmiResult = document.getElementById('bmiResult');
  const bmiCategory = document.getElementById('bmiCategory');

  bmiResult.textContent = `Your BMI: ${bmi}`;

  // Determine BMI category
  if (bmi < 18.5) {
      bmiCategory.textContent = 'Category: Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory.textContent = 'Category: Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory.textContent = 'Category: Overweight';
  } else {
      bmiCategory.textContent = 'Category: Obesity';
  }
});

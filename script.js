const container = document.querySelector('.user-sign-in-container');

const loginContainer = document.querySelector('.form-box.login');

const registerContainer = document.querySelector('.form-box.register');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');


const btnPopup = document.querySelector('.login-btn');

const btnClose = document.querySelectorAll('.icon-close');





registerLink.addEventListener('click', ()=> {
  container.classList.add('active');
  loginContainer.classList.add('active');
  registerContainer.classList.add('active');

  loginContainer.classList.remove('deactivate');
  registerContainer.classList.remove('deactivate');
});

loginLink.addEventListener('click', ()=> {
  container.classList.remove('active');
  loginContainer.classList.add('deactivate');
  registerContainer.classList.add('deactivate');

  loginContainer.classList.remove('active');
  registerContainer.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
  container.classList.add('active-popup');
  container.classList.remove('remove-popup');
});



btnClose.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    container.classList.add('remove-popup');
    container.classList.remove('active-popup');
  });
});


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 600) {
    container.classList.add('remove-popup');
    container.classList.remove('active-popup');
  }

  
});




function calculateBMI() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var gender = document.getElementById('gender').value;
  
  if (weight > 0 && height > 0) {
      var bmi = weight / ((height / 100) * (height / 100));
      var interpretation = interpretBMI(bmi, gender);
      document.getElementById('result').innerHTML = bmi.toFixed(2);
      document.getElementById('interpretation').innerHTML = interpretation;
  } else {
      alert("Please enter valid values for weight and height.");
  }
} 


function interpretBMI(bmi, gender) {
  if (gender === 'male') {
      if (bmi < 18.5) {
          return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          return 'healthy';
      } else if (bmi >= 25 && bmi < 29.9) {
          return 'Overweight';
      } else {
          return 'Obese';
      }
  } else if (gender === 'female') {
      if (bmi < 18.5) {
          return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          return 'healthy';
      } else if (bmi >= 25 && bmi < 29.9) {
          return 'Overweight';
      } else {
          return 'Obese';
      }
    }
  }
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmailValue = document.querySelector('input[name=email]');
const inputTextValue = document.querySelector('textarea[name=message]');
let formData = {};
const KEEP_TEXT = 'feedback-form-state';

form.addEventListener('input', throttle((evt => {
  evt.preventDefault();
  formData = {
    email: inputEmailValue.value,
    message: inputTextValue.value,
  };
  localStorage.setItem(KEEP_TEXT, JSON.stringify(formData))
}), 500));

form.addEventListener('submit', (evt => {
  evt.preventDefault();
  if (inputEmailValue.value !== '' || inputTextValue.value !== '') {
    console.log(formData);
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEEP_TEXT);
}));

savedInputData();

function savedInputData() {
  const inputData = JSON.parse(localStorage.getItem(KEEP_TEXT));
  if (inputData) {
    inputEmailValue.value = inputData.email;
    inputTextValue.value = inputData.message;
  };
};
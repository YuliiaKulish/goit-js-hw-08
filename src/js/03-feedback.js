import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmailValue = document.querySelector(input);
const inputTextValue = document.querySelector(textarea);
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
  console.log(formData);
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
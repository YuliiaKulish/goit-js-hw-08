import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let formData = {};
const KEEP_TEXT = 'feedback-form-state';

form.addEventListener('submit', (evt => {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(KEEP_TEXT)
}));

form.addEventListener('input', throttle((evt => {
  evt.preventDefault();
  formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(KEEP_TEXT, JSON.stringify(formData))
}), 500));

savedInputData();

function savedInputData() {
  const inputData = JSON.parse(localStorage.getItem(KEEP_TEXT));
  if (inputData) {
    form.elements.email.value = inputData.email;
    form.elements.message.value = inputData.message;
  }
};
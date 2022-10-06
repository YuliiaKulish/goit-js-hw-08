import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmailValue = document.querySelector('input[name=email]');
const inputTextValue = document.querySelector('textarea[name=message]');
const KEEP_TEXT = 'feedback-form-state';

form.addEventListener('input', throttle((evt => {
  evt.preventDefault();
  const objForm = {
    email: inputEmailValue.value,
    message: inputTextValue.value,
  };
  localStorage.setItem(KEEP_TEXT, JSON.stringify(objForm))
}), 500));

form.addEventListener('submit', (evt => {
  evt.preventDefault();
  if (inputEmailValue.value !== '' || inputTextValue.value !== '') {
    console.log(
      {
        email: inputEmailValue.value,
      message: inputTextValue.value,}
    );
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEEP_TEXT);
}));

const loadValueFormAfterReloadPage = key => {
  try {
    const dataFormStorage = localStorage.getItem(key);
    return dataFormStorage === null ? undefined : JSON.parse(dataFormStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const checkData = loadValueFormAfterReloadPage(KEEP_TEXT);
if (checkData) {
  inputEmailValue.value = checkData.email;
  inputTextValue.value = checkData.message;
}
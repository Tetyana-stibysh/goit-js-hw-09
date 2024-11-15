const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(LS_KEY));
input.value = savedData.email ?? '';
textarea.value = savedData.message ?? '';

form.addEventListener('input', handlerInput);
function handlerInput(event) {
  formData.email = input.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  if (!input.value || !textarea.value) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    form.reset();
  }
}

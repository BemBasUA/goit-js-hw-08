import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
};

const savedData = localStorage.getItem(`feedback-form-state`);

const parsedData = JSON.parse(savedData);

refs.form.addEventListener(`submit`, onFormSubmit);
refs.form.addEventListener(`input`, throttle(onFormInput, 500));

populateInput();
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  if (!refs.input.value || !refs.textarea.value) {
    alert(`Всі поля повинні бути заповнені`);
  } else {
    console.log(JSON.parse(localStorage.getItem(`feedback-form-state`)));
    e.currentTarget.reset();
    localStorage.removeItem(`feedback-form-state`);
  }
}

function onFormInput(e) {
  localStorage.setItem(
    `feedback-form-state`,
    JSON.stringify({ email: refs.input.value, message: refs.textarea.value })
  );
}

function populateInput() {
  if (parsedData) {
    refs.input.value = parsedData.email;
  }
}

function populateTextarea() {
  if (parsedData) {
    refs.textarea.value = parsedData.message;
  }
}

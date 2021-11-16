import { form, LOCALSTORAGE_KEY } from '../03-feedback';

const output = {
  email: '',
  message: '',
};

export function onInput(e) {
  output[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(output));
}

export function onSubmit(e) {
  e.preventDefault();
  console.log(output);
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

export function loadFormInput() {
  const loadedOutput = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedOutput = JSON.parse(loadedOutput);
  if (parsedOutput) {
    fillOutput(parsedOutput);
  }
}

function fillOutput(data) {
  output.email = data.email;
  output.message = data.message;
  form.elements.email.value = output.email;
  form.elements.message.value = output.message;
}

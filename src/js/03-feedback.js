import throttle from 'lodash.throttle';
import { loadFormInput, onInput, onSubmit } from './helpers/03-formFunc';

export const form = document.querySelector('.feedback-form');
export const LOCALSTORAGE_KEY = 'feedback-form-state';

loadFormInput();

form.elements.email.setAttribute('required', true);
form.elements.message.setAttribute('required', true);

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

//Variables
const form = document.querySelector('.form');
const emailInput = document.querySelector('.form__input');
const submit = document.querySelector('.form__submit');
const error = document.querySelector('.form__error');

//Events
form.addEventListener('submit', (e) => {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(emailInput.value)) {
    emailInput.style.border = '1px solid var(--Desaturated-Red)';
    emailInput.style.backgroundImage = '';
    error.textContent = '';
  } else {
    e.preventDefault();
    emailInput.style.border = '1px solid var(--Soft-Red)';
    emailInput.style.backgroundImage = 'url(../images/icon-error.svg)';
    error.textContent = 'Please provide a valid email';
  }
});

'use strict';

import localStorageService from './localstorage';
const CONTACT_FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');

const dataForm = {};

console.log(localStorageService);

const handleFormChange = e => {
  const { target } = e;

  const elementTargetName = target.name;
  const elementTargetValue = target.value;

  dataForm[elementTargetName] = elementTargetValue;

  localStorageService.save(CONTACT_FORM_LOCAL_STORAGE_KEY, dataForm);
};

const fillContactForm = () => {
  const formData = localStorageService.load(CONTACT_FORM_LOCAL_STORAGE_KEY);

  console.dir(contactFormEl.elements);

  for (const key in formData) {
    contactFormEl.elements[key].value = formData[key];
    /* const inputEl = contactFormEl.elements[key];
    const inputValue = formData[key];
    inputEl.value = inputValue; */
  }
};

const handleContactFormSybmit = e => {
  e.preventDefault();

  //   localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
  localStorageService.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
  e.currentTarget.reset();
  for (const key in dataForm) {
    delete dataForm[key];
  }

  console.log(dataForm);
};

fillContactForm();

contactFormEl.addEventListener('input', throttle(handleFormChange, 500));
contactFormEl.addEventListener('submit', handleContactFormSybmit);

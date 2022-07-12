import throttle from 'lodash.throttle';

const KEY_FORM_LOCAL_STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formData = {};

const setValueInLocalStorage = event => {
  try {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.log(error.message);
  }
};

const onInputFormData = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('input', throttle(onInputFormData, 500));

const getValueFromLocalStorage = key => {
  try {
    const getValue = localStorage.getItem(key);
    return getValue === null ? undefined : JSON.parse(getValue);
  } catch (error) {
    console.log(error.message);
  }
};

const formFromStorage = getValueFromLocalStorage(KEY_FORM_LOCAL_STORAGE);

if (formFromStorage) {
  for (const key in formFromStorage) {
    form.elements[key].value = formFromStorage[key];
    formData[key] = formFromStorage[key];
  }
}

const onSubmitForm = e => {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(KEY_FORM_LOCAL_STORAGE);
};

form.addEventListener('submit', onSubmitForm);

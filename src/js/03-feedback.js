import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const KEY_LOCAL_STORAGE = 'feedback-form-state';

addLocalData();

const formData = {
  email: refs.form.email.value,
  message: refs.form.message.value,
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  (formData[e.target.name] = e.target.value),
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const dataSubmit = {
    email: e.currentTarget.email.value,
    massage: e.currentTarget.message.value,
  };

  console.log(dataSubmit);

  localStorage.removeItem(KEY_LOCAL_STORAGE);
  refs.form.reset();
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

  if (!localData) return;

  if (localData.email) refs.form.email.value = localData.email;
  if (localData.message) refs.form.message.value = localData.message;
}

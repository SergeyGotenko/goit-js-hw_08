import debounce from 'lodash.debounce';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', debounce(onFormInput, 500));


initForm();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 };



function onFormInput(event) {
    let formData = localStorage.getItem('STORAGE_KEY');

    formData = formData ? JSON.parse(formData) : {};
    formData[event.target.name] = event.target.value;

    if (!formData) return;

    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));

    console.log(formData)
};

function initForm() {
    let saveMessage = localStorage.getItem('STORAGE_KEY');

    if (saveMessage) {
        saveMessage = JSON.parse(saveMessage);
    }

    Object.entries(saveMessage).forEach(
        ([name, value]) => (form.elements[name].value = value),
    );
};


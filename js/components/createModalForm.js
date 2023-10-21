import {addContactForm} from './addContactForm.js';
import {createClient} from './apiClients.js';

export const createModalForm = () => {
  const overlay = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalTitle = document.createElement('h3');
  const closeBtn = document.createElement('button');
  const modalForm = document.createElement('form');
  const modalContactsBlock = document.createElement('div');
  const addContactBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  const formFloatingName = document.createElement('div');
  const formFloatingLastName = document.createElement('div');
  const formFloatingSurName = document.createElement('div');

  const labelName = document.createElement('label');
  const inputName = document.createElement('input');

  const labelLastName = document.createElement('label');
  const inputLastName = document.createElement('input');

  const labelSurName = document.createElement('label');
  const inputSurName = document.createElement('input');

  const labelNameSpan = document.createElement('span');
  const labelLastNameSpan = document.createElement('span');
  const labelSurNameSpan = document.createElement('span');

  const errorBlock = document.createElement('span');

  labelNameSpan.textContent = '*';
  labelLastNameSpan.textContent = '*';
  labelSurNameSpan.textContent = '*';

  labelName.textContent = 'Имя';
  labelLastName.textContent = 'Фамилия';
  labelSurName.textContent = 'Отчество';

  errorBlock.classList.add('error-block');
  modalTitle.classList.add('modal-title');
  formFloatingName.classList.add('form-floating');
  formFloatingLastName.classList.add('form-floating');
  formFloatingSurName.classList.add('form-floating');

  inputName.classList.add('modal__input');
  inputLastName.classList.add('modal__input');
  inputSurName.classList.add('modal__input');

  overlay.classList.add('overlay');
  modalContent.classList.add('modal-content');
  closeBtn.classList.add('btn-reset', 'close-btn');
  saveBtn.classList.add('btn-reset', 'save-btn', 'site-btn');
  addContactBtn.classList.add('btn-reset', 'add-btn');
  saveBtn.classList.add('btn-reset');
  cancelBtn.classList.add('btn-reset', 'cancel-btn');
  modalContactsBlock.classList.add('contacts-block');

  inputName.placeholder = 'Имя';
  inputLastName.placeholder = 'Фамилия';
  inputSurName.placeholder = 'Отчество';

  modalTitle.textContent = 'Новый клиент';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отмена';
  addContactBtn.textContent = 'Добавить контакт';

  labelNameSpan.style.color = '#9873ff';
  labelLastNameSpan.style.color = '#9873ff';
  labelSurNameSpan.style.color = '#9873ff';

  cancelBtn.type = 'button';

  labelName.append(labelNameSpan);
  labelLastName.append(labelLastNameSpan);
  labelSurName.append(labelSurNameSpan);
  formFloatingName.append(inputName, labelName);
  formFloatingLastName.append(inputLastName, labelLastName);
  formFloatingSurName.append(inputSurName, labelSurName);

  modalForm.append(
      formFloatingName,
      formFloatingLastName,
      formFloatingSurName,
      modalContactsBlock,
      errorBlock,
      saveBtn,
      cancelBtn,
  );
  modalContactsBlock.append(addContactBtn);
  modalContent.append(closeBtn, modalTitle, modalForm);
  overlay.append(modalContent);

  inputName.addEventListener('input', () => {
    if (!inputName.value.trim()) {
      errorBlock.textContent = 'Введите имя';
    } else {
      errorBlock.textContent = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === closeBtn || e.target === overlay || e.target === cancelBtn) {
      overlay.remove();
    }
  });

  addContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const contact = addContactForm();
    modalContactsBlock.prepend(contact);
    const contacts = document.querySelectorAll('.contact');
    if (contacts.length >= 10) {
      addContactBtn.classList.add('hidden');
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contactTypes = document.querySelectorAll('.contact__type-btn');
    const contactValues = document.querySelectorAll('.contact__input');
    const newContactTr = {};
    const contacts = [];

    newContactTr.name = inputName.value.trim();
    newContactTr.lastName = inputLastName.value.trim();
    newContactTr.surname = inputSurName.value.trim();
    newContactTr.contacts = contacts;

    for (let i = 0; i < contactTypes.length; i++) {
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    if (inputSurName.value.trim() === '') {
      errorBlock.textContent = 'Введите Отчество';
    }
    if (inputLastName.value.trim() === '') {
      errorBlock.textContent = 'Введите Фамилию';
    }
    if (inputName.value.trim() === '') {
      errorBlock.textContent = 'Введите имя';
    }
    createClient(newContactTr, 'POST');
    overlay.remove();
  });

  return {
    overlay,
    modalContent,
    modalTitle,
    closeBtn,
    modalForm,
    modalContactsBlock,
    addContactBtn,
    saveBtn,
    cancelBtn,
    errorBlock,
  };
};

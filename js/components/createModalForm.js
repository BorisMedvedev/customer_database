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

  const labelName = document.createElement('label');
  const inputName = document.createElement('input');

  const labelLastName = document.createElement('label');
  const inputLastName = document.createElement('input');

  const labelSurName = document.createElement('label');
  const inputSurName = document.createElement('input');

  overlay.classList.add('overlay');
  modalContent.classList.add('modal-content');
  closeBtn.classList.add('btn-reset');
  addContactBtn.classList.add('btn-reset');
  saveBtn.classList.add('btn-reset');
  cancelBtn.classList.add('btn-reset');
  modalContactsBlock.classList.add('contacts-block');

  inputName.placeholder = 'Имя';
  inputLastName.placeholder = 'Фамилия';
  inputSurName.placeholder = 'Отчество';

  closeBtn.textContent = 'X';
  modalTitle.textContent = 'Новый клиент';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отмена';
  addContactBtn.textContent = 'Добавить контакт';

  labelName.append(inputName);
  labelLastName.append(inputLastName);
  labelSurName.append(inputSurName);
  modalForm.append(labelName, labelLastName, labelSurName, modalContactsBlock, saveBtn, cancelBtn);
  modalContactsBlock.append(addContactBtn);
  modalContent.append(closeBtn, modalTitle, modalForm);
  overlay.append(modalContent);

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
  };
};

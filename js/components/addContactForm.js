export const addContactForm = () => {
  const contact = document.createElement('div');
  const contactType = document.createElement('div');
  const contactTypeBtn = document.createElement('button');
  const contactTypeList = document.createElement('ul');
  const contactTypeListItemPhone = document.createElement('li');
  const contactTypeListItemEmail = document.createElement('li');
  const contactTypeListItemVk = document.createElement('li');
  const contactTypeListItemOther = document.createElement('li');
  const contactInput = document.createElement('input');
  const contactDeleteBtn = document.createElement('button');
  const contactDeleteBtnTooltip = document.createElement('span');

  contact.className = 'contact';
  contactType.className = 'contact__type';
  contactTypeBtn.className = 'contact__type-btn btn-reset';
  contactTypeList.className = 'contact__list list-reset';
  contactTypeListItemPhone.className = 'contact__item';
  contactTypeListItemEmail.className = 'contact__item';
  contactTypeListItemVk.className = 'contact__item';
  contactTypeListItemOther.className = 'contact__item';
  contactInput.className = 'contact__input';
  contactDeleteBtn.className = 'contact__delete-btn btn-reset';

  contactInput.type = 'text';
  contactTypeBtn.textContent = 'Телефон';
  contactTypeListItemPhone.textContent = 'Телефон';
  contactTypeListItemEmail.textContent = 'Email';
  contactTypeListItemVk.textContent = 'Vk';
  contactTypeListItemOther.textContent = 'Другое';
  contactDeleteBtnTooltip.textContent = 'Удалить контакт';
  contactDeleteBtnTooltip.classList.add('delete-tooltip');

  contactTypeBtn.type = 'button';
  contactDeleteBtn.type = 'button';

  contactDeleteBtn.append(contactDeleteBtnTooltip);

  contactTypeList.append(
      contactTypeListItemPhone,
      contactTypeListItemEmail,
      contactTypeListItemVk,
      contactTypeListItemOther,
  );
  contactType.append(contactTypeBtn, contactTypeList);
  contact.append(contactType, contactInput, contactDeleteBtn);

  contactDeleteBtn.addEventListener('click', () => {
    contact.remove();
    document.querySelector('.add-btn').classList.remove('hidden');
  });

  contactTypeBtn.addEventListener('click', () => {
    contactTypeList.classList.toggle('active');
    contactTypeBtn.classList.add('active');
  });
  contactType.addEventListener('mouseleave', () => {
    contactTypeList.classList.remove('active');
    contactTypeBtn.classList.remove('active');
  });

  return contact;
};

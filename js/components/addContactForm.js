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

  contactTypeBtn.textContent = 'Телефон';
  contactTypeListItemPhone.textContent = 'Телефон';
  contactTypeListItemEmail.textContent = 'Email';
  contactTypeListItemVk.textContent = 'Vk';
  contactTypeListItemOther.textContent = 'Другое';

  contactTypeList.append(
      contactTypeListItemPhone,
      contactTypeListItemEmail,
      contactTypeListItemVk,
      contactTypeListItemOther,
  );
  contactType.append(contactTypeBtn, contactTypeList);
  contact.append(contactType, contactInput, contactDeleteBtn);

  return contact;
};

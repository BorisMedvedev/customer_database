import {formatDate, formatTime} from './utils.js';

export const createRowTable = (data) => {
  const rowTr = document.createElement('tr');
  const tdId = document.createElement('td');
  const tdFulName = document.createElement('td');
  const tdDateCreation = document.createElement('td');
  const tdDateCreationSpan = document.createElement('span');
  const tdTimeCreationSpan = document.createElement('span');
  const tdDateChanges = document.createElement('td');
  const tdDateChangesSpan = document.createElement('span');
  const tdTimeChangesSpan = document.createElement('span');
  const tdContacts = document.createElement('td');
  const tdActions = document.createElement('td');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  rowTr.id = data.id;
  tdId.textContent = data.id.substr(0, 6);
  tdFulName.textContent = `${data.lastName} ${data.name} ${data.surname}`;

  tdDateCreationSpan.textContent = formatDate(data.updatedAt);
  tdTimeCreationSpan.textContent = formatTime(data.updatedAt);

  tdDateChangesSpan.textContent = formatDate(data.updatedAt);
  tdTimeChangesSpan.textContent = formatTime(data.updatedAt);

  editBtn.textContent = 'Изменить';
  deleteBtn.textContent = 'Удалить';

  tdContacts.innerHTML = data.contacts;

  editBtn.classList.add('btn-reset');
  deleteBtn.classList.add('btn-reset');

  tdActions.append(editBtn, deleteBtn);
  tdDateCreation.append(tdDateCreationSpan, tdTimeCreationSpan);
  tdDateChanges.append(tdDateChangesSpan, tdTimeChangesSpan);
  rowTr.append(tdId, tdFulName, tdDateCreation, tdDateChanges, tdContacts, tdActions);

  return rowTr;
};



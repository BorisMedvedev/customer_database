import {createHeader} from './components/createHeader.js';
import {createMain} from './components/createMain.js';
import {createMainTable} from './components/createMainTable.js';
import {createModalForm} from './components/createModalForm.js';

const init = async () => {
  const getContainer = document.body;
  const getHeader = createHeader();
  const getMainSection = createMain('База данных');
  const getMainTable = createMainTable();
  const addClientBtn = document.createElement('button');

  addClientBtn.textContent = 'Добавить клиента';
  addClientBtn.className = 'add-client-btn';

  getMainSection.sectionContainer.append(getMainTable.mainTable, addClientBtn);
  getContainer.append(getHeader.header, getMainSection.main);

  addClientBtn.addEventListener('click', () => {
    const getModalForm = createModalForm();
    getContainer.append(getModalForm.overlay);
  });
};

init();

import {getClients} from './components/apiClients.js';
import {createHeader} from './components/createHeader.js';
import {createMain} from './components/createMain.js';
import {createMainTable} from './components/createMainTable.js';
import {createModalForm} from './components/createModalForm.js';
import {createRowTable} from './components/createRowTable.js';

const init = async () => {
  const getContainer = document.body;
  const getHeader = createHeader();
  const getMainSection = createMain('База данных');
  const getMainTable = createMainTable();
  const addClientBtn = document.createElement('button');
  const data = await getClients();

  addClientBtn.textContent = 'Добавить клиента';
  addClientBtn.className = 'add-client-btn';

  getMainSection.sectionContainer.append(getMainTable.mainTable, addClientBtn);
  getContainer.append(getHeader.header, getMainSection.main);

  addClientBtn.addEventListener('click', () => {
    const getModalForm = createModalForm();
    getContainer.append(getModalForm.overlay);
  });

  data.forEach(element => {
    getMainTable.mainTableTbody.append(createRowTable(element));
  });
};

init();

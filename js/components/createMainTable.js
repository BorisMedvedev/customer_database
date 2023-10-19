export const createMainTable = () => {
  const mainTable = document.createElement('table');
  const mainTableThead = document.createElement('thead');
  const tableHeadTr = document.createElement('tr');
  const tableThId = document.createElement('th');
  const tableThFullName = document.createElement('th');
  const tableThDateTimeCreation = document.createElement('th');
  const tableThRecentChanges = document.createElement('th');
  const tableThContacts = document.createElement('th');
  const tableThActions = document.createElement('th');
  const mainTableTbody = document.createElement('tbody');

  tableThId.id = 'table-id';

  mainTable.className = 'table';
  tableThId.textContent = 'id';
  tableThFullName.textContent = 'Фамилия Имя Отчество';
  tableThDateTimeCreation.textContent = 'Дата и время создания';
  tableThRecentChanges.textContent = 'Последние изменения';
  tableThContacts.textContent = 'Контакты';
  tableThActions.textContent = 'Действия';

  tableHeadTr.append(
      tableThId,
      tableThFullName,
      tableThDateTimeCreation,
      tableThRecentChanges,
      tableThContacts,
      tableThActions,
  );
  mainTableThead.append(tableHeadTr);
  mainTable.append(mainTableThead, mainTableTbody);

  return {
    mainTable,
    mainTableTbody,
    mainTableThead,
  };
};

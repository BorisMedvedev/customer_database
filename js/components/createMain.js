export const createMain = (title) => {
  const main = document.createElement('main');
  const sectionMain = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  const sectionContainer = document.createElement('div');

  sectionContainer.className = 'container section-table__container';
  sectionMain.className = 'section-table';
  sectionTitle.className = 'section-table__title title';
  sectionTitle.textContent = title;


  sectionContainer.append(sectionTitle);
  sectionMain.append(sectionContainer);
  main.append(sectionMain);

  return {
    main,
    sectionContainer,
    sectionMain,
  };
};

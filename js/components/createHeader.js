export const createHeader = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');
  const logo = document.createElement('a');
  const logoImg = document.createElement('img');
  const formSearch = document.createElement('form');
  const formInput = document.createElement('input');

  header.className = 'header';
  container.className = 'container header__container';
  logo.className = 'logo';
  logoImg.className = 'logo__img';
  formSearch.className = 'header__form-search';
  formInput.className = 'header__form-search-input';

  logoImg.src = './images/logo.svg';
  logo.href = '/';
  formInput.placeholder = 'Введите запрос';

  logo.append(logoImg);
  formSearch.append(formInput);
  container.append(logo, formSearch);
  header.append(container);

  return {
    header,
    formSearch,
    formInput,
  };
};

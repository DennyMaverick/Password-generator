const listItems = document.querySelectorAll('.password-item__list-item');
const defaultCheckbox = document.querySelector('#default');

const changeCharacters = function () {
  listItems.forEach(item => {
    item.addEventListener('click', function () {
      listItems.forEach(item => {
        item.classList.remove('password-item__list-item--active');
      });
      defaultCheckbox.checked = false;
      this.classList.add('password-item__list-item--active');
    });
  });
};

changeCharacters();

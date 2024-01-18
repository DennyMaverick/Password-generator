const listItems = document.querySelectorAll('.password-item__list-item');

const defaultCheckboxSpecial = document.querySelector('#special');
const defaultCheckboxInCyrilic = document.querySelector(
  '.password-item__default-checkbox--cyrilic-digits'
);
const checkboxDefault = document.querySelector(
  '.password-item__default-checkbox--default'
);

const customCheckboxDefault = document.querySelector(
  '.custom-checkbox--default'
);
const customCheckboxInCyrilic = document.querySelector(
  '.custom-checkbox--in-cyrilic'
);
const customCheckboxSpecial = document.querySelector(
  '.custom-checkbox--specials'
);

const lebelDefault = document.querySelector('.label--default');
const labelInCyrilic = document.querySelector(
  '.password-item__label-in-cyrilic'
);
const labelSpecial = document.querySelector('.password-item__label-special');

const resetEverything = function () {
  // Сброс выбора количества символов
  listItems.forEach(item => {
    item.classList.remove('password-item__list-item--active');
  });
  // Сброс выбора кириллицы + цифр
  defaultCheckboxInCyrilic.checked = false;

  // Сброс выбора специальные символы
  defaultCheckboxSpecial.checked = false;
};

// Сбросить все кастомные чекбоксы и варианты выборов при клике на кастомный чекбокс в поле 'сбросить по умолчанию'
customCheckboxDefault.addEventListener('click', resetEverything);

// Сбросить все кастомные чекбоксы и варианты выборов при клике на label в поле 'сбросить по умолчанию'
lebelDefault.addEventListener('click', resetEverything);

//  Переключение кастомного чекбокса в поле 'Сбросить по умолчанию'
customCheckboxDefault.addEventListener('click', function () {
  if (checkboxDefault.checked) {
    checkboxDefault.checked = false;
  } else {
    checkboxDefault.checked = true;
    resetEverything();
  }
});

// Переключение кастомного чекбокса в поле 'кириллица + цифры'
customCheckboxInCyrilic.addEventListener('click', function () {
  if (defaultCheckboxInCyrilic.checked) {
    defaultCheckboxInCyrilic.checked = false;
  } else {
    defaultCheckboxInCyrilic.checked = true;
    checkboxDefault.checked = false;
  }
});

// Переключение кастомного чекбокса в поле 'специальные символы'
customCheckboxSpecial.addEventListener('click', function () {
  if (defaultCheckboxSpecial.checked) {
    defaultCheckboxSpecial.checked = false;
  } else {
    defaultCheckboxSpecial.checked = true;
    checkboxDefault.checked = false;
  }
});

// При нажитии на label в поле выбора кириллица + цифры, убирать галочку с поля 'сбросить по умолчанию'
labelInCyrilic.addEventListener('click', function () {
  checkboxDefault.checked = false;
});

// При нажитии на label в поле выбора специальные символы, убирать галочку с поля 'сбросить по умолчанию'
labelSpecial.addEventListener('click', function () {
  checkboxDefault.checked = false;
});

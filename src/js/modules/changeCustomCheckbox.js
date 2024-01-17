const customCheckbox = document.querySelector('.custom-checkbox');
const customCheckboxInCyrilic = document.querySelector(
  '.password-item__custom-checkbox-in-cyrilic'
);
const defaultCheckbox = document.querySelector('#default');
const labelDefault = document.querySelector('.label--default');
const listItems = document.querySelectorAll('.password-item__list-item');
const defaultCheckboxInCyrilicElem = document.querySelector(
  '.password-item__default-checkbox-cyrilic-digits'
);
const labelDefaultInCyrilic = document.querySelector(
  '.password-item__label-in-cyrilic'
);

const changeCustomCheckbox = function () {
  if (defaultCheckbox.checked) {
    defaultCheckbox.checked = false;
  } else {
    defaultCheckbox.checked = true;
    defaultCheckboxInCyrilicElem.checked = false;
    listItems.forEach(item => {
      item.classList.remove('password-item__list-item--active');
    });
  }
};

const changeCustomCheckboxInCyrilic = function () {
  if (defaultCheckboxInCyrilicElem.checked) {
    defaultCheckboxInCyrilicElem.checked = false;
  } else {
    defaultCheckboxInCyrilicElem.checked = true;
    defaultCheckbox.checked = false;
  }
};

customCheckboxInCyrilic.addEventListener(
  'click',
  changeCustomCheckboxInCyrilic
);

customCheckbox.addEventListener('click', changeCustomCheckbox);

labelDefault.addEventListener('click', function () {
  if (!defaultCheckbox.checked) {
    defaultCheckboxInCyrilicElem.checked = false;
    listItems.forEach(item => {
      item.classList.remove('password-item__list-item--active');
    });
  }
});

labelDefaultInCyrilic.addEventListener('click', function () {
  if (!defaultCheckboxInCyrilicElem.checked) {
    defaultCheckbox.checked = false;
  }
});

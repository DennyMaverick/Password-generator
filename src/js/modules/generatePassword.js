const passwordGeneratorBtn = document.querySelector('.password-generator__btn');
const listItems = document.querySelectorAll('.password-item__list-item');

const symbolArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'g',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const array8Characters = [];
const array12Characters = [];
const array15Characters = [];

let passwords = [];

const setArray = function (arr, numberOfCharacters) {
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * symbolArray.length);
    arr[i] = symbolArray[randomIndex];
  }
  for (let i = 0; i < numberOfCharacters; i++) {
    let lettersInUpperCaseIndex = Math.floor(Math.random() * arr.length);
    if (typeof arr[lettersInUpperCaseIndex] === 'string') {
      arr[lettersInUpperCaseIndex] = arr[lettersInUpperCaseIndex].toUpperCase();
    }
  }
  passwords.push(arr.join(''));
};

const setArrayFewTimes = function (arr, numberOfCharacters, times) {
  for (let i = 0; i < times; i++) {
    if (passwords.length > 4) {
      break;
    }
    setArray(arr, numberOfCharacters);
  }
};

// setArrayFewTimes(array8Characters, 8, 5);
// setArrayFewTimes(array8Characters, 8, 5);

// array8CharNumber.push(array8Characters.join(''));

// const createArrFewTimes = function (times, char) {
//   let newArr = [];
//   if (char === 8) {
//     newArr = array8Characters.join('').repeat(times);
//   }
//   console.log(newArr);
// };

// passwordGeneratorBtn.addEventListener('click', function () {});

// console.log(array15Characters);

// 12 символов

listItems.forEach(item => {
  item.addEventListener('click', function () {
    if (this.dataset.char === 'eight') {
      passwords = [];
      setArrayFewTimes(array8Characters, 8, 5);
      console.log('passwords: ', passwords);
    } else if (this.dataset.char === 'twelve') {
      passwords = [];
      setArrayFewTimes(array12Characters, 12, 5);
      console.log('passwords: ', passwords);
    } else if (this.dataset.char === 'fifteen') {
      passwords = [];
      setArrayFewTimes(array15Characters, 15, 5);
      console.log('passwords: ', passwords);
    }
  });
});

//* =========== Объект с переводом страницы ==============

const langs = {
  'header-title': {
    ru: 'Реализация функции переключения языков',
    en: 'Realizing of language switcher`s function',
  },
  'header-subtitle': {
    ru: 'Подробный гайд',
    en: 'The detailed guide',
  },
  'about-title': {
    ru: 'О проекте',
    en: 'About the project',
  },
  'about-description': {
    ru: 'В данном проекте речь пойдет о реализации функции переключения языков на небольших сайтах, преимущественно на лэндингах. Основная идея - показать принцип подключения подобной фичи на сайт, без использования сторонних библиотек, используя возможности языка',
    en: 'This project is about the language switcher`s function using on not big sites like landing - pages. The main thought is to show this thing switched on your site, without using vendor libraries, using only ',
  },
  'get-ready-title-first-step': {
    ru: 'Подготовка. Подключение JavaScript - файла, создание объекта, содержащего перевод страницы',
    en: 'Get ready to the project. First, you need to switch on the JavaScript - file. Creating the object that consist of the translation the page',
  },
  'get-ready-desc-one': {
    ru: 'Чтобы добавить функцию смены языков на свой сайт, создадим js-файл с названием `lang` и подключим его в html:',
    en: 'To add the language switcher`s function on the site, need to create js-file with tha name `lang` and switch on it to html:',
  },
  'get-ready-desc-two': {
    ru: 'Далее в файле lang.js объявим / создадим все необходимые объекты, переменные и функции. Создадим объект langs, где в качестве ключей запишем название классов тех элементов, которые требуют перевода (дальше мы узнаем что классы нужно называть с префикса `lang-` в html, об этом будет рассказано дальше) используя кавычки, а в качестве значений - объект, который имеет в качестве ключей - языки, а в качестве значений - перевод. Это необходимо для реализации функции перевода, о чем пойдет речь дальше.',
    en: 'Next, in file lang.js declare / create all needed objects, variables and functions. Create the object langs, where as the keys write the names of classes of those elements we need to translate (next we`ll know that classes must be named with prefix `lang-` in html, - about this next) using quotes, and as values - the object, that has as keys - languages, and as values - translation. In needs for realization of translate function, about this next.',
  },
  'get-ready-title-second-step': {
    ru: 'Создание интерактивного элемента выбора языков + реализация добавления в строку браузера hash (ru или en) в зависимости от выбора языка',
    en: 'Creation the interactive element of language choosing + realization how to add to the browser string hash (ru or en) in according with the language choice',
  },
  'get-ready-desc-three': {
    ru: 'Приступим к созданию интерактивного элемента на html-странице - toolbar с переключателем.',
    en: 'Let`s create the interactive element to html-page - toolbar with the switcher.',
  },
  'get-ready-desc-four': {
    ru: 'Напишем код в html, отображающий toolbar на странице.',
    en: 'Write the code to html that does display toolbar on the page.',
  },
  'get-ready-desc-five': {
    ru: 'Также пропишем код scss. Чтобы элементы все отображались на странице корректно, нужно задать родительскому блоку свойство в стилях position: relative; так как элемент toolbar отображается с помощью абсолютного позиционирования.',
    en: 'Also write the code scss. To elements displaying correctly on the page it needs to set the property position: relative; in the styles for the parent block becouse the element toolbar displays with absolute position.',
  },
  'get-ready-desc-six': {
    ru: 'Создадим коллекцию из 2-х элементов, по которым будет происходить клик - русский язык или английский, запишем её в переменную toolbarItems и с помощью метода forEach создадим обработчик событий для каждого элемента данной коллекции. Далее, запишем в переменную lang строку ru или en в зависимости от клика на элемент (у каждого элемента есть дата-атрибут data-lang), и с помощью свойства строки браузера location.href добавим в строку браузера hash - ru или en в зависимости от того, на какой элемент мы кликнем, - выберем русский язык или английский. И перезагрузим страницу используя метод location.reload().',
    en: 'Let`s create the collection from two elements that will be clicked - Russian or English, write it to the variable toolbarItems and using method forEach create addEventListener for each element this collection. Next, write to the variable lang the string ru or en according with the element is clicked (each element has data-attribute data-lang), and using the property of the browser string location.href add to the browser hash - ru or en according with the element we will click, - choose Russian or English. And reload the page using the method location.reload(). ',
  },
  'get-ready-title-third-step': {
    ru: 'Coздание функции переключения языков',
    en: 'Creation the language switcher`s function',
  },
  'get-ready-desc-seven': {
    ru: 'Для начала, перед созданием основной функции создадим две вспомогательные, которые будут добавлять или удалять активный класс toolbar--active, который добавляет элементу, по которому произошло событие клика, в интерактивном элементе toolbar, - нижнее подчеркивание и выделяет элемент жирным цветом (font-weight: 600):',
    en: 'First, before creating the main function we need to create two additional functions adding or cleaning the active class toolbar--active, that adds to the clicked element the bottom underline and does element the property (font-weight: 600):',
  },
  'get-ready-desc-eight': {
    ru: 'И наконец, создаем функцию, реализующую переключение языков. Перед тем как написать код, нужно создать массив, хранящий все возможные языки, записав его в переменную allLangs в глобальной области видимости:',
    en: 'Finally, create the function realizing the language switching. Before we write the code, it needs to create the array that saves all languages writing it to the variable allLangs in global scope:',
  },
  'get-ready-desc-nine': {
    ru: 'Далее мы получаем значение hash, которое создали на этапе клика по элементу в toolbar, с помощью метода substring(1), обрезаем hash слева на один символ (#ru или #en в зависимости от нажатия на элемент в toolbar) - получаем ru или en в переменную hash.',
    en: 'Next we get the value hash that was created when the elements in toolbar had event `click`, next using the method substring(1) cut the hash from left side on 1 character (#ru or #en according with clicked elements in toolbar) - we will get ru or en value to the variable hash.',
  },
  'get-ready-desc-ten': {
    ru: 'Далее, через if - statement проверяем, если hash = ru, запускаем выше созданную функцию, которая добавляет элементу RU в toolbar активный класс toolbar--active, делающий букву с подчеркиванием и добавлением font-weight: 600, если hash = en, тогда добаляем класс элементу EN из toolbar.',
    en: 'Next, using if -statement we check: if hash = ru then lounch the function that adds the active class toolbar--active to the element RU, that makes RU element to be with underline and having the property font-weigth: 600, if hash = en, then we add the class to the EN element from toolbar.',
  },
  'get-ready-desc-eleven': {
    ru: 'Далее, проверяем, если пользователь зашел на страницу и ничего пока что не выбирал (никакой из языков), тогда нужно сделать язык по умолчанию, проверив, есть ли в массиве allLangs значение hash (ru или en), то есть таким образом мы проверяем нажатие на один из элементов в toolbar. Если его нет, - значит hash в строке браузера еще не установлен, следовательно нужно его установить принудительно и обновить страницу.',
    en: 'Next, we will check, - if user comes to the page and he does not choose the language yet (nothing from languages), then we need to set language default, checking the array allLangs: if it has the hash value (ru or en), we check the click on one of elements in toolbar. If the click is not active, then the hash in the browser string is not set yet, and we need to set it force and reload the page.',
  },
  'get-ready-desc-twelve': {
    ru: 'Далее через цикл for нужно пройтись по всем ключам, созданным в объекте langs, который мы создавали в самом начале, и найти все элементы на странице, которые имеют префикс `.lang -`. То есть теперь, когда мы создаем элемент, в html, к примеру, какой - то текст в теге p, и нам нужно сделать его перевод, нужно просто добавить к нему класс lang-class-name, где вместо класса - любой нужный класс. Всё, что находится после lang-, а именно class-name, нужно записать в качестве ключа в объекте langs. Таким образом мы нашли все элементы на странице, которые содержат префикс lang- .',
    en: 'Next, using the loop for we need to go through the all keys that were creating in the object langs, that we created in the begining, and find all elements on the page, that have prefix `.lang-`. Now, when we create the element, in html, for example, some text in the tag p, and we need it translation, all we need is to add to this element class lang-class-name, where instead of the class - any needed class. All that are after `lang-`, - class-name, we need to write as the key in the object langs. So way we have found all the elements on the page.',
  },
  'get-ready-desc-thirteen': {
    ru: 'Далее, с помощью проверки, смотрим, есть ли сам элемент на странице html, а также, имеет ли объект langs ключ, а именно класс элемента, который требуется перевести, и значение - хранящееся в объекте, который в свою очередь хранит в качестве ключей - язык, а в качестве значения - перевод. И если объект содержит нужный класс элемета, - остается только заменить текст нужных элементов на html - странице c помощью метода innerHTML, присвоив значение из объекта langs - langs[key][hash], где key - нужный класс выбранного элемента для перевода, а hash - значение в браузерной строке после # - ru или en в зависимости от выбранного языка. Таким образом в выбранный элемент для перевода на странице html вставляется значение перевода из объекта langs.',
    en: 'Next using the checking we see does exist the element on the page itself and check does have the object langs the key - class of the element that needs to translate and value saving in the object that has as the keys - languages and as the values - translation. And if the object has needed class of the element all we need is to replace the text needed elements on the page html using the method innerHTML giving the value to these element as the value in object langs - langs[key][hash] where the key is the needed class of choosen element for the translate, and hash is the value in browser string after # - ru or en in according of choosen language. So way, the value of the translation from the object langs inserts to the choosen element for the translation on the page html.',
  },
  'get-ready-desc-fourteen': {
    ru: 'При разработке сайта, функционала, который мы описали выше, может быть недостаточно. Могут возникнуть случаи, когда на странице html есть однотипные повторяющиеся элементы. Например, нужно перевести текст, который содержится в слайдере. Здесь мы имеем дело с повторяющимися однотипными элементами. В таком случае функция changeLang() работать не будет должным образом, и чтобы всё работало, нужно добавить следующий блок кода в функцию changeLang():',
    en: 'When you developing sites the functionality may be not enought. It happens when the repeated elements exist on the page html. For example, you need to translate the text that is in the slider. Here we do work with one-typed elements. And our function changeLang() will not work correctly. And if you want everything been working you need to insert next block of code in the function changeLang():',
  },
  'get-ready-desc-fifteen': {
    ru: 'С помощью этого блока кода мы получаем на странице все однотипные элементы и в каждый такой элемент с помощью метода innerHTML вставляем значение перевода из нового объекта repeatElems, который по структуре ни чем не отличается от объекта langs. Просто в него мы будем складывать все ключи повторяющихся элементов на странице html.',
    en: 'Using this block of code we get all one-typed elements on the page and insert in each such element using method innerHTML the value of the translation from new object repeatElems, that is the same object like the langs by building. We will put all keys of repeated elements on the page html there.',
  },
  'get-ready-desc-sixteen': {
    ru: 'При работе с плейсхолдерами, - надписями, которые содержатся в текстовых формах ввода, таких как input, textarea, следующий код поможет переводить текст плейсхолдера. Его также нужно поместить в функцию changeLang(). По аналогии, нужно дополнительно создать объект placeholders, который по структуре ничем не отличается от объектов langs и repeatElems. В него нужно помещать в качестве ключей название классов у элементов, которые имеют атрибут placeholder. А в качество значений - объект с переводом на английский и русский, как было описано ранее.',
    en: 'When you need to work with placeholders, - notes, that are in the text form of input, such as input and textarea elements, next code helps to translate the text in the placeholders. It also needs to be put in the function changeLang(). It needs to create the same object like before using name placeholders that is like the objects created before - langs and repeatElems. You need to put in this object the names of classes as the keys for elements that have the attribute placeholder. There is the object as the value with the translation on English or Russian. As it was told before.',
  },
  'get-ready-desc-seventeen': {
    ru: 'При разработке одного сайта мне потребовалось переводить всплывающие подсказки у элементов. То есть, при наводе на некоторые элементы пользователь может увидеть всплывающие подсказки с текстом. Это делается с помощью атрибута title в html-элементе. Следующий код реализует перевод таких всплывающих подсказок, - как для одного элемента, так и для множества однотипных. Для этого нужно также создать 2 дополнительных объекта titles и repeatTitles по аналогии с предыдущими объектами langs, repeatElems и placeholders. Блок кода помещается в основную функцию changeLang().',
    en: 'When I had been working by one project I needed to translate popup messages that the some elements had. It means, when the user hovers on some elements he can see the popup messages with the text. It does do using attribute title in the html - element. Next code realizes the translation of these popup messages, - for one element or for a lot of one-typed. It needs also to create 2 additional objects title and repeatTitles as we did before with objects langs, repeatElems and placeholders. This block of code put in the main function changeLang().',
  },
  'get-ready-title-fourth-step': {
    ru: 'Создание дополнительного функционала',
    en: 'Creating the additional functionality',
  },
  'close-button': {
    ru: 'Закрыть',
    en: 'Close',
  },
  'sicials-desc': {
    ru: 'Связаться с автором проекта :',
    en: 'contact to the projec`s author  :',
  },
};

const titles = {
  // "telegram-intro": {
  //   ru: "Мой телеграм",
  //   en: "My telegram",
  // },
};

const repeatTitles = {
  // up: {
  //   ru: "Наверх",
  //   en: "Up",
  // },
};

const repeatElems = {
  'about-nav-title': {
    ru: 'О проекте',
    en: 'About',
  },
  'get-ready-nav-title': {
    ru: 'Подготовка',
    en: 'Get ready',
  },
  'toolbar-nav-title': {
    ru: 'Создание toolbar',
    en: 'Create the toolbar',
  },
  'main-func-nav-title': {
    ru: 'Основная функция',
    en: 'Main function',
  },
  'addition-nav-title': {
    ru: 'Дополнение',
    en: 'Addition',
  },
  'contacts-nav-title': {
    ru: 'Контакты',
    en: 'Contacts',
  },
};

// ====== Секция Search / placeholders

const placeholders = {
  // name: {
  //   ru: "Напишите Ваше имя",
  //   en: "Write your name",
  // },
};

const toolbarItems = document.querySelectorAll('.toolbar__item');

// Массив всех доступных языков
const allLangs = ['ru', 'en'];

toolbarItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // получение hash из строки браузера - #ru или #en

    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang;

    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + '#' + lang;

    // перезагрузка страницы
    location.reload();
  });
});
function changeLang() {
  // получение hash из строки браузера - #ru или #en
  let hash = window.location.hash;
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substring(1);

  const langToolRuEl = document.querySelector('[data-lang="ru"]');
  const langToolEnEl = document.querySelector('[data-lang="en"]');
  // получение hash из строки браузера - #ru или #en

  function toggleLangOnRU() {
    if (!langToolRuEl.classList.contains('toolbar--active')) {
      langToolRuEl.classList.add('toolbar--active');
    }
    langToolEnEl.classList.remove('lang-tool--active');
  }

  function toggleLangOnEN() {
    if (!langToolEnEl.classList.contains('toolbar--active')) {
      langToolEnEl.classList.add('toolbar--active');
    }
    langToolRuEl.classList.remove('lang-tool--active');
  }
  if (hash === 'ru') {
    toggleLangOnRU();
  } else if (hash === 'en') {
    toggleLangOnEN();
  }

  // проверка - если массив из всех доступных языков не содержит hash
  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + '#ru';
    // перезагрузка страницы
    location.reload();
  }

  // перебор массива langs
  for (let key in langs) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector('.lang-' + key);
    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash];
    }
  }

  //! перевод всплывающих текстовых подсказок при наводе на ссылки
  // for (let key in titles) {
  //   let elem = document.querySelector(".lang-" + key)
  //   if (elem && titles[key][hash]) {
  //     elem.title = titles[key][hash]
  //   }
  // }

  //! перевод всплывающих текстовых подсказок при наводе на ссылки / повторяющиеся элементы
  // for (let key in repeatTitles) {
  //   let elems = document.querySelectorAll(".lang-" + key)
  //   elems.forEach(function (elem) {
  //     if (elem && repeatTitles[key][hash]) {
  //       elem.title = repeatTitles[key][hash]
  //     }
  //   })
  // }
  //! Для плейсхолдеров
  // for (let key in placeholders) {
  //   let elemPlaceholder = document.querySelector(".lang-placeholder-" + key)
  //   if (elemPlaceholder && placeholders[key][hash]) {
  //     elemPlaceholder.placeholder = placeholders[key][hash]
  //   }
  // }
  //! Для повторяющихся элементов
  for (let key in repeatElems) {
    let elems = document.querySelectorAll('.lang-' + key);
    elems.forEach(function (elem) {
      if (elem && repeatElems[key][hash]) {
        elem.innerHTML = repeatElems[key][hash];
      }
    });
  }
}
// запуск функции changeLang()
changeLang();

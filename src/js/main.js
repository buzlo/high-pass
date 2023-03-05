ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map("map", {
    center: [55.7694714667296, 37.63900660841699],
    // [55.76038599, 37.61497369]
    zoom: 14,
    controls: [],
  }),

    myPlacemark = new ymaps.Placemark([55.7694714667296, 37.63900660841699], {
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/svg/sprite.svg#location-marker',
      iconImageSize: [100, 100],
      iconImageOffset: [-50, -50]
    });

  myMap.behaviors.disable(["drag", "scrollZoom"]);

  myMap.geoObjects.add(myPlacemark);
};

const searchBtn = document.querySelector('.search__btn'),
  searchInput = document.querySelector('.search__input'),
  navBurger = document.querySelector('.nav__burger'),
  navMenu = document.querySelector('.nav__menu'),
  navClose = document.querySelector('.nav__close');

searchBtn.addEventListener("click",
  function () {
    searchInput.classList.toggle("search__input_active");
    document.body.classList.toggle("stop-scroll");
  })

navBurger.addEventListener("click",
  function () {
    navMenu.classList.toggle("nav__menu_active");
    document.body.classList.toggle("stop-scroll");
  })

navClose.addEventListener("click",
  function () {
    navMenu.classList.toggle("nav__menu_active");
    document.body.classList.toggle("stop-scroll");
  })

const mailingValidator = new JustValidate('#mailing-form', {
  validateBeforeSubmitting: true,
});

mailingValidator.addField('#mailing-email-input', [
  {
    rule: 'required',
    errorMessage: 'Обязательное поле'
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  },
])

const applicationValidator = new JustValidate('.application-form', {
  validateBeforeSubmitting: true,
});

applicationValidator.addField('#application-name-input', [
  {
    rule: 'required',
    errorMessage: 'Обязательное поле'
  },
])

applicationValidator.addField('#application-email-input', [
  {
    rule: 'required',
    errorMessage: 'Обязательное поле'
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  },
])

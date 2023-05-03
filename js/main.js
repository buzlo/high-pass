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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInltYXBzLnJlYWR5KGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgIGNlbnRlcjogWzU1Ljc2OTQ3MTQ2NjcyOTYsIDM3LjYzOTAwNjYwODQxNjk5XSxcbiAgICAvLyBbNTUuNzYwMzg1OTksIDM3LjYxNDk3MzY5XVxuICAgIHpvb206IDE0LFxuICAgIGNvbnRyb2xzOiBbXSxcbiAgfSksXG5cbiAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc2OTQ3MTQ2NjcyOTYsIDM3LjYzOTAwNjYwODQxNjk5XSwge1xuICAgIH0sIHtcbiAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cbiAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXG4gICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL3N2Zy9zcHJpdGUuc3ZnI2xvY2F0aW9uLW1hcmtlcicsXG4gICAgICBpY29uSW1hZ2VTaXplOiBbMTAwLCAxMDBdLFxuICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTUwLCAtNTBdXG4gICAgfSk7XG5cbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoW1wiZHJhZ1wiLCBcInNjcm9sbFpvb21cIl0pO1xuXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn07XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2J0bicpLFxuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JyksXG4gIG5hdkJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J1cmdlcicpLFxuICBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbWVudScpLFxuICBuYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2Nsb3NlJyk7XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgZnVuY3Rpb24gKCkge1xuICAgIHNlYXJjaElucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJzZWFyY2hfX2lucHV0X2FjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcbiAgfSlcblxubmF2QnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICBmdW5jdGlvbiAoKSB7XG4gICAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2X19tZW51X2FjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzdG9wLXNjcm9sbFwiKTtcbiAgfSlcblxubmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJuYXZfX21lbnVfYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcInN0b3Atc2Nyb2xsXCIpO1xuICB9KVxuXG5jb25zdCBtYWlsaW5nVmFsaWRhdG9yID0gbmV3IEp1c3RWYWxpZGF0ZSgnI21haWxpbmctZm9ybScsIHtcbiAgdmFsaWRhdGVCZWZvcmVTdWJtaXR0aW5nOiB0cnVlLFxufSk7XG5cbm1haWxpbmdWYWxpZGF0b3IuYWRkRmllbGQoJyNtYWlsaW5nLWVtYWlsLWlucHV0JywgW1xuICB7XG4gICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICBlcnJvck1lc3NhZ2U6ICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnXG4gIH0sXG4gIHtcbiAgICBydWxlOiAnZW1haWwnLFxuICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInXG4gIH0sXG5dKVxuXG5jb25zdCBhcHBsaWNhdGlvblZhbGlkYXRvciA9IG5ldyBKdXN0VmFsaWRhdGUoJy5hcHBsaWNhdGlvbi1mb3JtJywge1xuICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmc6IHRydWUsXG59KTtcblxuYXBwbGljYXRpb25WYWxpZGF0b3IuYWRkRmllbGQoJyNhcHBsaWNhdGlvbi1uYW1lLWlucHV0JywgW1xuICB7XG4gICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICBlcnJvck1lc3NhZ2U6ICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnXG4gIH0sXG5dKVxuXG5hcHBsaWNhdGlvblZhbGlkYXRvci5hZGRGaWVsZCgnI2FwcGxpY2F0aW9uLWVtYWlsLWlucHV0JywgW1xuICB7XG4gICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICBlcnJvck1lc3NhZ2U6ICfQntCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUnXG4gIH0sXG4gIHtcbiAgICBydWxlOiAnZW1haWwnLFxuICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInXG4gIH0sXG5dKVxuIl19

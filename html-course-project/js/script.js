const buttonMinus = document.querySelectorAll(".button-minus");
const inputNumber = document.querySelectorAll(".input-number");
function plusNumber(j) {
  inputNumber[j].value = Number(inputNumber[j].value) + 1;
  buttonMinus[j].removeAttribute("disabled");
}
function minusNumber(j) {
  inputNumber[j].value = Number(inputNumber[j].value) - 1;
  if (inputNumber[j].value <= 1) {
    buttonMinus[j].setAttribute("disabled", "disabled");
  }
}
function changeDisabled(j) {
  if (inputNumber[j].value > 1) {
    buttonMinus[j].removeAttribute("disabled");
  } else if (inputNumber[j].value < 1) {
    inputNumber[j].value = "";
    buttonMinus[j].setAttribute("disabled", "disabled");
  } else {
    buttonMinus[j].setAttribute("disabled", "disabled");
  }
}

const productsContainer = document.querySelectorAll(".products-container");
let counter = [0, 0, 0, 0];
const quantityCards = inputNumber.length / 3 / 2;
const arrowCardRight = document.querySelectorAll(".arrow-card-right");
const arrowCardLeft = document.querySelectorAll(".arrow-card-left");
const instagramContainer = document.querySelector(".instagram-cards-container");
function moveCardNext(j) {
  hideArrowRight(j);
  if (j === 3) {
    instagramContainer.style.transform +=
      "translateX(calc(0vw - var(--gap-instagram-cards-container) - var(--width-img--instagram)))";
  } else {
    productsContainer[j].style.transform +=
      "translateX(calc(0vw - var(--gap-products-container) - var(--width-img--product)))";
  }
}
function moveCardReverse(j) {
  hideArrowLeft(j);
  if (j === 3) {
    instagramContainer.style.transform +=
      "translateX(calc(var(--gap-instagram-cards-container) + var(--width-img--instagram)))";
  } else {
    productsContainer[j].style.transform +=
      "translateX(calc(var(--gap-products-container) + var(--width-img--product)))";
  }
}
function hideArrowRight(i) {
  arrowCardLeft[i].classList.remove("hide");
  counter[i] += 1;
  if (counter[i] === quantityCards) {
    arrowCardRight[i].classList.add("hide");
  }
}
function hideArrowLeft(i) {
  arrowCardRight[i].classList.remove("hide");
  counter[i] -= 1;
  if (counter[i] === 0) {
    arrowCardLeft[i].classList.add("hide");
  }
}

let currentLanguage;
const elementPage = document.querySelector(".page");
const elementTooltip = document.querySelector(".tooltip");
const elementAdvert = document.querySelector(".advert");
function changeTheme() {
  elementPage.classList.toggle("theme-dark");
  changeTooltip();
}
function changeTooltip() {
  if (elementPage.classList.contains("theme-dark")) {
    elementTooltip.setAttribute("lang-key", "lightTheme");
    changeLanguage(currentLanguage);
  } else {
    elementTooltip.setAttribute("lang-key", "darkTheme");
    changeLanguage(currentLanguage);
  }
}

setInterval(showAdvertPack, 1000);
setInterval(showAdvertOrder, 2000);
function showAdvertPack() {
  elementAdvert.setAttribute("lang-key", "advertPack");
  changeLanguage(currentLanguage);
  elementAdvert.classList.remove("advert-order");
  elementAdvert.classList.add("advert-pack");
}
function showAdvertOrder() {
  elementAdvert.setAttribute("lang-key", "advertOrder");
  changeLanguage(currentLanguage);
  elementAdvert.classList.remove("advert-pack");
  elementAdvert.classList.add("advert-order");
}

function toggleNav() {
  const elementNavWrapper = document.querySelector(".nav-wrapper");
  const elementNav = document.querySelector(".nav");
  elementNavWrapper.classList.toggle("hide");
  elementNav.classList.toggle("translate-nav");
}

const en = {
  login: "Log In",
  header: "Our New Party Accessories",
  shopNow: "Shop Now",
  advertOrder: "Order Online and Collect In-Store",
  advertPack: "New Pack up Service",
  tablewareAndServing: "Tableware & Serving",
  productName: "I'm a product",
  quickView: "Quick View",
  addToCart: "Add to Cart",
  partyAccessories: "Party Accessories",
  birthdayFavors: "Birthday Favors",
  followUsOnInstagram: "Follow Us on Instagram",
  shop: "Shop",
  about: "About",
  faq: "FAQ",
  shipping: "Shipping / Pick Up",
  storePolicy: "Store Policy",
  contactUs: "Contact us",
  address: "Address",
  street: "500 Terry Francois Street",
  city: "San Francisco, 94158",
  phone: "Tel: 123-456-7890",
  openingHours: "Opening Hours",
  weekdays: "Mon - Fri: 7am - 10pm",
  saturday: "Saturday: 8am - 10pm",
  sunday: "Sunday: 8am - 11pm",
  startParty: "Get the party started",
  newsletter: "Join our newsletter",
  subscribeNow: "Subscribe Now",
  home: "Home",
  shopAll: "Shop All",
  blog: "Blog",
  contact: "Contact",
  members: "Members",
  darkTheme: "Switch to dark theme",
  lightTheme: "Switch to light theme",
  title: "Party supplies store",
};
const ru = {
  login: "Вход",
  header: "Наши новые аксессуары для вечеринок",
  shopNow: "Купить сейчас",
  advertOrder: "Заказывайте онлайн и забирайте в магазине",
  advertPack: "Новая услуга - упаковка",
  tablewareAndServing: "Посуда и сервировка",
  productName: "Ваш товар",
  quickView: "Быстрый Просмотр",
  addToCart: "Добавить в корзину",
  partyAccessories: "Аксессуары для вечеринок",
  birthdayFavors: "Подарки на день рождения",
  followUsOnInstagram: "Подписывайтесь на нас в instagram",
  shop: "Магазин",
  about: "О нас",
  faq: "Вопросы и ответы",
  shipping: "Доставка / Забрать",
  storePolicy: "Политика магазина",
  contactUs: "Связаться с нами",
  address: "Адрес",
  street: "Улица Терри Франсуа, 500",
  city: "Сан-Франциско, 94158",
  phone: "Тел: 123-456-7890",
  openingHours: "Время работы",
  weekdays: "Пн - Пт: 7.00 - 22.00",
  saturday: "Суббота: 8.00 - 22.00",
  sunday: "Воскресенье: 8.00 - 23.00",
  startParty: "Начнем вечеринку",
  newsletter: "Присоединяйтесь к нашей рассылке",
  subscribeNow: "Подписаться сейчас",
  home: "Главная",
  shopAll: "За покупками",
  blog: "Блог",
  contact: "Контакты",
  members: "Участники",
  darkTheme: "Переключиться на темную тему",
  lightTheme: "Переключиться на светлую тему",
  title: "Магазин праздничных принадлежностей",
};
const elementPlaceholder = document.querySelector("[placeholder]");
changeLanguage(en);
function changeLanguage(language) {
  const elementTranslate = document.querySelectorAll("[lang-key]");
  for (let i = 0; i < elementTranslate.length; i++) {
    let key = elementTranslate[i].getAttribute("lang-key");
    elementTranslate[i].textContent = language[key];
  }
  currentLanguage = language;
  changeFont(language);
  changePlaceholder(language);
  changeButtonLanguage(language);
}
function changePlaceholder(language) {
  if (language === ru) {
    elementPlaceholder.setAttribute("placeholder", "Введите ваш email здесь*");
  } else if (language === en) {
    elementPlaceholder.setAttribute("placeholder", "Enter your email here*");
  }
}
function changeButtonLanguage(language) {
  const elementButtonLanguage = document.querySelectorAll(".language");
  if (language === ru) {
    elementButtonLanguage[0].classList.remove("disabled-language");
    elementButtonLanguage[1].classList.add("disabled-language");
  } else if (language === en) {
    elementButtonLanguage[0].classList.add("disabled-language");
    elementButtonLanguage[1].classList.remove("disabled-language");
  }
}
function changeFont(language) {
  const elementFooterWrapper = document.querySelector(".footer-wrapper");
  if (language === ru) {
    elementFooterWrapper.style.fontFamily = '"Jost"';
    elementPlaceholder.style.fontFamily = '"Jost"';
  } else if (language === en) {
    elementFooterWrapper.style.fontFamily = '"Hind"';
    elementPlaceholder.style.fontFamily = '"Hind"';
  }
}

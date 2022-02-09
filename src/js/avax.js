'use strict';
///////////////////////////////////////
//Data
const avaxArr = [
  {
    id: 1,
    imgSrc: 'https://i.ibb.co/bPjZ4Mp/avax.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 1',
    head: 'Value 1',
    mouth: 'Value 1',
    eyes: 'Value 1',
    whale: 'Value 1',
    body: 'Value 1',
    last: 'Value 1',
  },
  {
    id: 2,
    imgSrc: 'https://i.ibb.co/JzSXb2n/422.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 2',
    head: 'Value 2',
    mouth: 'Value 2',
    eyes: 'Value 2',
    whale: 'Value 2',
    body: 'Value 2',
    last: 'Value 2',
  },
  {
    id: 3,
    imgSrc: 'https://i.ibb.co/44g9VQG/252.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 3',
    head: 'Value 3',
    mouth: 'Value 3',
    eyes: 'Value 3',
    whale: 'Value 3',
    body: 'Value 3',
    last: 'Value 3',
  },
  {
    imgSrc: 'https://i.ibb.co/SmBWwj8/284.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 4',
    head: 'Value 4',
    mouth: 'Value 4',
    eyes: 'Value 4',
    whale: 'Value 4',
    body: 'Value 4',
    last: 'Value 4',
  },
  {
    imgSrc: 'https://i.ibb.co/Sx1rgXF/download.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 5',
    head: 'Value 5',
    mouth: 'Value 5',
    eyes: 'Value 5',
    whale: 'Value 5',
    body: 'Value 5',
    last: 'Value 5',
  },
  {
    imgSrc: 'https://i.ibb.co/f8jkJNZ/2913.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 6',
    head: 'Value 6',
    mouth: 'Value 6',
    eyes: 'Value 6',
    whale: 'Value 6',
    body: 'Value 6',
    last: 'Value 6',
  },
  {
    imgSrc: 'https://i.ibb.co/54YWhf7/2946.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 7',
    head: 'Value 7',
    mouth: 'Value 7',
    eyes: 'Value 7',
    whale: 'Value 7',
    body: 'Value 7',
    last: 'Value 7',
  },
  {
    imgSrc: 'https://i.ibb.co/ssLvq37/3330.png',
    imgAlt: 'Avax Whale',
    title: 'Avax Whale',
    symbol: '#1567',
    saleTime: '2d 3h 30m 32s',
    price: '2.80',
    tier: 'Value 8',
    head: 'Value 8',
    mouth: 'Value 8',
    eyes: 'Value 8',
    whale: 'Value 8',
    body: 'Value 8',
    last: 'Value 8',
  },

];

const avaxContainer = document.querySelector('.avax-container');

const displayAvax = function (avax) {
  avax.forEach(function (el) {
    const html = `
    <div class="avax">
        <i class="fas fa-info-circle avax__info-icon"></i>
        <img src="${el.imgSrc}" alt="${el.imgAlt}" class="avax__img">
        <div class="avax__content-box">
            <h2 class="avax__title">${el.title}<span class="avax__symbol">${el.symbol}</span></h2>
            <div class="avax__sale">Sale:<span class="avax__sale--time">${el.saleTime}</span></div>
            <button class="btn btn--primary">Buy: <span class="btn--price">${Number(el.price)}</span> AVAX</button>
        </div>
    </div>
    `;

    avaxContainer.insertAdjacentHTML('beforeend', html);
  });
};

displayAvax(avaxArr);

//Popup
const avax = document.querySelectorAll('.avax');
const avaxInfo = document.querySelector('.avax-info');
const avaxOverlay = document.querySelector('.avax-info__overlay');
const avaxCloseBtn = document.querySelector('.avax-info__close-btn');
const avaxInfoBtn = document.querySelectorAll('.avax__info-icon');



const addRemoveHidden = () => {
  avaxInfo.classList.toggle('hidden');
  avaxOverlay.classList.toggle('hidden');
}

avaxInfoBtn.forEach(el => {
  el.addEventListener('click', addRemoveHidden);
});

avaxCloseBtn.addEventListener('click', addRemoveHidden);
avaxOverlay.addEventListener('click', addRemoveHidden);


////////////////////////


const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const searchBox = selected.nextElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });

  searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
  });

  const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  };
});

  

const data = [
  {
    text: 'Thanks to BestRest,I met new friends & visited Europe for a penny!',
    img: './img/review-photo-1.jpg',
    name: 'Julia',
    city: 'New York',
    rating: 5,
    id: '1',
  },
  {
    text: 'Bestrest helped me a lot on my journey. I am very glad that I found such a service',
    img: '../img/review-photo-2.png',
    name: 'Mary',
    city: 'San Francisco',
    rating: 5,
    id: '2',
  },
  {
    text: 'Bestrest helped me a lot on my journey. I am very glad that I found such a service',
    img: '../img/review-photo-2.png',
    name: 'Kate',
    city: 'Kyiv',
    rating: 5,
    id: '3',
  },
];

const refs = {
  buttonList: document.querySelector('.rewiev-slider_list'),
  slider: document.querySelector('.rewiev-slider'),
};

const onButtonClick = e => {
  console.log(e.target.id);
  data.map(({ id, text, img, name, city, rating }) => {
    console.log(id === e.target.id);
    if (id === e.target.id) {
      refs.slider.innerHTML = `
       <div class="rewiev-slider_container">
            <p class="rewiev-slider_text">
              ${text}
            </p>
            <ul class="rewiev-slider_list">
              <li><button class="rewiev-slider_button" id=1 type="button"></button></li>
              <li><button class="rewiev-slider_button" id=2 type="button"></button></li>
              <li><button class="rewiev-slider_button" id=3 type="button"></button></li>
            </ul>
            <svg class="rewiev-slider_quotes" height="13.16px" width="15.74px">
              <use href="./img/svg/header-sprite.svg#quotes-icon"
            </svg>
          </div>
          <div class="rewiev-slider_userBox">
            <div class="rewiev-slider_img_bcg">
              <img class="rewiev-slider_img" src="${img}" alt="">
             </div>
            <div>
              <p class="rewiev-slider_user">${name}, ${city}</p>
              <svg class="rewiev-slider_icon">
                <use href="./img/svg/header-sprite.svg#star-icon"></use>
              </svg>
            </div>
          </div>`;
    }
    return;
  });
};

refs.buttonList.addEventListener('click', onButtonClick);

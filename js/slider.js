const data = [
  {
    comment:
      'Thanks to BestRest,I met new friends & visited Europe for a penny!',
    img: './img/review-photo-1.jpg',
    name: 'Julia',
    city: 'New York',
    rating: 5,
  },
  {
    comment:
      'Bestrest helped me a lot on my journey. I am very glad that I found such a service',
    img: './img/review-photo-2.png',
    name: 'Mary',
    city: 'San Francisco',
    rating: 5,
  },
  {
    comment:
      'Bestrest helped me a lot on my journey. I am very glad that I found such a service',
    img: './img/review-photo-3.png',
    name: 'Kate',
    city: 'Kyiv',
    rating: 5,
  },
];

const refs = {
  slider: document.querySelector('.rewiev-slider'),
  btnContainer: document.getElementById('comment-controls'),
  avatar: document.querySelector('.rewiev-slider_img'),
  comment: document.querySelector('.rewiev-slider_text'),
  user: document.querySelector('.rewiev-slider_user'),
  paginationControls: document.querySelectorAll('.rewiev-slider_button'),
};

const onCommentClick = e => {
  console.dir(e.target.dataset.id);
  const currentButton = e.target;
  const index = e.target.dataset.id;

  const commentData = data[index];
  refs.avatar.src = commentData.img;
  refs.comment.innerText = commentData.comment;
  refs.user.innerText = `${commentData.name}, ${commentData.city}`;

  refs.paginationControls.forEach(el => {
    el.classList.remove('active');
  });

  currentButton.classList.add('active');
};

refs.btnContainer.addEventListener('click', onCommentClick);

// const timerId = setInterval(onCommentClick, );

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     const current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }

// const onButtonClick = e => {
//   console.log(e.target.id);
//   data.map(({ id, text, img, name, city, rating }) => {
//     console.log(id === e.target.id);
//     if (id === e.target.id) {
//       return (refs.slider.innerHTML = `
//        <div class="rewiev-slider_container">
//             <p class="rewiev-slider_text">
//               ${text}
//             </p>
//             <ul class="rewiev-slider_list">
//               <li><button class="rewiev-slider_button" id=1 type="button"></button></li>
//               <li><button class="rewiev-slider_button" id=2 type="button"></button></li>
//               <li><button class="rewiev-slider_button" id=3 type="button"></button></li>
//             </ul>
//             <svg class="rewiev-slider_quotes" height="13.16px" width="15.74px">
//               <use href="./img/svg/header-sprite.svg#quotes-icon"
//             </svg>
//           </div>
//           <div class="rewiev-slider_userBox">
//             <div class="rewiev-slider_img_bcg">
//               <img class="rewiev-slider_img" src="${img}" alt="">
//              </div>
//             <div>
//               <p class="rewiev-slider_user">${name}, ${city}</p>
//               <svg class="rewiev-slider_icon">
//                 <use href="./img/svg/header-sprite.svg#star-icon"></use>
//               </svg>
//             </div>
//           </div>`);
//     }
//   });
// };

// refs.buttonList.addEventListener('click', onButtonClick);

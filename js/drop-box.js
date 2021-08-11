const dropDown = document.querySelector('#js-dropDown');
const dropBox = document.querySelector('#js-dropBox');

console.log(dropBox);
console.log(dropDown);

onDropBoxKlick = e => {
  console.log(e.currentTarget.className);
  if (e.currentTarget.className === 'menu-item drop-box') {
    dropDown.classList.add('is-open');
    dropDown.classList.remove('is-close');
  }
  // dropDown.classList.add('is-close');
  // dropDown.classList.remove('is-open');
};

aaa = e => {
  console.log(e.target);
};
// onDropBoxClose = e => {
//   if (e.target.className !== 'menu-item drop-box') {
//     dropDown.classList.add('is-close');
//     dropDown.classList.remove('is-open');
//   }
// };

dropBox.addEventListener('click', onDropBoxKlick);
window.addEventListener('click', aaa);

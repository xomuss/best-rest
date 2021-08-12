const dropDown = document.querySelector('#js-dropDown');
const dropBox = document.querySelector('#js-dropBox');
const dropBoxIcon = document.querySelector('#js-dropBox__icon');

console.log(dropBoxIcon);

onDropBoxKlick = e => {
  if (e.target.className === 'drop-box__link') {
    dropDown.classList.toggle('is-close');
  } else {
    dropDown.classList.add('is-close');
  }
};


document.body.addEventListener('click', onDropBoxKlick);

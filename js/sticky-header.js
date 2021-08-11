// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyHeader();
};

const header = document.getElementById('myHeader');

const sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

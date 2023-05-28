document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
  Fancybox.bind('[data-fancybox]', {
    Images: {
      Panzoom: {
        maxScale: 1.5,
      },
    },
  });
});


var mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};
mybutton.style.display = "block"

mybutton.onclick = function() {topFunction()};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
  let initialSize = window.matchMedia("(min-width: 1479px)").matches ? "max" : "fit";

  Fancybox.bind('[data-fancybox="gallery"]', {
      Images: {
          initialSize: initialSize,
          Panzoom: {
              maxScale: 2,
          },
          zoom: true,
          zoomOpacity: "auto"
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




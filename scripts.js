document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});


function toggleDescription(button) {
    const action = button.getAttribute('data-action');
    const moreText = button.parentElement.querySelector('.more');
    const seeMoreButton = button.parentElement.querySelector('.see-more-btn[data-action="more"]');
    const seeLessButton = button.parentElement.querySelector('.see-more-btn[data-action="less"]');
  
    if (action === 'more') {
      moreText.style.display = 'inline';
      seeMoreButton.style.display = 'none';
      seeLessButton.style.display = 'inline';
    } else {
      moreText.style.display = 'none';
      seeMoreButton.style.display = 'inline';
      seeLessButton.style.display = 'none';
    }
  }


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

let aboutItem = document.querySelectorAll('.nav-links li')[1];

aboutItem.addEventListener('click', function() {
  if(window.innerWidth <= 768) {
    document.querySelector('.nav-links').classList.remove('show');
  }
});



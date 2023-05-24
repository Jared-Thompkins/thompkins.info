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



      // Select the button and the extra text
  const toggleBtn = document.querySelector('.toggle-btn');
  const extraText = document.querySelector('.extra-text');

  // Add click event
  toggleBtn.addEventListener('click', () => {
    if (extraText.style.display === 'none') {
      extraText.style.display = 'inline';
      toggleBtn.textContent = 'View Less';
    } else {
      extraText.style.display = 'none';
      toggleBtn.textContent = 'View More';
    }
  });
  
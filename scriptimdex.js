document.addEventListener('DOMContentLoaded', () => {
  const userIcon = document.querySelector('.user-icon');
  const modal = document.querySelector('.login-modal');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close');

  if (!userIcon || !modal || !overlay) {
    console.warn('Login elements not found');
    return;
  }

  userIcon.addEventListener('click', () => {
    console.log('user clicked');
    modal.classList.add('active');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const userIcon = document.querySelector('.user-icon');
  const modal = document.querySelector('.login-modal');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close');
  const btnbuy = document.querySelector('.btn-buy');


  if (!userIcon || !modal || !overlay || !btnbuy) {
    console.warn('Login elements not found');
    return;
  }

 function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  // กด icon user
  userIcon.addEventListener('click', openModal);

  //  กดปุ่ม Buy Now
  btnbuy.addEventListener('click', openModal);

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
});



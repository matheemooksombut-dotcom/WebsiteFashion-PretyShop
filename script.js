document.addEventListener('DOMContentLoaded', () => {

  /* ================= Dropdown Size ================= */
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    const input = dropdown.querySelector('input');
    const items = dropdown.querySelectorAll('li');

    input.onclick = () => dropdown.classList.toggle('open');

    items.forEach(item => {
      item.onclick = () => {
        input.value = item.innerText;
        dropdown.classList.remove('open');
      };
    });
  }

  /* ================= Footer Subscribe ================= */
  const inputSubscribe = document.querySelector('#input-Subcribe');
  const btnSubscribe = document.querySelector('#btn-subscribe');
  const alertDisplay = document.querySelector('.alert-input-Subcribe');
  const alertDisplaychecked = document.querySelector('.alert-checked');
  const confirmcheckbox = document.querySelector('#confrime-input-Subcribe');

  if (btnSubscribe && inputSubscribe && confirmcheckbox) {
    btnSubscribe.addEventListener('click', () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!inputSubscribe.value.trim() || !emailPattern.test(inputSubscribe.value)) {
        alertDisplay.style.display = 'block';
      } else if (!confirmcheckbox.checked) {
        alertDisplaychecked.style.display = 'block';
      } else {
        Swal.fire({
          title: 'สำเร็จ!',
          text: 'บันทึกข้อมูลเรียบร้อยแล้ว 🎉',
          icon: 'success',
          confirmButtonText: 'OKAY',
        });
      }
    });
  }

  /* ================= Qty +/- ================= */
  const minusbtn = document.querySelector('.minus-btn');
  const plusbtn = document.querySelector('.push-btn');
  const qtyitem = document.querySelector('#qty-itm');

  if (plusbtn && minusbtn && qtyitem) {
    plusbtn.addEventListener('click', () => qtyitem.value++);
    minusbtn.addEventListener('click', () => {
      if (qtyitem.value > 1) qtyitem.value--;
    });
  }

  /* ================= Filter Color ================= */
  const dots = document.querySelectorAll('.dot');
  const products = document.querySelectorAll('.grid-itemshop > div');
  const changetext = document.querySelector('#change');
  const underlinenone  = document.querySelector('#show-all');
  const previewImg = document.querySelector('.content-product-item1 img');





  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const selectedColor = dot.dataset.color;
      if (changetext) changetext.textContent = 'Colors';
      if (underlinenone) underlinenone.style.textDecoration = 'none';


 
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const newImg = dot.dataset.img;

        if (previewImg && newImg) {
          previewImg.src = newImg;
        }



      products.forEach(product => {
        const img = product.querySelector('.product-img');
        const colors = img?.dataset.color;
        

        if (!colors) {
          product.style.display = 'none';
          return;
        }

        product.style.display = colors.split(' ').includes(selectedColor)
          ? 'block'
          : 'none';
      });
      
    });
  });
  const showAllBtn = document.querySelector('#show-all');

if (showAllBtn) {
  showAllBtn.addEventListener('click', () => {

    // เอา active ออกจาก dot ทุกอัน
    dots.forEach(d => d.classList.remove('active'));

    // แสดง product ทั้งหมด
    products.forEach(product => {
      product.style.display = 'block';
    });
    changetext.textContent = 'All Products';
    underlinenone.style.textDecoration = 'underline';

  });
}

  // ===== LOGIN =====
  const userIcon = document.querySelector('.user-icon');
  const loginModal = document.querySelector('.login-modal');
  const overlay = document.querySelector('.overlay');
  const loginClose = document.querySelector('.login-modal .close');

  const btnbuy = document.querySelector('.btn-buy');
  const btnaddcart = document.querySelector('.btn-add-cart');
  const heartrate = document.querySelector('.btn-heart');

  function openLoginModal() {
    loginModal?.classList.add('active');
    overlay?.classList.add('active');
  }

  function closeLoginModal() {
    loginModal?.classList.remove('active');
    overlay?.classList.remove('active');
  }

  userIcon?.addEventListener('click', openLoginModal);
  btnbuy?.addEventListener('click', openLoginModal);
  btnaddcart?.addEventListener('click', openLoginModal);
  heartrate?.addEventListener('click', openLoginModal);

  loginClose?.addEventListener('click', closeLoginModal);


  // ===== LOGOUT =====
  const userLogout = document.querySelector('.user-logout');
  const logoutModal = document.querySelector('.logout-modal');
  const logoutClose = document.querySelector('.logout-modal .close');

  function openLogoutModal() {
    logoutModal?.classList.add('active');
    overlay?.classList.add('active');
  }

  function closeLogoutModal() {
    logoutModal?.classList.remove('active');
    overlay?.classList.remove('active');
  }

  userLogout?.addEventListener('click', openLogoutModal);
  logoutClose?.addEventListener('click', closeLogoutModal);


  // ===== overlay close =====
  overlay?.addEventListener('click', () => {
    closeLoginModal();
    closeLogoutModal();
  });

});



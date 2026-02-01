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



  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      changetext.textContent = 'Colors';
      underlinenone.style.textDecoration = 'none';


      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const selectedColor = dot.dataset.color;

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


});

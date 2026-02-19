document.addEventListener('DOMContentLoaded', () => {
  let selectedColor = null; 
  let selectedImg = null;
  let selectedSize = null;



  /* ================= Dropdown Size ================= */
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    const input = dropdown.querySelector('input');
    const items = dropdown.querySelectorAll('li');

    input.onclick = () => dropdown.classList.toggle('open');

    items.forEach(item => {
      item.onclick = () => {
        input.value = item.innerText;
        selectedSize = item.innerText;
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

    selectedColor = dot.dataset.color;
    selectedImg = dot.dataset.img;

    if (changetext) changetext.textContent = 'Colors';
    if (underlinenone) underlinenone.style.textDecoration = 'none';

    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    if (previewImg && selectedImg) {
      previewImg.src = selectedImg;
    }

    // filter product
    products.forEach(product => {
      const img = product.querySelector('.product-img');
      const colors = img?.dataset.color;

      if (!colors) {
        product.style.display = 'none';
        return;
      }

      product.style.display =
        colors.split(' ').includes(selectedColor)
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
  const cartIcon = document.querySelector('.cart-icon');
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
  cartIcon?.addEventListener('click', openLoginModal);
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


    // check color
    const colorDots = document.querySelectorAll('.dot');
    const hasColor = colorDots.length > 0;


    // check size
    const sizeDropdown = document.querySelector(".dropdown");
    const hasSize = sizeDropdown !== null;



    // ADD ITEM TO CART


  const additems = document.getElementById("addtocart");

  if(additems){

      additems.addEventListener("click", () => {

          const qtyInput = document.querySelector("#qty-itm");

          const product = {
              name: additems.dataset.name,
              price: Number(additems.dataset.price),
              img: selectedImg || additems.dataset.img,
              qty: Number(qtyInput ? qtyInput.value : 1) ,
              color: hasColor ? selectedColor : null,
              size: hasSize ? selectedSize : null
          };

          //  กันข้อมูลไม่ครบ
         if(!product.name || !product.price || !product.img){
              alert("Data invalid");
              return;
          }

          if(hasColor && !product.color){
              alert("Please select color");
              return;
          }

          if(hasSize && !product.size){
              alert("Please select size");
              return;
          }

          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          //  รวมสินค้าซ้ำ
          const existingItem = cart.find(item => item.name === product.name &&item.color === product.color &&item.size === product.size);

          if(existingItem){
              existingItem.qty += product.qty;
          }else{
              cart.push(product);
          }

          localStorage.setItem("cart", JSON.stringify(cart));

          window.location.href = "/UserSection/cart.html";
      });

  }

  // SHOW CART (หน้า cart.html)
  const showcart = document.querySelector(".show-item-cart");

  if(showcart){

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      //  ลบข้อมูลขยะออก
      cart = cart.filter(item => item.name && item.price && item.img);

      localStorage.setItem("cart", JSON.stringify(cart));

      console.log("CART DATA:", cart);

      showcart.innerHTML = ""; // กันซ้อน

      cart.forEach(item => {

          const div = document.createElement("div");
          

          div.innerHTML = `
             
              <center>
                <img src="${item.img}" width="200" style="border-radius:20px;">
                <h3>${item.name}</h3>
                ${item.color ? `<p>Color : ${item.color}</p>` : ""}
                ${item.size ? `<p>Size : ${item.size}</p>` : ""}
                <p>ราคา-ต่อชิ้น  : ${item.price.toFixed(2)}</p>
                <p>จำนวน : ${item.qty}</p>
                <br>
                <p>ช่องทางการชำระเงิน</p>
                <br>
                <center> <div class="buyiconstyle"><i class="fa-brands fa-cc-visa"></i><i class="fa-brands fa-paypal"></i><i class="fa-brands fa-cc-amazon-pay"></i></div> </center>
                <br>
                <hr>
                <br>
              </center>
          `;

          showcart.appendChild(div);

      });

  }





 


// Addsize

document.querySelectorAll(".list li").forEach(item => {
    item.addEventListener("click", () => {

        const input = document.querySelector(".dropdown input");
        input.value = item.textContent;

        selectedSize = item.textContent;
    });
});
















  




  


 



});


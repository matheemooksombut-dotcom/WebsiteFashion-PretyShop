// หน้า Index ในการ Summit From จาก Footer
const inputSubscribe = document.querySelector('#input-Subcribe');
const btnSubscribe = document.querySelector('#btn-subscribe');
const alertDisplay = document.querySelector('.alert-input-Subcribe') ;
const alertDisplaychecked  =  document.querySelector('.alert-checked');
const confirmcheckbox = document.querySelector('#confrime-input-Subcribe');
// หน้าการเพิ่มลบสินค้า
const minusbtn  =  document.querySelector('.minus-btn');
const plusbtn  =  document.querySelector('.push-btn');
const qtyitem  =  document.querySelector('#qty-itm');



const dropdown = document.querySelector('.dropdown');
const input = dropdown.querySelector('input');
const items = dropdown.querySelectorAll('li');

input.onclick = () => dropdown.classList.toggle('open');

items.forEach(item => {
  item.onclick = () => {
    input.value = item.innerText;
    dropdown.classList.remove('open');
  };
});





// ตรวจสอบว่ามีปุ่มอยู่จริงไหม (ป้องกัน error ในหน้าอื่นที่ไม่มีปุ่มนี้)
if (btnSubscribe) {
    btnSubscribe.addEventListener('click', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputSubscribe.value.trim() === "" || !emailPattern.test(inputSubscribe.value) ) {
            alertDisplay.style.display = "block";
        }else if (!confirmcheckbox.checked){
            alertDisplaychecked.style.display = "block";
        } 
        else {
            Swal.fire({
            title: 'สำเร็จ!',
            text: 'บันทึกข้อมูลเรียบร้อยแล้ว 🎉',
            icon: 'success',
            confirmButtonText: 'OKAY',
  })
        }
    });
}
if (plusbtn && minusbtn){
  plusbtn.addEventListener('click' , () => {
    qtyitem.value++
    
  })
  minusbtn.addEventListener('click' , () => {
    if (qtyitem.value > 1) {
      qtyitem.value--
    }
  })
}


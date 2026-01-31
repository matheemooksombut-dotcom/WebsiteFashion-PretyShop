
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


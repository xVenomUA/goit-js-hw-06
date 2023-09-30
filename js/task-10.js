function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createbtn = document.querySelector('button[data-create]');
const destroybtn = document.querySelector('button[data-destroy]');
const boxed = document.querySelector('#boxes');
const destroyBoxes = () => { 
  boxed.innerHTML = '';
  console.log("element deleted");
  alert("Console deleted");
};
destroybtn.addEventListener('click', destroyBoxes); 
const createbnt = (number) => { 
  const items =[]
  for (let i = 0; i < number; i++) {
    const color = getRandomHexColor(); 
    const item = document.createElement("div");
    item.dataset.color = color; 
    item.style.backgroundColor = color;
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `30px`;
    item.style.margin = `10px`; 
    items.push(item);
  }
  boxed.append(...items); 
}
createbtn.addEventListener('click', () => createbnt(input.value));

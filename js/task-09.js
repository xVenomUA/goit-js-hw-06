function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btnChangeColor = document.querySelector('.change-color');
const spancolor = document.querySelector('.color'); 
const backcolor = document.querySelector('.widget'); 

const changeBackcolor = () => { 
 const color = getRandomHexColor(); 
  spancolor.textContent = color; 
  backcolor.style.backgroundColor = color; 
}
btnChangeColor.addEventListener('click', changeBackcolor); 
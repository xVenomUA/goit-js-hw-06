let counterValue = 0;
const spawan  = document.getElementById("value");
const btnincrement = document.querySelector('button[data-action="increment"]');
const btndecrement = document.querySelector('button[data-action="decrement"]');
const decrement = () => { 
    counterValue -= 1; 
    spawan.textContent = counterValue;
}
const increment = () => { 
    counterValue += 1; 
    spawan.textContent = counterValue;
}
btnincrement.addEventListener("click", increment);
btndecrement.addEventListener("click", decrement)       
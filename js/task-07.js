var input = document.getElementById('font-size-control'); 
var spaninp = document.getElementById('text'); 
input.addEventListener('input', () => { 
    spaninp.style.fontSize = input.value + 'px';
})

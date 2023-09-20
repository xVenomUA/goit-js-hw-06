const input = document.getElementById("validation-input");
// const leofinput = Number(input.dataset.length); 
// // console.log(le);
// const le2ofinput = Number(input.getAttribute("data-length")); 
// console.log(lee);
const le3ofinput = +input.getAttribute('data-length');
console.log(le3ofinput);
input.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length === le3ofinput) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
} )

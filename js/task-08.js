const form = document.querySelector(".login-form");
form.setAttribute("autocomplete", "off")
const personalDate = {};
const handleclicker = (event) => { 
    event.preventDefault(); 
    const form1 = event.currentTarget; 
    personalDate.email = form1.elements.password.value; 
    personalDate.password = form1.elements.email.value; 
    if (personalDate.email === "" || personalDate.password === "") { 
        alert("Ви повинні все заповнити, інакше вб`ю");
    } else { 
        console.log(`Email: ${personalDate.email} \t \t Password: ${personalDate.password}`);
        form1.reset(); 
    }
}

form.addEventListener('submit', handleclicker);
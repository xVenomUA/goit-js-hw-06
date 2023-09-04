// const funofcalculation = calculatorofarray => { // рахує к-сть елементів
//     const items = []
//     calculatorofarray.forEach((element) => {
//         items.push(element.textContent);
//     })
//     return items;
// }
// const itemheader = document.querySelectorAll(".item h2");
// const allitem = document.querySelector("ul#categories")
// const firtsitem = allitem.firstElementChild.querySelectorAll("li");
// const seconditem = allitem.firstElementChild.nextElementSibling.querySelectorAll("li");
// const lastelement = allitem.lastElementChild.querySelectorAll("li");
// const category = funofcalculation(itemheader);

// // НА КОНСОЛЬ ВИВІДД ЩОБ НЕ ЗАПЛУТИСЬ
// console.log(`Number of categories: ${funofcalculation(itemheader).length}`);
// console.log(`\nCategory: ${category[0]}\nElements: ${funofcalculation(firtsitem).length}`);
// console.log(`\nCategory: ${category[1]}\nElements: ${funofcalculation(seconditem).length}`);
// console.log(`\nCategory: ${category[2]}\nElements: ${funofcalculation(lastelement).length}`);
 

const allitem = document.getElementById("categories"); // отримує всі елементи за айді 
const itemlikegrop = allitem.querySelectorAll("li.item"); 
console.log(`Number of categories: ${itemlikegrop.length}`);
itemlikegrop.forEach((element) => {
    const category = element.querySelector("h2").textContent; 
    const amountofcategory = element.querySelectorAll("li").length; 
    console.log(`Category: ${category} \nElements: ${amountofcategory} \n`);
});

// Коменти для себе) досить довго бавився з тим) і пробував скоротити 
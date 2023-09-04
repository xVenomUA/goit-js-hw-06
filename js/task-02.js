const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients"); 
ingredients.forEach((element) => { 
  const each = document.createElement("li"); 
  each.textContent = element;
  list.append(each);
})
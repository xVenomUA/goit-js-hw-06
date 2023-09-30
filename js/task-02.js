const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");
list.innerHTML = ingredients.map((element) => `<li>${element}</li>`).join("");

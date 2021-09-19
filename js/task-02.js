const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
});
console.log(elements);
ingredientsList.append(...elements);




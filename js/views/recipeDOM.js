import {element} from './base'
export const displayRecipeData= (recipeData) => {
    const displayData = recipeData.map (recipe => {
                return `
                <li id="recipe__list">
                <img src=${recipe.image} alt=${recipe.label} id="one">
       </li>  `
}).join("");
element.dataList.insertAdjacentHTML('afterbegin',displayData)
}
// <h1 id="recipe_heading">coconut recipe</h1>
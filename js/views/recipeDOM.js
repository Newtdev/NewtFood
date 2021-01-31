import {element} from './base'
export const displayRecipeData= (recipeData) => {
    const displayData = recipeData.map (recipe => {
                return `
                <li id=${recipe.label}>
                <img src=${recipe.image} alt=${recipe.label} id="one">
       </li>  `
}).join("");

clearDOM(displayRecipeData,displayData)

}

// CLEAR RECIPE IMAGE DOM WHEN ANOTHER SEARCH IS MADE
 const clearDOM = (recipe,data)=> {
    if(recipe){
        EmptyDOM()
        element.dataList.insertAdjacentHTML('afterbegin',data);
    } else{
        element.dataList.insertAdjacentHTML('afterbegin',data);
    }
    
}
// SET RECIPE IMAGE DOM TO EMPTY
const EmptyDOM = () => {
    element.dataList.innerHTML = '';
    
}
// <h1 id="recipe_heading">coconut recipe</h1>
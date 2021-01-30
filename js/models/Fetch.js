/** getting fetched data from the class */
import SearchTerm from './Search'
import {appState} from './Search'
export const getData = (recipe) => {
    const recipeData = recipe.data;
             const {hits} = recipeData;
             const allData = getRecipeData(hits);
return allData;
}

/**Fetch recipe data */
export const getRecipeData= (hits) => {
    const getRecipe = hits.map(data => {
         return {
              image : data.recipe.image,
                 label : data.recipe.label,
                 ingredientLines: data.recipe.ingredientLines,
                 calories : data.recipe.calories,
                 dietLabels : data.recipe.dietLabels,
                 totalNutrients : data.recipe.totalNutrients
         }   
         return image,label,ingredientLines,calories,dietLabels,totalNutrient,totalNutrients
    })
    return getRecipe;
}

import {element} from './base';
import {displayRecipeData} from './recipeDOM';


 export const loader = (recipeData)=> {
    element.recipeLoader.classList.add("hide");
    setTimeout(()=> {
        element.recipeLoader.classList.remove("hide");
        setTimeout(()=> {
        })
    },5000);
}

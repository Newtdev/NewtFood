import axios from "axios";
export default class SearchTerm {
    constructor (query){
        this.query = query;
    }
    async fetchData (){
        try {
            const apikey = `10cb8379af992120842d026d1a9e5dfd`;
            const apiID = `6a22847e`;
            let response = await axios(
                `https://api.edamam.com/search?q=${this.query}&app_id=${apiID}&app_key=${apikey}`
             );
             const recipeData = response.data;
             const {hits} = recipeData;
             this.recipeData = hits;
            //  console.log(recipeData);
getRecipeData(this.recipeData)
console.log(getRecipeData(this.recipeData));
            
        } catch (error) {
            console.log(error)
            throw error
            
        }
}
}
export 
const appState = {
    recipe: {},
    search:{
        query: '',
        result: [],
    },
    bookmark: []
}
const getRecipeData= (hits) => {
    const getRecipe = hits.map(data => {
         return {
              image : data.recipe.image,
                 label : data.recipe.label,
                 ingredientLines: data.recipe.ingredientLines,
                 calories : data.recipe.calories,
                 dietLabels : data.recipe.dietLabels,
                 totalNutrients : data.recipe.totalNutrients
         }   

    })
    return getRecipe;
}

import 'regenerator-runtime/runtime';
import Tab from "./views/Tab";
import SearchTerm from "./models/Search";
import {element} from './views/base';
import {getData} from './models/Fetch';
import {getRecipeData} from './models/Fetch';
import {displayRecipeData} from './views/recipeDOM';
import {addLoader} from './views/addLoader'
import {loader} from './views/addLoader'
let searchValue = element.searchQuery;

const appState = {}

element.submitText.addEventListener('submit', (e)=> {
  e.preventDefault();
  //    GET THE INPUTED VALUE
    queryValue()
  //   ADD LOADER AND FETCH DATA
  loader(fetchQuery());
  // CLEAR INPUT ON CLICK OF SUBMIT BUTTON
  searchValue.value = '';
})
//  GET SEARCHED RECIPE INPUTS
export const queryValue = () => {
  if(searchValue.value == ''){
    alert('input a food recipe of your choice');
    console.log("input a food recipe of your choice")
  }
    else{
      fetchQuery(searchValue)
    } 
 };

//  GET ALL DATA FROM THE NEW OBJECTS AND SAVED TO THE APP STATE
const fetchQuery = async (term) => {
  appState.term = new SearchTerm(term);
  // UPDATE APP STATE
  let getQuery = await appState.term.fetchData()
  // DISPLAY RECIPE
  displayRecipeData(getQuery)
  return getQuery;
}
// fetchQuery("chicken")


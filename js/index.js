import 'regenerator-runtime/runtime';
import Tab from "./views/Tab";
import SearchTerm from "./models/Search";
import {element} from './views/base';
import {getData} from './models/Fetch';
import {getRecipeData} from './models/Fetch';
import {displayRecipeData} from './views/recipeDOM';
import {addLoader} from './views/addLoader';
import {loader} from './views/addLoader';
import * as mobileDOM from "./views/mobile"
// let searchValue = element.searchQuery;


const appState = {}

element.submitText.addEventListener('submit', (e)=> {
  e.preventDefault();
  //    GET THE INPUTED VALUE
    queryValue()
  //   ADD LOADER AND FETCH DATA
  loader(fetchQuery(element.searchQuery.value));
  // CLEAR INPUT ON CLICK OF SUBMIT BUTTON
element.searchQuery.value = '';

})
//  GET SEARCHED RECIPE INPUTS
export const queryValue = () => {
  if(element.searchQuery.value == ''){
    alert('input a food recipe of your choice');
    console.log("input a food recipe of your choice")
  }
 };

//  GET ALL DATA FROM THE NEW OBJECTS AND SAVED TO THE APP STATE
const fetchQuery = async (term) => {
  appState.term = new SearchTerm(term);
  console.log(appState.term);
  // UPDATE APP STATE
  let getQuery = await appState.term.fetchData()
  // DISPLAY RECIPE
  displayRecipeData(getQuery)
  console.log(displayRecipeData(getQuery));
  return getQuery;
}
// fetchQuery("chicken")


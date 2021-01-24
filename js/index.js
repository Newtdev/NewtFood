import 'regenerator-runtime/runtime';
import Tab from "./models/Tab";
import SearchTerm from "./models/Search"
import SearchView from './views/SearchView'






addEventListener('submit', (e)=> {
  e.preventDefault();
  const term = new SearchTerm(search.value).fetchData();
  // console.log(search.value);
  // const term = new SearchTerm(search.value).fetchData();
  
//    get the value of input.
//    update app state
//   add loader
//  display data: image and label
})




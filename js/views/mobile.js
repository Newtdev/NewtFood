import {element} from './base'
const mediaQuery = window.matchMedia("(max-width:768px)")
const detailsLenght = (e) => {
    console.log(e);
    if(e.matches){
    const recipeContainerHeight= element.recipeContainer.getBoundingClientRect().height;
    // element.leftContainer.style.height= `${recipeContainerHeight}`;
    const leftHeight= element.leftContainer.getBoundingClientRect().height + 100;
}
}
mediaQuery.addListener(detailsLenght(mediaQuery))

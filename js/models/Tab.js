const animate = document.querySelectorAll(".animate_page");
const button = document.querySelector(".button");
const searchIcon = document.querySelector(".searchIcon");
const search = document.querySelector(".search");
const small = document.querySelectorAll("small");

/** get each page on click on the icon for mobile view */
const tab = btn => {
  btn.addEventListener("click", e => {
    const id = e.target.closest(".mobile_nav");
    const targetedSmall = e.target.closest("div").querySelector("small");
    /**add name to the targted icon */
    addIconName(targetedSmall);
    /**getting the page on clicked on the icon */
    pageOnClicked(id);
  });
};
tab(button);

/** add the name to the button icon */
function addIconName(elem) {
  if (elem) {
    small.forEach(small => {
      small.classList.remove("hide_small");
    });
  }
  elem.classList.add("hide_small");
}

function pageOnClicked(id) {
  if (id) {
    const clickedID = id.dataset.id;
    const pageId = document.getElementById(clickedID);
    /**remove hide page class from all section */
    animate.forEach(section => {
      section.classList.remove("hide_page");
    });
    /**add hide page class to the page with id that matches the icon id
     */
    pageId.classList.add("hide_page");
  }
}

/**search icon to open search bar at the top */
const openSearchBar = () => {
  searchIcon.addEventListener("click", () => {
    search.classList.toggle("active");
  });
};

openSearchBar();

/**
 * MENU LAB: this is the first of a two-part labbuild a menu bar with a slide-down submenu.
 **/

/**
 * task 3.0: Copy the following data structure to the top of script.js
 **/
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

/**
 * task 1.0: Select and cache the <main> element in a variable named mainEl
 **/
let mainEl = document.querySelector('main');

/**
 * task 1.1: Set the background color of mainElto the value stored in the --main-bgCSS custom property.
 **/
mainEl.style.backgroundColor = "var(--main-bg)";

/**
 * task 1.2: Set the content of mainElto <h1>SEI Rocks!</h1>.
 **/
mainEl.innerHTML = "<h1>Sei Rocks!</h1>"

/**
 * task 1.3: Add a class of flex-ctrto mainEl.
 **/
mainEl.classList = "flex-ctr";

/**
 * task 2.0: Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
 **/
let topMenuEl = document.getElementById("top-menu")

/**
 * task 2.1: Set the height topMenuElelement to be 100%
 **/
topMenuEl.style.height = "100%";

/**
 * task 2.2: Set the background color of topMenuElto the value stored in the --top-menu-bg CSS custom property.
 **/
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

/**
 * task 2.3: Add a class of flex-aroundto topMenuEl.
 **/
topMenuEl.classList = "flex-around";

/**
 * task 3.1: Iterate over the entire menuLinksarray and for each "link" object:
 * Create an <a>element.
 * On the new element, add an href attribute with its value set to the href property of the "link" object.
 * Set the new element's content to the value of the textproperty of the "link" object.
 * Append the new element to the topMenuElelement.
 **/

buildLinks(menuLinks, topMenuEl);

/**
 * task 4: Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
 **/
let subMenuEl = document.getElementById("sub-menu");

/**
 * task 4.1: Set the height subMenuElelement to be 100%
 **/
subMenuEl.style.height = "100%";

/**
 * task 4.2: Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
 **/
subMenuEl.style.background = "var(--sub-menu-bg)";

/**
 * task 4.3: Add the class of flex-aroundto the subMenuElelement.
 **/
subMenuEl.classList = "flex-around";

/**
 * task 4.4: Set the CSS positionproperty of subMenuElto the value of absolute.
 **/
subMenuEl.style.position = "absolute";

/**
 * task 4.5: Set the CSS topproperty of subMenuElto the value of 0.
 **/
subMenuEl.style.top = "0";

/**
 * task 5.1: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
 **/
let topMenuLinks = topMenuEl.querySelectorAll("a");

// Declare a global showingSubMenuvariable and initialize it to false
let showingSubMenu = false;

/**
 * task 5.2: Attach a delegated 'click' event listener to topMenuEl.
 * The first line of code of the event listener function should call the event object's preventDefault()method.
 * The second line of code function should immediately return if the element clicked was not an <a>element.
 * console.logthe content of the <a>to verify the handler is working.
 **/
topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    let clickedLink;
    if (event.target.tagName.toLowerCase() != "a") {
      return;
    } else {
/**
 * Ensure ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
 * Clicking anywhere other than on a link should do nothing.
 **/
      clickedLink = event.target;
      console.log(clickedLink);
  }

/**
 * task 5.3: Next in the event listener, if the clicked <a>link has a class of active:
 * Remove the activeclass from the clicked <a>element.
 * Set the showingSubMenuto false.
 * Set the CSS topproperty of subMenuElto 0.
 * returnto exit the handler.
 **/
    if (clickedLink.classList.contains("active")) {
      clickedLink.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    } else {
/**
 * task 5.4: Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
 * Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
 **/
      for (links of topMenuLinks) {
        links.classList.remove("active");
      }
    }
/**
 * task 5.5: Next, the event listener should add a class name of activeto the <a>element that was clicked.
 **/
    clickedLink.classList.add("active");
/**
 * task 5.6: Set showingSubMenuto true if the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
 * Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
 **/
    let menuSubLink;

    for (link of menuLinks) {
      if (link.text == clickedLink.textContent) {
        if (link.subLinks) {
          showingSubMenu = true;
          menuSubLink = link.subLinks;
        } else {
          showingSubMenu = false;
          console.log("No sublinks here.");
        }
      }
    }

    console.log(menuSubLink);
/**
 * task 5.7
 * If showingSubMenuis true:
 * Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
 * Set the CSS topproperty of subMenuElto 100%.
 * Otherwise (showingSubMenuis false):
 * Set the CSS topproperty of subMenuElto 0.
 **/
    if (showingSubMenu == true) {
      buildSubMenu(menuSubLink);
      subMenuEl.style.top = "100%"
    } else {
      subMenuEl.style.top = "0";
    }

/**
 * Task 6.4: If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
**/    
    if (clickedLink.textContent == "about") {
      mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;
    } else {
      mainEl.innerHTML = "<h1>Sei Rocks!</h1>";
    }
  }
);


function buildLinks (array, element) {
  for (item of array) {
    let newLink = document.createElement("a");
    newLink.href = item.href;
    newLink.textContent = item.text;
    element.appendChild(newLink);
  }
}

/**
 * Task 5.8: Code the buildSubMenufunction so that it:
 * Clears the contents of subMenuEl.
 * Iterates over the subLinksarray passed as an argument; and for each "link" object:
 * Create an <a>element.
 * On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
 * Set the new element's content to the value of the textproperty of the "link" object.
 * Append the new element to the subMenuElelement.
 **/

const buildSubMenu = (array) => {
  subMenuEl.innerHTML = "";
  buildLinks(array, subMenuEl);
}

/**
 * Task 6.0: Attach a delegated 'click' event listener to subMenuEl.
 * The first line of code of the event listener function should call the event object's preventDefault()method. 
 * The second line of code function should immediately return if the element clicked was not an <a>element
 * console.log the content of the <a>to verify the handler is working.
**/
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  let clickedSubLink

  if (event.target.tagName.toLowerCase() == "a") {
    clickedSubLink = event.target;
    //console.log(clickedSubLink);
  } else {
    return;
  }

/** 
 * Task 6.1: Next, the event listener should:
 * Set showingSubMenuto false.
 * Set the CSS topproperty of subMenuElto 0.
 **/
  showingSubMenu = false;
  subMenuEl.style.top = "0";

/**
 * Task 6.2: 
 * Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
**/
  for (link of topMenuLinks) {
    link.classList.remove("active");
  }
/* Task 6.3: Update the contents of mainEl to the contents of the <a>element, within an <h1>, clicked within subMenuEl.
**/
  mainEl.innerHTML = `<h1>${clickedSubLink.textContent}</h1>`;
});

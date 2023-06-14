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

menuLinks.forEach(link => {
    const newLink = document.createElement("a");
    for (text in link){
        newLink.href = link.href;
        newLink.textContent = `${link.text}`;
    }
    topMenuEl.appendChild(newLink);
})

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

    if (event.target.tagName.toLowerCase() != "a") {
      return;
    } else {
      console.log(event.target.textContent);
    }

  });


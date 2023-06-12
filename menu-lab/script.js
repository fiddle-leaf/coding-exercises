/**
 * MENU LAB: this is the first of a two-part labbuild a menu bar with a slide-down submenu.
 **/

/**
 * task 3.0: Copy the following data structure to the top of script.js
 **/
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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



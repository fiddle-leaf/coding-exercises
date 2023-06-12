/**
 * MENU LAB: this is the first of a two-part labbuild a menu bar with a slide-down submenu.
 **/
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


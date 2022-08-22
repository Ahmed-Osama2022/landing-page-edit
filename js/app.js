/**
 * Define global variables
 * 
 */
const nav = document.getElementById('navbar__list'); 
const allSection = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
*/

// Creating the Navigation function
allSection.forEach((section) => {
    const myNavName = section.getAttribute("data-nav");    
    const myIdNavName = section.getAttribute("id");    
    const linkTag = document.createElement('a');
    const myList = document.createElement('li');
    // Let's now getting the names of my sections by the data attribute:
    linkTag.classList.add('menu__link');
    // Let's create a link :
    linkTag.href = `#${myIdNavName}`;
    
    linkTag.textContent = myNavName;
/**
 * End Main Functions
 * Begin Events
 *
 */    
    // Add event to change the color of the link when it's clicked
    linkTag.addEventListener('click', function () {
        const changeColor = linkTag;
        changeColor.style.color = 'purple';
    });
    // Scroll to section on link click
    linkTag.addEventListener('click', function(event) {
        section.scrollBy({
            behavior: "smooth",
        });
    });
    // Then append all of the links to the list items:
    myList.appendChild(linkTag);
    fragment.appendChild(myList);    
});
// Now after added to the fragment, we have to append it to the <ul> list:
nav.appendChild(fragment);

// styling for the active states with getBoundingClientRect
window.onscroll = function() {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

/**
 * The end of events
 * The end of script
 */

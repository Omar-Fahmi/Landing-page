//defien global variables we will work on
const sections = Array.from(document.querySelectorAll("section"));
const navbarList = document.getElementById("navbar__list");


//create li 
function createList() {
    for (const section of sections) {
        //create li by js .createElement
        listItems = document.createElement("li");
        //make anchor tag inside li to build nav and scroll to section which user clicked on at navbar
        listItems.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        //make that scroll (jumb on) to that section is smooth for good use
        listItems.addEventListener("click", e=>{
            e.preventDefault();
            section.scrollIntoView({behavior: "smooth"})
        })
        //append that into ul (navbarlist id in html file)
        navbarList.appendChild(listItems);
        
    }
}
createList();

//make tat sections active when its in viewport
function activeClass(){
    sections.forEach(section =>{
        //making section pos. to can make this pos. is active
        const sectionPosition = section.getBoundingClientRect().top;
        //this activeLink for highlighting active sec in navbar
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        //check conditions to active sections
        if(sectionPosition >= 0 && sectionPosition <= 300){
            section.classList.add("your-active-class");
            activeLink.classList.add("active");
        }else{
        section.classList.remove("your-active-class");
            activeLink.classList.remove("active");
        }
    })
}
//call it by window to make this function when user scrolling
window.addEventListener("scroll", activeClass);

// set the links active fro sryles and appearance
window.addEventListener("scroll", ()=>{
    sections.forEach((section)=>{
        const activeLink = document.querySelector(`#${section.id}`);
        activeLink.classList.add("active");
    });
});

//make button scroll at top of the page
let span = document.querySelector(".UP");
//function make that scroll of button work 
window.onscroll = function(){
    this.scrollY >= 700 ? span.classList.add("show") : span.classList.remove("show");
};


//where this button sending user when he will click on button and make scroll smooth 
span.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

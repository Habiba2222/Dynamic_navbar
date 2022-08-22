/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//Getting the position of each section
function getPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

   
//Checking if the section is in view port
function inViewPort(element){
const dist=element.getBoundingClientRect();
return(dist.top>=0 && dist.left>=0 && dist.bottom <= (window.innerHeight || document.documentElement.clientHeight) && dist.right <=(window.innerWidth || document.documentElement.clientWidth));
}
  

//Removing the class active from the last element when it's unchecked.
function removeLastActive()
{
    try{
        const selectedBefore=document.querySelector('.active');
        selectedBefore.classList.remove("active");
        selectedBefore.className="menu__link";
    }
    catch(err)
    {

    }
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


function addSections()
{
    const sections=document.querySelectorAll('.sections');  //getting the class of the h2 elements to write the header in the navbar
    const navbar=document.querySelector('#navbar__list');    //here we get the ul element in order to append in it the list
    
    sections.forEach(
        function(currentValue,index){

            /////////////Creating the items in the navbar ///////////////////////////
            const node = document.createElement("li"); 
            node.className="menu__link";
            const link=document.createElement("a");
            node.appendChild(link);
            const textnode = document.createTextNode(`${currentValue.textContent}`);
            link.appendChild(textnode);
            link.style.cursor="pointer";
            navbar.appendChild(node);


                /////////////////////////////////////////////////////////////////////////////////////////
                    //checking the sections if they are in the view port
            const el=document.querySelectorAll('.landing__container');
            window.addEventListener("scroll",function(){
                el.forEach(function(element){
                if(inViewPort(element))
                {
                    
                    const headerElement=element.firstElementChild;
                    if(headerElement.textContent===currentValue.textContent)
                    {
                        removeLastActive();
                        node.className="active";
                        
                    }
                }
            })
                   
            })
                                       
           /////////////////////adding the user-click event to the links//////////////
            link.addEventListener("click", function()
            {
                const element=document.querySelector(`#section${index+1}`);   //getting the section in which the user selected
                const pos=getPosition(element);                             //getting its position using a defined helper function
                
                removeLastActive();
              
                window.scrollTo(pos.left,pos.top);                                //scrolling to the position on clicking
                node.className="active";
            });  


            
    
            

          
            
        }
    )
   
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



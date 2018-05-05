/*-------------------------------------
||grab some asset
||
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

// console.log(tabLinks);
// console.log(theSections);
/*-------------------------------------
| one function to rule all
-------------------------------------*/
//function declaration
function switchSection(whichSection){

    whichSection = whichSection - 1;
    console.log(whichSection);
    /*-------------------------------------
    | sections
    -------------------------------------*/
    // hide them all
    for(var i = 0; i < theSections.length; i++){

        theSections[i].style.display = 'none';
    }
    // show the chosen one
    theSections[whichSection].style.display = 'block';
    /*-------------------------------------
    | links
    -------------------------------------*/
    tabLinks.forEach(function(theLink){
        theLink.classList.remove('chosen');
    });

    tabLinks[whichSection].classList.add('chosen');

}
// function call
switchSection(1);

/*-------------------------------------
| mange event listeners on tablinks
-------------------------------------*/
tabLinks.forEach(function(currentLink){


    currentLink.addEventListener('click', function(e){

        // stop jumping, remove default event, e stands for event, we can call it whatever we want
        console.log(e);
        e.preventDefault();
        // We will do this instead
        var theSection = this.dataset.section;
        switchSection(theSection);
    });

});

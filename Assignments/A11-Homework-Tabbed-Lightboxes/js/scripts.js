var sections = document.querySelectorAll('.section');
var tabLinks = document.querySelectorAll('nav.tabs a');
var theImage = document.querySelectorAll('.gallery img');
var closeButton = document.querySelector('.inner .close');
var light = document.querySelector('.lightbox');

var lImage = document.querySelector('.lightbox .inner img');
var lTitle = document.querySelector('.lightbox .inner .title');
var lDetail = document.querySelector('.lightbox .inner .detail');

// var lDetial = ducoment.querySelector('.lightbox .inner .detail');
// console.log(sections);
// console.log(tabLinks);
// console.log(theImage);
// console.log(closeButton);

function theWindow(thisWindow){
  thisWindow = thisWindow - 1;
  // console.log(thisWindow);
  for(var i = 0; i < sections.length; i++){
    sections[i].style.display = 'none';
    // console.log(sections[i]);
  }
  sections[thisWindow].style.display = 'block';

  tabLinks.forEach(function(currentLink){
    currentLink.classList.remove('chosen');
    tabLinks[thisWindow].classList.add('chosen');
  });

}
theWindow(1);

tabLinks.forEach(function(theLink){
  theLink.addEventListener('click',function(de){
    de.preventDefault();
    var Selected = this.dataset.sec;
    theWindow(Selected);
  });
});

function light_on() {
  light.style.display= "block";
  // console.log('on');
  lImage.src = this.src;
  lTitle.innerHTML = this.dataset.title;
  lDetail.innerHTML = this.dataset.details;
}
// light_on();
function light_off() {
  light.style.display= "none";
}

theImage.forEach(function(thisPic){
  thisPic.addEventListener('click',light_on);
});
closeButton.addEventListener('click', light_off);

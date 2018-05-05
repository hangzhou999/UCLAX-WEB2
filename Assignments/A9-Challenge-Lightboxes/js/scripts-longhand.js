var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');
console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

imageDials[1].addEventListener('click',function(){
  // console.log('You clicked me!');
  // remove all chosen
  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');
  // add to the chosen one
  imageDials[1].classList.add('chosen');

  var whichTheme = imageDials[1].dataset.theme;
  // document.querySelector('link.theme').href = whichTheme;
  linkTheme.href = whichTheme;

});
imageDials[2].addEventListener('click',function(){
  // console.log('You clicked me!');
  // remove all chosen
  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');
  // add to the chosen one
  imageDials[2].classList.add('chosen');

  var whichTheme = imageDials[2].dataset.theme;
  // document.querySelector('link.theme').href = whichTheme;
  linkTheme.href = whichTheme;

});
imageDials[0].addEventListener('click',function(){
  // console.log('You clicked me!');
  // remove all chosen
  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');
  // add to the chosen one
  imageDials[0].classList.add('chosen');

  var whichTheme = imageDials[0].dataset.theme;
  // document.querySelector('link.theme').href = whichTheme;
  linkTheme.href = whichTheme;

});

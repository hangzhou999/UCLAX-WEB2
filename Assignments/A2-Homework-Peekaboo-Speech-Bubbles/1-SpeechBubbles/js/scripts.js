
window.onload= function(){
  var features=document.querySelectorAll('.feature');
  console.log(features);
  console.log(features[0]);
  console.log(features[1]);
  console.log(features[2]);

  var bubbles=document.querySelectorAll('.bubble');
  console.log(bubbles);
  console.log(bubbles[0]);
  console.log(bubbles[1]);
  console.log(bubbles[2]);

  bubbles[0].classList.toggle('on');
  bubbles[1].classList.toggle('on');
  bubbles[2].classList.toggle('on');

  features[0].addEventListener('mouseover',function(){
    bubbles[0].classList.toggle('on');
  });
  features[0].addEventListener('mouseout',function(){
    bubbles[0].classList.toggle('on');
  });

  features[1].addEventListener('mouseover',function(){
    bubbles[1].classList.toggle('on');
  });
  features[1].addEventListener('mouseout',function(){
    bubbles[1].classList.toggle('on');
  });

  features[2].addEventListener('mouseover',function(){
    bubbles[2].classList.toggle('on');
  });
  features[2].addEventListener('mouseout',function(){
    bubbles[2].classList.toggle('on');
  });


};

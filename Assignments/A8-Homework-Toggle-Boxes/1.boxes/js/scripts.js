var boxes = document.querySelectorAll('.box');
/*
  console.log(boxes);
  boxes[0].addEventListener('click',function(){
    boxes[0].classList.toggle('on');
  });
  boxes[1].addEventListener('click',function(){
    boxes[1].classList.toggle('on');
  });
  boxes[2].addEventListener('click',function(){
    boxes[2].classList.toggle('on');
  });
  boxes[3].addEventListener('click',function(){
    boxes[3].classList.toggle('on');
  });
  boxes[4].addEventListener('click',function(){
    boxes[4].classList.toggle('on');
  });
  boxes[5].addEventListener('click',function(){
    boxes[5].classList.toggle('on');
  });
  */

boxes.forEach(function(switchBox){
  switchBox.addEventListener('click',function(){
    switchBox.classList.toggle('on');
  });
});

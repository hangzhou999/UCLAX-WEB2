var drawers = document.querySelectorAll('.drawer');

console.log(drawers);
/*
drawers[0].addEventListener('click',function(){
  drawers[0].classList.toggle('on');
});
drawers[1].addEventListener('click',function(){
  drawers[1].classList.toggle('on');
});
drawers[2].addEventListener('click',function(){
  drawers[2].classList.toggle('on');
});
drawers[3].addEventListener('click',function(){
  drawers[3].classList.toggle('on');
});
*/
drawers.forEach(function(switchDrawer){
  switchDrawer.addEventListener('click',function(){
    switchDrawer.classList.toggle('on');
  });
});

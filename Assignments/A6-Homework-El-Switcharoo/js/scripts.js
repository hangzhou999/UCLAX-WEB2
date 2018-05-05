var switchers = document.querySelectorAll('.switch');
var sliders = document.querySelectorAll('.slider');
var bottombirds = document.querySelectorAll('.bottombird');
var topbirds = document.querySelectorAll('.topbird');

console.log(switchers);
console.log(sliders);
console.log(bottombirds);
console.log(topbirds);

sliders[0].addEventListener('click',function(){
  sliders[0].classList.toggle('on');
  switchers[0].classList.toggle('on');
  bottombirds[0].classList.toggle('on');
  topbirds[0].classList.toggle('on');
});
sliders[1].addEventListener('click',function(){
  sliders[1].classList.toggle('on');
  switchers[1].classList.toggle('on');
  bottombirds[1].classList.toggle('on');
  topbirds[1].classList.toggle('on');
});
sliders[2].addEventListener('click',function(){
  sliders[2].classList.toggle('on');
  switchers[2].classList.toggle('on');
  bottombirds[2].classList.toggle('on');
  topbirds[2].classList.toggle('on');
});

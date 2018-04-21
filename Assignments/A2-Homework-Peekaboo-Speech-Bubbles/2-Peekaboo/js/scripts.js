window.onload = function(){

  var items = document.querySelectorAll('.item');
  console.log(items);
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  console.log(items[3]);
  console.log(items[4]);
  console.log(items[5]);

  var texts = document.querySelectorAll('.text');
  console.log(texts);
  console.log(texts[0]);
  console.log(texts[1]);
  console.log(texts[2]);
  console.log(texts[3]);
  console.log(texts[4]);
  console.log(texts[5]);

  var descs = document.querySelectorAll('.desc');
  console.log(descs);
  console.log(descs[0]);
  console.log(descs[1]);
  console.log(descs[2]);
  console.log(descs[3]);
  console.log(descs[4]);
  console.log(descs[5]);

  texts[0].classList.remove('on');
  descs[0].classList.remove('on');
  texts[1].classList.remove('on');
  descs[1].classList.remove('on');
  texts[2].classList.remove('on');
  descs[2].classList.remove('on');
  texts[3].classList.remove('on');
  descs[3].classList.remove('on');
  texts[4].classList.remove('on');
  descs[4].classList.remove('on');
  texts[5].classList.remove('on');
  descs[5].classList.remove('on');

  items[0].addEventListener('mouseover',function(){
    texts[0].classList.add('on');
    descs[0].classList.add('on');

  });
  items[0].addEventListener('mouseout',function(){
    texts[0].classList.remove('on');
    descs[0].classList.remove('on');

  });

  items[1].addEventListener('mouseover',function(){
    texts[1].classList.add('on');
    descs[1].classList.add('on');

  });
  items[1].addEventListener('mouseout',function(){
    texts[1].classList.remove('on');
    descs[1].classList.remove('on');

  });

  items[2].addEventListener('mouseover',function(){
    texts[2].classList.add('on');
    descs[2].classList.add('on');

  });
  items[2].addEventListener('mouseout',function(){
    texts[2].classList.remove('on');
    descs[2].classList.remove('on');

  });

  items[3].addEventListener('mouseover',function(){
    texts[3].classList.add('on');
    descs[3].classList.add('on');

  });
  items[3].addEventListener('mouseout',function(){
    texts[3].classList.remove('on');
    descs[3].classList.remove('on');

  });

  items[4].addEventListener('mouseover',function(){
    texts[4].classList.add('on');
    descs[4].classList.add('on');

  });
  items[4].addEventListener('mouseout',function(){
    texts[4].classList.remove('on');
    descs[4].classList.remove('on');

  });

  items[5].addEventListener('mouseover',function(){
    texts[5].classList.add('on');
    descs[5].classList.add('on');

  });
  items[5].addEventListener('mouseout',function(){
    texts[5].classList.remove('on');
    descs[5].classList.remove('on');

  });


};

window.onload= function (){
  var clickButton = document.querySelector('.button');
  var showHideText = document.querySelector('#showhide');
  var tatchaDetail = document.querySelector('div.details');

  console.log('button',clickButton);
  console.log('showhidetext',showHideText);
  console.log('tatcha',tatchaDetail);

  tatchaDetail.style.display = 'none';
  clickButton.addEventListener('click',function(){
    if (tatchaDetail.style.display == 'none'){
      tatchaDetail.style.display = 'block';
      showHideText.innerHTML = 'Hide';
    }
    else {
      tatchaDetail.style.display = 'none';
      showHideText.innerHTML = 'Show';
    }
  });

}

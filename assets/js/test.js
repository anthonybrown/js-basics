//<body onload="deactivate()">

function test_hide() {
  var selector, elems, makeActive;
  selector = '.nav li';
  elems = document.querySelectorAll(selector);
  makeActive = function () {
  for (var i = 0; i < elems.length; i++) {
    elems[i].classList.remove('active');
  }
  //this.style.display='block';
  this.classList.add('active');
  };
  for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('mousedown', makeActive);
    hide();
  }
}

function hide() {
  document.getElementById('top').style.display= 'block';
  document.getElementById('birthdays').style.display= 'none';
  document.getElementById('friends').style.display= 'none';
  document.getElementById('personalize').style.display= 'none';
  document.getElementById('personalize').classList.remove('active');
  this.classList.add('active');
}

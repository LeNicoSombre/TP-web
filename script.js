function changeCouleur() {
    intervalID = setInterval(flashText, 1000);
  }
  
  function flashText() {
    var elem = document.getElementById("ma_boite");
    if (elem.style.color == 'red') {
    elem.style.color = 'blue';
  } else {
    elem.style.color = 'red';
  }
}

  function stopTextColor() {
    clearInterval(intervalID);
  }

  var changetext = function(){
    var elem = document.getElementById("ma_boite");
    elem.innerHTML = '<h1>Test</h1>'
  }
var myMain = function(){
    changeCouleur();
    var button = document.getElementById('stop');
    button.addEventListener('click',stopTextColor);
    window.setTimeout(changetext,2000);
}
document.addEventListener("DOMContentLoaded" , myMain ,false);
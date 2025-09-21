window.onload="loadDefaultLooks()";

var body_element = ' ',
    styled_looks = ['defaults-00-look', 'green-black-01-look', 'yellow-black-02-look'],
    looksGreenAckClassName = 'green-black-01-look',
    looksYellowAckClassName = 'yellow-black-02-look',
    looksListName ='look-linker-list',
    javascript_info = 'off-javascript-enable-message',
    bodyHTML_classList = '';

function getFirstBodyElement(){
  return document.getElementsByTagName('body')[0];
} 

function onLoadDocumentWindowPage(){
  body_element = getFirstBodyElement();
  bodyHTML_classList = body_element.classList;
  loadDefaultLooks(body_element);
  body_element.classList.remove(styled_looks[1]);
  body_element.classList.remove(styled_looks[2]);
  hideJavascriptProgressiveEnhancementMessage();
}

function hideJavascriptProgressiveEnhancementMessage(){
  document.getElementById(javascript_info).classList.add('hide-content');
  document.getElementById(looksListName).classList.remove('hide-content'); 
}

function loadDefaultLooks(bodyHTML){
  bodyHTML_classList.add(styled_looks[0]);
  bodyHTML_classList.remove(styled_looks[1]);
  bodyHTML_classList.remove(styled_looks[2]);
}

function load00Looks(){
  loadDefaultLooks(body_element);
}

function load01Looks(){
  bodyHTML_classList.remove(styled_looks[0]);
  bodyHTML_classList.remove(styled_looks[2]);
  bodyHTML_classList.add(styled_looks[1]);
}

function load02Looks(){
  bodyHTML_classList.remove(styled_looks[0]);
  bodyHTML_classList.remove(styled_looks[1]);
  bodyHTML_classList.add(styled_looks[2]);
}

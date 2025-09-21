window.onload="loadDefaultLooks()";

var body_element = ' ',
    looksGreenAckClassName = 'green-black-01-look',
    looksYellowAckClassName = 'yellow-black-02-look',
    looksListName ='look-linker-list',
    javascript_info = 'off-javascript-enable-message';

function getFirstBodyElement(){
  return document.getElementsByTagName('body')[0];
} 

function onLoadDocumentWindowPage(){
  body_element = getFirstBodyElement();
  loadDefaultLooks(body_element);
  body_element.classList.remove(looksGreenAckClassName);
  body_element.classList.remove(looksYellowAckClassName);
  hideJavascriptProgressiveEnhancementMessage();
}

function hideJavascriptProgressiveEnhancementMessage(){
  document.getElementById(javascript_info).classList.add('hide-content');
  document.getElementById(looksListName).classList.remove('hide-content'); 
}

function loadDefaultLooks(bodyHTML){
  bodyHTML.classList.remove(looksGreenAckClassName);
  bodyHTML.classList.remove(looksYellowAckClassName);
}

function load00Looks(){
  loadDefaultLooks(body_element);
}

function load01Looks(){
  body_element.classList.remove(looksYellowAckClassName);
  body_element.classList.add(looksGreenAckClassName);
}

function load02Looks(){
  body_element.classList.remove(looksGreenAckClassName);
  body_element.classList.add(looksYellowAckClassName);
}


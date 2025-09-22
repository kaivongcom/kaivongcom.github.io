var body_element = ' ',
    styled_looks = ['defaults-00-look', 'green-black-01-look', 'yellow-black-02-look', 'snowy-bluep-03-look'],
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
  loadThisLooks(0);
  hideJavascriptProgressiveEnhancementMessage();
}

function hideJavascriptProgressiveEnhancementMessage(){
  document.getElementById(javascript_info).classList.add('hide-content');
  document.getElementById(looksListName).classList.remove('hide-content'); 
}

function loadThisLooks(specific_look_integer){
  for(look_integer=0; look_integer <= 3; look_integer+=1 ){
    bodyHTML_classList.remove(styled_looks[look_integer]);  
  }
  bodyHTML_classList.add(styled_looks[specific_look_integer]);
}

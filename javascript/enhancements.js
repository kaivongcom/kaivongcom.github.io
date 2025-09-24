var body_element = ' ',
    initial_look = 'defaults-02-look', looks1 = 'green-black-03-look',
    looks2 = 'yellow-black-04-look', looks6 = 'clay-07-look',
    looks5 = 'redd-06-look', looks4 = 'slime-05-look', snow_on_blprnt = 'snowy-bluep-01-look'
    styled_looks = [snow_on_blprnt, initial_look, looks1, looks2, looks4, looks5, looks6],
    looksListName ='look-linker-list',
    javascript_info = 'off-javascript-enable-message', bodyHTML_classList = '';

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
  
  
  for(look_integer=0; look_integer <= 6; look_integer+=1 ){
    bodyHTML_classList.remove(styled_looks[look_integer]);  
  }
  specific_look_integer = document.getElementById("look-linker-list").selectedIndex;
  console.log('oh..' + specific_look_integer);
  bodyHTML_classList.add(styled_looks[specific_look_integer]);
}



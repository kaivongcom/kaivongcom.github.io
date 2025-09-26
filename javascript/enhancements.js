var body_element = ' ', style_index=false, params_arr=[], url_arr=[],
    initial_look = 'defaults-02-look', looks1 = 'green-black-03-look',
    looks2 = 'yellow-black-04-look', looks6 = 'clay-07-look',
    looks5 = 'redd-06-look', looks4 = 'slime-05-look', snow_on_blprnt = 'snowy-bluep-01-look',
    styled_looks = [snow_on_blprnt, initial_look, looks1, looks2, looks4, looks5, looks6],
    looksListName ='look-linker-list',
    javascript_info = 'off-javascript-enable-message', bodyHTML_classList = '';

function getFirstBodyElement(){
  return document.getElementsByTagName('body')[0];
}

function uriStyledLooks(){
  try {
    url_arr = window.document.URL.split('?')
    params = url_arr[1]
    params_arr = params.split('=')
    if(params_arr[0] == 'loadThisLooks' ){
      style_index = params_arr[1];
      loadThisLooks(style_index);
      document.getElementById(looksListName).selectedIndex = style_index;
    }
  } catch (error) { }
}

function onLoadDocumentWindowPage(){
  body_element = getFirstBodyElement();
  bodyHTML_classList = body_element.classList;
  loadThisLooks(1);
  hideJavascriptProgressiveEnhancementMessage();
  uriStyledLooks();
}

function hideJavascriptProgressiveEnhancementMessage(){
  document.getElementById(javascript_info).classList.add('hide-content');
  document.getElementById(looksListName).classList.remove('hide-content'); 
}

function loadListLooks(){
  specific_look_integer = document.getElementById("look-linker-list").selectedIndex;
  loadThisLooks(specific_look_integer);
}

function loadThisLooks(specific_look_integer){
  console.log(specific_look_integer)
  for(look_integer=0; look_integer <= 6; look_integer+=1 ){
    bodyHTML_classList.remove(styled_looks[look_integer]);
  }
  bodyHTML_classList.add(styled_looks[specific_look_integer]);
}


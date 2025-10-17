var specific_look_integer = false,
    body_element = ' ',
    update_link = '', 
    style_index = false, 
    params_arr = [false, false], 
    url_arr = [], 
    links_counter = false,
    current_link_edit = false, 
    new_page_link = false,
    new_link = false,
    hiddenCheckboxTheme = '',
    themeButtonHTMLdisplayerID ="theme-button",
    looks01 = 'look-01',
    looks02 = 'look-02',
    looks03 = 'look-03',
    looks04 = 'look-04',
    looks05 = 'look-05',
    looks06 = 'look-06',
//    looks07 = 'look-07',
//    looks08 = 'look-08',
//    looks09 = 'look-09',
//    looks10 = 'look-10',
//    looks11 = 'look-11',
//    looks12 = 'look-12',
//    looks13 = 'look-13',
//    looks14 = 'look-14',
//    looks15 = 'look-15',
//    looks16 = 'look-16',
//    looks17 = 'look-17',
//    looks18 = 'look-18',
//    looks19 = 'look-19',
      looks07 = 'green-black-03-look',
      looks08 = 'grapevine-08-look',
      looks09 = 'leckiday-tesla-09-look',
      looks10 = 'midnight-gree7',
      looks11 = 'purpl-10-look',
      looks12 = 'redd-06-look',
      looks13 = 'red1-midnight',
      looks14 = 'slime-05-look',
      looks15 = 'snowy-bluep-01-look',
      looks16 = 'turquoise-midnight1-15-look',
      looks17 = 'turquoise-mornings1-16-look',
      looks18 = 'light-crimson',
      looks19 = 'yellow-black-04-look',
    looks_available = 19,
    styled_looks_arr = [looks01,looks02,looks03,looks04,looks05,looks06,looks07,looks08,looks09,looks10,looks11,looks12,looks13,looks14,looks15,looks16,looks17,looks18,looks19],
    looksListName ='look-linker-list', 
    javascript_info = 'off-javascript-enable-message', 
    bodyHTML_classList = '',      
    links_domain = ['news-kaivong', 'x-kaivong', 'homepage-back'],
    links_domain_count = links_domain.length,
    params_names = ['loadThisLooks'];

function kaivongcomLocalSwitcher(){
    if (localStorage['kaivongcom'] == 'theme,true') {
        document.getElementById('HTMLPageContent').classList.add('themes-display');
        document.getElementById('hidden-checkbox-theme').checked = true;
    }
}

function themeButtonHTMLdisplayer(){
    var hiddenCheckboxTheme = document.getElementById('hidden-checkbox-theme');
    if (hiddenCheckboxTheme.checked == true) {
        document.getElementById('HTMLPageContent').classList.add('themes-display');
        localStorage['kaivongcom'] = [['theme',true]];
    } else {
        document.getElementById('HTMLPageContent').classList.remove('themes-display');
        localStorage['kaivongcom'] = [['theme',false]];
    }
    return false;
}

function getFirstBodyElement(){
  return document.getElementsByTagName('body')[0];
}

function urlStyledLooks(){
    var url_arr = window.document.URL.split('?');
    return url_arr;
}

function uriStyledLooks(){
  try {
    var url_arr = urlStyledLooks();
    params = url_arr[1];
    params_arr = params.split('=');
    if(params_arr[0] == params_names[0] ){
      style_index = params_arr[1];
      loadThisLooks(style_index);
      document.getElementById(looksListName).selectedIndex = style_index;
    }
  } catch (error) {  }
  return params_arr[1];
}

function onLoadDocumentWindowPage(){
  body_element = getFirstBodyElement();
  bodyHTML_classList = body_element.classList;
  hideJavascriptProgressiveEnhancementMessage();
  uriStyledLooks();
  updateLinkColoursParams();
}

function hideJavascriptProgressiveEnhancementMessage(){
  if (document.getElementById(javascript_info)){
    document.getElementById(javascript_info).classList.add('hide-content');
    document.getElementById(looksListName).classList.remove('hide-content');
  } 
}

function loadListLooks(){
  themeButtonHTMLdisplayer();
  specific_look_integer = document.getElementById(looksListName).selectedIndex;
  loadThisLooks(specific_look_integer);
  updateLinkColoursParams(String(specific_look_integer));
  return false;
}

function loadThisLooks(specific_look_integer){
  for(look_integer=0; look_integer <= looks_available;look_integer){
    bodyHTML_classList.remove(styled_looks_arr[look_integer]);
    look_integer += 1;
  }
  bodyHTML_classList.add(styled_looks_arr[specific_look_integer]);
  return false;
}

function updateLinkColoursParams(specific_look_integer=false){
  for(links_counter=0; links_counter <= links_domain_count; links_counter){
    current_link_edit = links_domain[links_counter];
    current_link_node = document.getElementById('link-'+current_link_edit);
    if (!specific_look_integer){
      specific_look_integer = uriStyledLooks();
    }
    if(current_link_node){
        new_page_link = current_link_node.href.split('?')[0];
        update_link = '';
        if(Boolean(specific_look_integer) == false){  } else {
          update_link = ('?' + params_names[0] + '=' + specific_look_integer);
        }
        new_link = new_page_link + update_link; 
        current_link_node.href = new_link;
    }
    links_counter+=1;
  }  
}

window.addEventListener("load", (event) => {
    kaivongcomLocalSwitcher();
});

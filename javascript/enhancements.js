var body_element = ' ', style_index=false, params_arr=[], url_arr=[], links_counter=false,
    current_link_edit=false, new_page_link=false,new_link_edit=false,
    initial_look = 'defaults-02-look', looks1 = 'green-black-03-look', params_names = ['loadThisLooks'],
    looks2 = 'yellow-black-04-look', looks6 = 'clay-07-look',
    looks5 = 'redd-06-look', looks4 = 'slime-05-look', snow_on_blprnt = 'snowy-bluep-01-look',
    looks7 = 'grapevine-08-look', l_9= 'leckiday-tesla-09-look', l10 = 'purpl-10-look',
    styled_looks_arr = [snow_on_blprnt, initial_look, looks1, looks2, looks4, looks5, looks6, looks7, l_9,l10],
    looksListName ='look-linker-list', javascript_info = 'off-javascript-enable-message', bodyHTML_classList = '',      
    links_domain = ['news-kaivong', 'x-kaivong',  'twitter-kaivong', 'homepage-back'],
    links_domain_count = links_domain.length;

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
  loadThisLooks(1);
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
  specific_look_integer = document.getElementById(looksListName).selectedIndex;
  loadThisLooks(specific_look_integer);
  updateLinkColoursParams(specific_look_integer);
}

function loadThisLooks(specific_look_integer){
  for(look_integer=0; look_integer <= 10; look_integer+=1 ){
    bodyHTML_classList.remove(styled_looks_arr[look_integer]);
  }
  bodyHTML_classList.add(styled_looks_arr[specific_look_integer]);
}

function updateLinkColoursParams(specific_look_integer=false){
  for(links_counter=0; links_counter <= links_domain_count; links_counter+=1){
    current_link_edit = links_domain[links_counter];
    current_link_node = document.getElementById('link-'+current_link_edit);
    if (!specific_look_integer){
      specific_look_integer = uriStyledLooks();
    }
    if(current_link_node){
      new_page_link = current_link_node.href.split('?')[0];
      new_link_edit = new_page_link + '?' + params_names[0] + '=' + specific_look_integer;
      current_link_node.href = new_link_edit; 
    }
  }  
}

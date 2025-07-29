var socialMediaChannelsToggleLink1 = document.getElementById('select-icons-view1'),
    socialMediaChannelsToggleLink2 = document.getElementById('select-list-view2'),
    socialMediaDiv = document.getElementById('SMChannelsCompleteContent'),
    linkedContent = document.getElementById('linkedContent'),
    socialMediaChannels = { 1: 'list' , 0: 'icons'},
    huh = "<li class=\"bi horizontal-placeholder\"><em>❓</em></li>",
    kaivong_com_objs = { socialMediaDiv: { views: ['view-icons','view-list'] }  },
    select_list_icons_view = '';
    select_list_icons_view += '<option value="select-icons-view">';
    select_list_icons_view += '<a href="#digitalIdentityContent" id="select-icons-view1" data-name="view-icons">icons</a>';
    select_list_icons_view += '</option>';
    select_list_icons_view += '<option value="select-list-view">';
    select_list_icons_view += '<a href="#digitalIdentityContent" id="select-list-view2" data-name="view-list">list</a>';
    select_list_icons_view += '</option>';

HTMLPageContentNode = document.getElementById('HTMLPageContent');
previous_page_class_attrs = HTMLPageContentNode.getAttribute('class')
page_is_html1999 = (previous_page_class_attrs != null)

if (page_is_html1999){
  previous_page_class_attrs += ' has-javascript html2025';
} else {
  previous_page_class_attrs = 'has-javascript html2025'
  document.getElementById('select-list-icons-view').innerHTML = select_list_icons_view;
  if(localStorage.key('kaivong_com_socialmedia_view')){
      viewName = localStorage['kaivong_com_socialmedia_view'],
      viewIndex = kaivong_com_objs['socialMediaDiv']['views'].indexOf(viewName);
      document.getElementById('select-list-icons-view').selectedIndex = viewIndex;
      toggle_views();
  }
  document.getElementById('select-list-icons-view').onchange = toggle_views;
  document.getElementById('select-icons-view').onclick =  toggle_views;
  document.getElementById('select-list-view').onclick = toggle_views;
}
HTMLPageContentNode.setAttribute('class', previous_page_class_attrs);

linkedContent.innerHTML = linkedContent.innerHTML;

function toggle_views(){
    if(this.nodeName == undefined || this.nodeName == 'SELECT' ){
        index_for_view = document.getElementById('select-list-icons-view').selectedIndex,
        new_view = kaivong_com_objs['socialMediaDiv']['views'][index_for_view];    
    }
    if(this.nodeName == 'A'){
        $button = this.nodeName;
        index_for_view = this.attributes['data-social-media-channel-num'].value,
        new_view = kaivong_com_objs['socialMediaDiv']['views'][index_for_view];    
    }
    socialMediaDiv.setAttribute('class', new_view);
    socialMediaDiv.setAttribute('data-view', new_view);
    localStorage.setItem('kaivong_com_socialmedia_view', new_view);
};

javascript_enabled_message = document.getElementById('off-page-markedup-lols2');
javascript_enabled_message.setAttribute('class', 'off-page--HTML-only');

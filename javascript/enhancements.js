var socialMediaChannelsToggleLink1 = document.getElementById('select-icons-view1'),
    socialMediaChannelsToggleLink2 = document.getElementById('select-list-view2'),
    socialMediaDiv = document.getElementById('SMChannelsCompleteContent'),
    linkedContent = document.getElementById('linkedContent'),
    socialMediaChannels = { 1: 'list' , 0: 'icons'},
    huh = "<li class=\"bi horizontal-placeholder\"><em>❓</em></li>",
    instagram_huh = "<li class=\"list-item sm-slot bi bi-instagram\"><a href=\"http://kaivong.com/4ABV\" id=\"instagramLinkContent\" title=\"instagram of kai\" rel=\"me\"><span class=\"icon\"><strong class=\"h-text\">instagram</strong></span></a></li>",
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

linkedContent.innerHTML = linkedContent.innerHTML + instagram_huh ;

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

var add = function(a,b){
    return a + b;
},

quick_discovery = function(){
    DISCOVERY = 'testing',
    fun_with_wordsa_obj = {
        "s": 'Potentially ',
        "r_OR_p": "#{DISCOVERY}",
        "j1": ' Jacques ',
        "j2": ' Jill ',
        "n": NaN,
        "n_eq": 'Not-a-Number',
        "p": '…',
        "c": ',',
        "o": 'OK'
    },
    fww = fun_with_wordsa_obj,
    fww_j1 = fww['j1'],
    fww_j2 = fww['j2'],
    message_l0a = fww['s'],
    message_l0d = fww['r_OR_p'],
    message_l1 = add.apply(null,[fww_j1,fww_j2]),
    message_l2 = fww['p'],
    oh = message_l0a.concat(message_l0d).concat(message_l1).concat(message_l2);
    //    console.log(oh);
}

//quick_discovery();


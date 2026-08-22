//var idk_wtf_this_is = undefined;
var idk_wtf_this_is = -1,
    emoji_ascii_arr = emoji_ascii_arr_d(),
    emoji_ascii_all = emoji_ascii_all_d();

function emojiKaivongdevChange(){
  length_text = textEditable.value.length; 
    if (emoji_ascii_arr.indexOf(textEditable.value) != idk_wtf_this_is ){
        index_for_change = emoji_ascii_arr.indexOf(textEditable.value);
        insert_into_html = emoji_ascii_all[index_for_change]['alternative_rendered']
    from_html_info = emoji_ascii_all[index_for_change]['further_information']
    if (insert_into_html == idk_wtf_this_is){
      window.document.getElementById('emojiTransformedInto').textContent = '';
      window.document.getElementById('emojiTransformedInto').innerHTML = '';
    }else{
      if (length_text > 1 && length_text < 5 || insert_into_html.slice(0,3) == 'IMG') { 
        window.document.getElementsByTagName('body')[0].classList.remove('image-preview');
        if (insert_into_html.slice(0,3) == 'IMG'){
          insert_into_html = '<img src="/images/pictures/screens/' +  insert_into_html + '" alt="" width=227 height=154> <span class="small-txt">picture of ' + from_html_info + '</span>';
          window.document.getElementsByTagName('body')[0].className += ' image-preview'
        }
        window.document.getElementById('emojiTransformedInto').innerHTML = insert_into_html;
      } else {
        window.document.getElementsByTagName('body')[0].classList.remove('image-preview');
      }
    }
  } else {
    window.document.getElementsByTagName('body')[0].classList.remove('image-preview');
    window.document.getElementById('emojiTransformedInto').textContent = '';
    window.document.getElementById('emojiTransformedInto').innerHTML = '';
  }
}

if (typeof(emoji_ascii_all) == 'undefined'){
  window.document.getElementById('noJS').textContent = 'missing JSON for auto-complete'
} else if (typeof(emoji_ascii_all) == 'object'){
  var textEditable = window.document.getElementById('selectBox'),
      length_text = 0;
      textEditable.onkeyup = emojiKaivongdevChange;
      emojiKaivongdevChange();
      window.document.getElementsByTagName('body')[0].classList.remove('no-javascript');
} 

var idk_wtf_this_is = undefined;
function emojiKaivongdevChange(){
  length_text = textEditable.value.length; 
//  console.log(textEditable.value)
  if (emoji_ascii[textEditable.value] != idk_wtf_this_is ){
    insert_into_html = emoji_ascii[textEditable.value]['emote']
    from_html_info = emoji_ascii[textEditable.value]['info']
    if (insert_into_html == idk_wtf_this_is){
      window.document.getElementById('emojiTransformedInto').textContent = '';
      window.document.getElementById('emojiTransformedInto').innerHTML = '';
    }else{
      if (length_text > 1 && length_text < 3 || insert_into_html.slice(0,3) == 'IMG') { 
        window.document.getElementsByTagName('body')[0].classList.remove('image-preview');
        if (insert_into_html.slice(0,3) == 'IMG'){
          insert_into_html = '<img src="images//pictures/screens/' +  insert_into_html + '" alt="" width=227 height=154> <span class="small-txt">picture of ' + from_html_info + '</span>';
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
var textEditable = window.document.getElementById('selectBox'),
emoji_ascii = { ':D': {'emote': '😀'}, '=D': {'emote': '😃'}, '^D': {'emote': '😄'}, '^#': {'emote': '😁'},
  'ii': {'emote': '🥢🥡'},
  'kekeke': {'emote': 'IMG_KEEE.png', 'info':'from video-game nintendo, Game Freak, published by The Pokémon Company, Pokémon LeafGreen: Channeler trainers'}},
    length_text = 0;
textEditable.onkeyup = emojiKaivongdevChange;
emojiKaivongdevChange();
window.document.getElementsByTagName('body')[0].classList.remove('no-javascript');

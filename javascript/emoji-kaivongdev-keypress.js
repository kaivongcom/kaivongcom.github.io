function emojiKaivongdevChange(){
  length_text = textEditable.value.length 
  if (length_text > 1 && length_text < 3) { 
    window.document.getElementById('emojiTransformedInto').textContent = emoji_ascii[textEditable.value]; 
  }
}
var textEditable = window.document.getElementById('selectBox'),
    emoji_ascii = { ':D': '😀', '=D': '😃', '^D': '😄'},
    length_text = 0;
textEditable.onkeyup = emojiKaivongdevChange;
emojiKaivongdevChange();
window.document.getElementsByTagName('body')[0].classList.remove('no-javascript') 

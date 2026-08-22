function emoji_ascii_keys(){
  return emoji_ascii_keys_found;
}
function emoji_ascii_values(){
  return emoji_ascii_values_found;
}

emoji_ascii_keys_found = [':D', '=D', '^D', '^#', 'ii', 'lēk', '🍪', '--叻', 'kekeke'];
emoji_ascii_values_found = [{'emote': '😀'}, {'emote': '😃'}, {'emote': '😄'}, {'emote': '😁'}, 
{'emote': '🥢🥡'}, {'emote': '😇📚'}, {'emote': '🍪'}, {'emote': '😇📚'}, 
{'emote': 'IMG_KEEE.png', 'info': 'from video-game nintendo, Game Freak, published by The Pokémon Company, Pokémon LeafGreen: Channeler trainers'}];

emoji_ascii = { 
//  ':t': { 'emote': '🐌', 'info': 'film' }, 
  ':D': {'alternative_rendered': '😀'}, 
  '=D': {'alternative_rendered': '😃'}, 
  '^D': {'alternative_rendered': '😄'}, 
  '^#': {'alternative_rendered': '😁'}, 
  'ii': { 'alternative_rendered': '🥢🥡'}, 
  'lēk': { 'alternative_rendered': '😇📚' }, 
  '🍪': { 'alternative_rendered': '🍦<span class=cookies><span>🍪🍪🍪🍪🍪<span></br><span>🍪🍪🍪🍪🍪<span></br><span>🍪🍪🍪🍪🍪<span></br><span>🍪🍪🍪🍪🍪<span></br><span>🍪🍪🍪🍪🍪<span></span>' }, 
  '--叻': { 'alternative_rendered': '😇📚' }, 
  'kekeke': {'alternative_rendered': 'IMG_KEEE.png', 
             'info':'from video-game nintendo, Game Freak, published by The Pokémon Company, Pokémon LeafGreen: Channeler trainers'},
  'DIY':  {'alternative_rendered': 'Do It Yourself'}, 
  'VS':  {'alternative_rendered': 'Versus (against.)'}, 
  '...':  {'alternative_rendered': '…(-/+)'}, 
  '--':  {'alternative_rendered': '–(emdash)'}, 
  'ˆ--':  {'alternative_rendered': '--(double endash)'}, 
  'WTF':  {'alternative_rendered': 'Wut teh Fudge'}, 
  'OMG':  {'alternative_rendered': 'O-M-GEE'}, 
  'ASAP':  {'alternative_rendered': 'As Soon As Possible'}, 
  'jg':  {'alternative_rendered': 'justgiving.com'}, 
  'af':  {'alternative_rendered': 'artfinder.com'}, 
  'd++':  {'alternative_rendered': 'dressipi.com'},
  'kvˆ':  {'alternative_rendered': 'kaivong.com'}
}

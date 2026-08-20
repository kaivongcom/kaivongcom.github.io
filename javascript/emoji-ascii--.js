function emoji_ascii_00(){
  return emoji_ascii_00_found;
}
function emoji_ascii_01(){
  return emoji_ascii_01_found;
}

emoji_ascii_00_found = [':D', '=D', '^D', '^#', 'ii', 'lēk', '🍪', '--叻', 'kekeke'];
emoji_ascii_01_found = [{'emote': '😀'}, {'emote': '😃'}, {'emote': '😄'}, {'emote': '😁'}, 
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
  'ASAP':  {'alternative_rendered': 'SOON AS POSS.'},  
  'jg':  {'alternative_rendered': 'justgiving.com'}, 
  'af':  {'alternative_rendered': 'artfinder.com'}, 
  'd++':  {'alternative_rendered': 'dressipi.com'},
  'kv^':  {'alternative_rendered': 'kaivong.com'}
}

// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; musicians.length > 0; i++) {
    beatles.push(musicians[i] + "plays" + instruments[i])
  return beatles
  }
}

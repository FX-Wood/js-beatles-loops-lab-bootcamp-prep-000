// add solution here
var beatles = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < 4 ; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

var johnLennonExclamations = [];

function johnLennonFacts(facts) {
  while (facts.length > 0) {
    johnLennonExclamations.push(facts.shift() + "   !!!");
  }
  return johnLennonExclamations;
}

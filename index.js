// add solution here
var beatles = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < 4 ; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

;

function johnLennonFacts(facts) {
  var johnLennonExclamations = []
  while (facts.length > 0) {
    johnLennonExclamations.push(facts.shift() + "!!!");
  }
  return johnLennonExclamations;
}

function iLoveTheBeatles(num) {
  let arrayOfLove = [];
  while (num >0) {
    arrayOfLove.unshift("I love the beatles");
    num--
  }
}

/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {
  if (cardName === 'jack' || cardName === 'queen' || cardName === 'king') {
    return 10;
  } else if (cardName === 'ace') {
    return 11;
  } else if (cardName == '5') {
    return 5;
  } else if (cardName == '9') {
    return 9;
  } else if (cardName == '10') {
    return 10;
  }
}


/**
 * Returns the numeric sum of two numbers
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
function sum(a, b) {
  return (a + b);
}

/**
 * Returns if a dealer should split doubles
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldSplit(cardOne, cardTwo) {
  if (cardValue(cardOne) == cardValue(cardTwo)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {
  if (sum(cardValue(cardOne), cardValue(cardTwo)) > 17) {
    return false;
  }
  else if (sum(cardValue(cardOne), cardValue(cardTwo)) < 17) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {
  if (sum(cardValue(cardOne), cardValue(cardTwo)) < 17) {
    return 'hit';
  } else if (cardValue(cardOne) === cardValue(cardTwo)) {
    return 'split';
  } else {
    return 'stay';
  }

}

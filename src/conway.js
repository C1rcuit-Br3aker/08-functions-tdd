'use strict';

/**
 * Returns number of items in neighbors that are true
 * @param  {Array} neighbors
 * @return {Number}
 */
function aliveNeighbors(neighbors) {
  var sum = 0;

  for (var i = 0; i < neighbors.length; i++) {
    if (neighbors[i] == true) {
  sum++;
  }
}
return sum;
}

/**
 * Canadian check if a cell should remain alive
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function aliveEh(neighbors) {

   if (aliveNeighbors(neighbors) == 2 || aliveNeighbors(neighbors) == 3) {
    return true;
  }  else {
    return false;
  }


}

/**
 * Canadian check if a cell should be revived
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function reviveEh(neighbors) {
  if (aliveNeighbors(neighbors) == 3) {
    return true;
  } else {
    return false;
  }

}

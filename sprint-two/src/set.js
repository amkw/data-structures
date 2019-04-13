var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = null;
};

setPrototype.contains = function(item) {
  if(this.storage.hasOwnProperty(item)){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete(this.storage[item]);
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add() = O(1);
 * contains() = O(1);
 * remove = O(1);
 */



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var makeTuple = function(key, index, collection){
    if(collection[index])
  }

  if(this._storage.get(index) === undefined){
    this._storage.set(index, v);
  } else {

  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var deleteKey = function(key, index, collection){
    if(collection[index] = key){
      collection.splice(index, 1);
    }
  }

  this._storage.each(deleteKey);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



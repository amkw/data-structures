

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valAtIndex = this._storage.get(index);
  if (Array.isArray(valAtIndex)) {
    for (var i = 0; i < valAtIndex.length; i++) {
      if (valAtIndex[i].includes(k)) {
        valAtIndex[i][1] = v; // overwrite value if key exists
      } else {
        valAtIndex.push([k, v]);
        this._storage.set(index, valAtIndex);
      }
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var valAtIndex = this._storage.get(index);
  if (valAtIndex !== undefined) {
    for (var i = 0; i < valAtIndex.length; i++) {
      if (valAtIndex[i].includes(k)) {
        return valAtIndex[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var deleteKey = function (key, index, collection) {
    if (collection[index] = key) {
      collection.splice(index, 1);
    }
  }
  this._storage.each(deleteKey);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert() = O(1) / O(n)
 * retrieve() = O(1) / O(n)
 * remove() = O(1) / O(n)
 *
 * constant time complexity based on tuple to limitedArray length ratio, can become O(n) if hash table is too large or all values are being hashed to the same index
 */



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};
queueMethods.dequeue = function(){
  // remove first item (at key = 0)
  var removedValue = this.storage['0'];
  delete(this.storage['0']);
  // decrement counter
  this.counter--;
  // shift values up
  var tempStorage = Object.values(this.storage);
  for (var i = 0; i < tempStorage.length; i++) {
    this.storage[i] = tempStorage[i];
  }
  // delete last key/value pair
  delete(this.storage[tempStorage.length]);

  return removedValue;
};
queueMethods.size = function(){
  return Object.keys(this.storage).length;
};
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};
Queue.prototype.dequeue = function(){
  var removedValue = this.storage['0'];
  delete (this.storage['0']);
  this.counter--;

  var tempStorage = Object.values(this.storage);
  for (var i = 0; i < tempStorage.length; i++) {
    this.storage[i] = tempStorage[i];
  }
  delete (this.storage[tempStorage.length]);
  return removedValue;
};
Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);

  obj.storage = {};
  obj.counter = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function(){
    var removedValue = this.storage['0'];
    delete(this.storage['0']);
    this.counter--;
    // shift values up
    var tempStorage = Object.values(this.storage);
    for (var i = 0; i < tempStorage.length; i++) {
      this.storage[i] = tempStorage[i];
    }
    delete(this.storage[tempStorage.length]);

    return removedValue;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }
};



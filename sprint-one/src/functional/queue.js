var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keyNum = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keyNum] = value;
    keyNum++;
  };

  someInstance.dequeue = function() {
    var removedValue = storage[0];
    var tempStorage = [];
    delete(storage[0]);
    keyNum--;
    tempStorage = Object.values(storage);

    // shift all values up one numeric key
    for (var i = 0; i < tempStorage.length; i++) {
      storage[i] = tempStorage[i];
    }
    delete(storage[tempStorage.length]);

    return removedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
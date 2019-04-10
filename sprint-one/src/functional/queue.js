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
    // remove storage[0]
    // decrement keyNum
    // shift all values up one numeric key
    // return removed value
    console.log(storage);
    var removedValue = storage[0];
    var tempStorage = [];
    delete(storage[0]);
    keyNum--;
    tempStorage = Object.values(storage);
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
//  [value]
//{
//  0: value
//  1: value
//}
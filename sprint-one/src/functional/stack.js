var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    // decrement counter
    counter--;

    // remove last thing, save in variable
    var removedValue = storage[counter];
    // delete last thing
    delete(storage[counter]);
    if(counter < 0){
      counter = 0;
    }
    // return removed

    return removedValue;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

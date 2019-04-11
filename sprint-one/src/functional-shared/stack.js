var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.storage = {};
  obj.counter = 0;

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  this.counter--;
  var removedValue = this.storage[this.counter];
  delete(this.storage[this.counter]);
  if (this.counter < 0) {
    this.counter = 0;
  }

  return removedValue;
}

stackMethods.size = function() {
  return this.counter;
}
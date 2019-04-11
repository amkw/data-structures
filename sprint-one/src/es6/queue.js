class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  };
  enqueue(value){
    this.storage[this.counter] = value;
    this.counter++;
  };
  dequeue(){
    var removedValue = this.storage['0'];
    delete(this.storage['0']);
    this.counter--;
    var tempStorage = Object.values(this.storage);
    for(var i = 0; i < this.counter; i++){
      this.storage[i] = tempStorage[i];
    }
    delete(this.storage[this.counter]);
    return removedValue;
  };
  size(){
    return Object.keys(this.storage).length;
  }

}

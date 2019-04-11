class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value){
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop(){
    this.counter--;
    var removedValue = this.storage[this.counter];
    delete(this.storage[this.counter]);
    if(this.counter < 0){
      this.counter = 0;
    }
    return removedValue;
  }

  size(){
    return this.counter;
  }
}
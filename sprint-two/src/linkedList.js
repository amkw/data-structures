var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node with value of passed in value

    var newNode = Node(value);
    if(list.tail !== null){
      var oldNode = list.tail;
      oldNode.next = newNode;
    } else {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {
    var removedVal = list.head.value;
    list.head = list.head.next;
    return removedVal;
  };

  list.contains = function(target) {

    var searchNext = function(target, node){
      var isFound = false;
      if(node === null){
        return false;
      }
      if(node.value === target){
        isFound = true;
      } else {
        isFound = searchNext(target, node.next);
      }
      return isFound;
    }

    if(list.head === null){
      return false;
    } else if (list.head.value === target){
      return true;
    } else {
      return searchNext(target, list.head.next);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  addToTail = O(1)
 *  removeHead = O(1)
 *  contains = O(n)
 *
 */

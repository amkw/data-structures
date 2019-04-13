var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;  // lower number
  newTree.right = null; // higher number

  return newTree;
};

BinarySearchTree.prototype.insert = function(val) {
  // Recursively find where to insert tree
  var addTree = function (tree, val) {
  if (!tree.contains(val)) {
      // make new tree in .left or .right
      if (val > tree.value && tree.right === null) {
        tree.right = BinarySearchTree(val);
      } else if (val < tree.value && tree.left === null) {
        tree.left = BinarySearchTree(val);
      } else if (val > tree.value) {
        addTree(tree.right, val);
      } else if (val < tree.value) {
        addTree(tree.left, val);
      }
    }
  };

  addTree(this, val);

};

BinarySearchTree.prototype.contains = function(val) {
  var wasFound = false;

  // Recursively search .left and .right for val
  var searchTree = function (tree, val) {

    if (tree !== null && tree.value !== val) {
      if (val > tree.value) { //going right
        if (searchTree(tree.right, val)) {
          wasFound = true;
        }
      } else if (val < tree.value) { //going left
        if (searchTree(tree.left, val)) {
          wasFound = true;
        }
      }
    } else if (tree === null) {
      wasFound = false;
    } else {
      wasFound = true;
    }
  }
  searchTree(this, val);

  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  // Recursively move to each tree depth first
  var eachTree = function(tree, cb) {
    if (tree !== null) {
      cb(tree.value);
      if (tree.left !== null) {
        eachTree(tree.left, cb);
      }
      if (tree.right !== null) {
        eachTree(tree.right, cb);
      }
    }
  }
  eachTree(this, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert() = O(log n)
 * contains() = O(log n)
 * eachTree() = O(n)
 */

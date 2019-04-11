var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var searchChild = function(target, child){
    console.log(child);
    var isFound = false;
    if(child.value === target){
      return true;
    } else if(child.children.length === 0){
      return false;
    } else{
      for(var i = 0; i < child.children.length; i++){
        if (searchChild(target, child.children[i])){
          isFound = true;
        }
      }
    }
    return isFound;
  }

  return searchChild(target, this);

};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild = O(1)
 * contains = O(n)
 */

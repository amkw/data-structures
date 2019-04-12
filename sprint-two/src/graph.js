

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);

  graph.storage = {};

  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  this.storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.hasOwnProperty(JSON.stringify(node))) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete(this.storage[node]);
  for (var key in this.storage) {
    if (this.storage[key].hasOwnProperty(node)) {
      delete(this.storage[key][node]);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode][toNode] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = this.storage[toNode];
  this.storage[toNode][fromNode] = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete(this.storage[fromNode][toNode]);
  delete(this.storage[toNode][fromNode]);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(JSON.parse(key));
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode() O(1)
 * contains() O(1)
 * removeNode()
 *  removing the given node O(1)
 *  removing edges connected to removed node O(n)
 * hasEdge() O(1)
 * addEdge() O(1)
 * removeEdge() O(1)
 * forEachNode() O(n)
 */



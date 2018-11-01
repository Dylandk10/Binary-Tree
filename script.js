//javascipt file for the binary tree

//value is the key it searches for
var Node = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var BinaryTreeSearch = function() {
  this.root = null;
};
//main method for adding nodes cannot take naegative numbers
//@param {integer} value
BinaryTreeSearch.prototype.addNode = function(value) {
  var running = true;
  var root = this.root;
  //if root == null add a root
  if (this.root == null) {
    this.root = new Node(value);
    console.log("Head node: " + this.root + " Value: " + value);
    return;
  }

  var currentRoot = root;
  while (running) {
    //place left
    if (value < currentRoot.value) {
      if (currentRoot.left == null) {
        currentRoot.left = new Node(value);
        //make parent node
        currentRoot.left.parent = currentRoot;
        console.log("Next left " + value + " Behind " + currentRoot.value);
        break;
      } else {
        currentRoot = currentRoot.left;
      }
      //place right
    } else if(value > currentRoot.value) {
        if (currentRoot.right == null) {
          currentRoot.right = new Node(value);
          //make parent node
          currentRoot.right.parent = currentRoot;
          console.log("Next right: " + value + " Behind: " + currentRoot.value);
          break;
      } else {
        currentRoot = currentRoot.right;
      }
      //the value is equal and cannot be placed
    } else {
	console.log("Input value is equal to node and cannot be placed");
      break;
    }
  }
};

BinaryTreeSearch.prototype.getRootNode = function() {
  return this.root;
}
//search the tree for a number and console.log the value;
//@param {Integer} value
BinaryTreeSearch.prototype.searchTheTree = function(value) {
  var nodeFromTree = this.getValue(value);
  if(nodeFromTree == null) {
    console.log("Number not in tree");
  } else {
    console.log("Number found: " + nodeFromTree.value);
  }
};

//search the tree for a number and returns the  node
//@param {Integer} value
BinaryTreeSearch.prototype.getValue = function(value) {
  var compareValue = this.root;
  while(true) {
    //returns -1 if not in tree
    if(!compareValue) {
      return null;
    } else if(value == compareValue.value) {
      return compareValue;
    } else {
      if(value < compareValue.value) {
        compareValue = compareValue.left;
      } else if(value > compareValue.value) {
        compareValue = compareValue.right;
      }
    }
  }
};

//prints whole tree or if nextNode is not null print the values
//in order below the entered node
//@param {Object} nextNode -> can be null
BinaryTreeSearch.prototype.printInOrder = function(nextNode) {
  if(!nextNode) {
    nextNode = this.root;
  }

  if(nextNode.left != null) {
    this.printInOrder(nextNode.left);
  }
  //at this console call a function or use it to push value into an array
  console.log("next node: " + nextNode.value);
  if(nextNode.right != null) {
    this.printInOrder(nextNode.right);
  }
}
// prints whole tree or if nextNode is not null print the values
//in order below the entered node
//@param {Object} nextNode -> can be null
BinaryTreeSearch.prototype.printReverseOrder = function(nextNode) {
  if(!nextNode) {
    nextNode = this.root;
  }
  if(nextNode.right != null) {
    this.printReverseOrder(nextNode.right);
  }
  //at this console call a function or use it to push value into an array
  console.log("Next Node: " + nextNode.value);
  if(nextNode.left != null ) {
    this.printReverseOrder(nextNode.left);
  }
}
//remove node needs work will
BinaryTreeSearch.prototype.removeNode = function(value) {
    var nodeFromTree = this.getValue(value);
    var check1 = true, check2 = true;
  this.rebuild(nodeFromTree);
    while(check1 || check2) {
	console.log("Running");
	if(nodeFromTree.left != null || nodeFromTree.right != null) {
	      if(nodeFromTree.left != null) {
		  this.rebuild(nodeFromTree.left);
		  nodeFromTree.left = nodeFromTree.left.left;
	      } else {
		  check1 = false;
	      }
	    if(nodeFromTree.right != null) {
		this.rebuild(nodeFromTree.right);
		nodeFromTree.right = nodeFromTree.right.right;
	    } else {
		check2 = false;
	    }
	} else {
	    console.log("Tree rebuilt");
	    break;
	}
    }
    console.log("done");

}
//connected to removeNode method above^^
//not ready still in work
BinaryTreeSearch.prototype.rebuild = function(nodeValue) {
    var parentNode = nodeValue.parent;
    var compareNode = nodeValue;
    console.log("parent node " + parentNode);
    console.log("parent node right " + parentNode.right);
    console.log("parent node left " + parentNode.left);
    if(parentNode.right != null && parentNode.right.value < nodeValue.value) {
	compareNode = compareNode.right;
    }


}
//for testing nothing special about the lines belowthis not related to tree or methods;
var tree = new BinaryTreeSearch();
//prints range of numbers for testing
for(var i = 0; i < 21; i++) {
  tree.addNode(Math.floor(Math.random() * 71));
}

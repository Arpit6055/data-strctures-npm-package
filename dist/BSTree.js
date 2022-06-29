"use strict";
exports.__esModule = true;
exports.BinarySearchTree = void 0;
var BinarySearchTreeNode = (function () {
    function BinarySearchTreeNode(data) {
        this.data = data;
    }
    return BinarySearchTreeNode;
}());
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.comparator = function (a, b) {
            if (a < b)
                return -1;
            if (a > b)
                return 1;
            return 0;
        };
    }
    BinarySearchTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }
        var current = this.root;
        while (true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode;
                }
                else {
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            }
            else {
                if (current.leftNode) {
                    current = current.leftNode;
                }
                else {
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    };
    BinarySearchTree.prototype.search = function (data) {
        if (!this.root)
            return undefined;
        var current = this.root;
        while (this.comparator(data, current.data) !== 0) {
            if (this.comparator(data, current.data) === 1) {
                if (!current.rightNode)
                    return;
                current = current.rightNode;
            }
            else {
                if (!current.leftNode)
                    return;
                current = current.leftNode;
            }
        }
        return current;
    };
    BinarySearchTree.prototype.inOrderTraversal = function () {
        var visited = new Array();
        var current = this.root;
        if (!current)
            return visited;
        var traverse = function (node) {
            if (node.leftNode)
                traverse(node.leftNode);
            visited.push(node.data);
            if (node.rightNode)
                traverse(node.rightNode);
        };
        traverse(current);
        return visited;
    };
    BinarySearchTree.prototype.preOrderTraversal = function () {
        var visited = new Array();
        var current = this.root;
        if (!current)
            return visited;
        var traverse = function (node) {
            visited.push(node.data);
            if (node.leftNode)
                traverse(node.leftNode);
            if (node.rightNode)
                traverse(node.rightNode);
        };
        traverse(current);
        return visited;
    };
    BinarySearchTree.prototype.postOrderTraversal = function () {
        var visited = new Array();
        var current = this.root;
        if (!current)
            return visited;
        var traverse = function (node) {
            if (node.leftNode)
                traverse(node.leftNode);
            if (node.rightNode)
                traverse(node.rightNode);
            visited.push(node.data);
        };
        traverse(current);
        return visited;
    };
    BinarySearchTree.prototype.BFS = function () {
        var queue = new Array();
        var visited = new Array();
        queue.push(this.root);
        while (1) {
            var current = queue.shift();
            if (!current)
                return visited;
            visited.push(current.data);
            if (current.leftNode !== null)
                queue.push(current.leftNode);
            if (current.rightNode !== null)
                queue.push(current.rightNode);
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
var bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);
var arr = bst.postOrderTraversal();
console.log(arr);
//# sourceMappingURL=BSTree.js.map
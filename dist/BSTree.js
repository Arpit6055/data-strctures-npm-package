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
    BinarySearchTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    };
    BinarySearchTree.prototype.preOrderTraversal = function (node) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    };
    BinarySearchTree.prototype.postOrderTraversal = function (node) {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=BSTree.js.map
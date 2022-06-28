"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var treeNode = (function () {
    function treeNode(data) {
        this.next = null;
        this.prev = null;
        this.data = null;
        this.data = data;
    }
    return treeNode;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insertAtEnd = function (data) {
        var node = new treeNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var getLast_1 = function (node) {
                return node.next ? getLast_1(node.next) : node;
            };
            var lastNode = getLast_1(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    };
    LinkedList.prototype.insertInBegin = function (data) {
        var node = new treeNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };
    LinkedList.prototype.deleteOneNode = function (data) {
        var temp = this.head;
        while (temp != null) {
            if (temp.data == data) {
                if (temp.prev == null)
                    this.head = temp.next;
                else
                    temp.prev.next = temp.next;
                return;
            }
            temp = temp.next;
        }
        return;
    };
    LinkedList.prototype.search = function (comparator) {
        var checkNext = function (node) {
            if (node.data && comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    };
    LinkedList.prototype.traverse = function () {
        var array = [];
        if (!this.head) {
            return array;
        }
        var addToArray = function (node) {
            if (node.data)
                array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    };
    LinkedList.prototype.size = function () {
        return this.traverse().length;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=linkList.js.map
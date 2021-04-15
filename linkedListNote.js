// 单向链表:线性的数据结构

// 双向链表:

// 单向循环链表

// 双向循环链表

// 环形链表

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class linKedList {
    constructor() {
        this.size = 0;
        this.header = null;

    }
    // 增加链表
    append(element) {
        let node = new Node(element);
        // 链表为空的情况
        if (this.header === null) {
            this.header = node
        } else {
            let current = this.getNode(this.size - 1);
            current.next = node;
        };
        this.size++;
    }
    // 增加指定位置
    appendAt(postion, element) {

    }
    // 删除指定向
    remove(postion) {

    }
    // 根据当前的索引查找制定的元素
    indexOf(element) {

    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('out range')
        }
        let current = this.header;
        for (let i = 0; i < index; i++) {
            current = current.next;
        };
        return current;
    }
}

let ll = new linKedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
console.dir(ll,{depth:100});
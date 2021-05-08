# 优先队列
[[toc]]

## 定义
::: tip 优先级队列
不同于先进先出队列的另一种队列。每次从队列中取出的是具有最高优先权的元素。
:::
* 优先级队列（priority queue） 是0个或多个元素的集合，每个元素都有一个优先权
* 对优先级队列执行的操作有（1）查找（2）插入一个新元素 （3）删除 一般情况下，查找操作用来搜索优先权最大的元素，删除操作用来删除该元素 。
* 对于优先权相同的元素，可按先进先出次序处理或按任意优先权进行。
## 代码实现
```js
function PriorityQueue() {
  
  this.items = []
  // 内部类 主要用于初始化新添加的元素
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  /*
  内部类 也可以写一个方法，就是一个闭包函数
  function _insertObj(element, priority) {
    return { element, priority }
  }
  */
  // 优先队列 入队的方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    var queuqElement = new QueueElement(element, priority)
    // var queuqElement = _insertObj(element,priority)
    if (this.items.length === 0) {
      this.items.push(queuqElement)
    } else {
      var isAdd = false
      // isAdd 主要用于数值最大时没有插入到数组内，将其添加到末尾
      for (var i=0;i<this.items.length;i++) {
        if (queuqElement.priority < this.items[i].priority) {
          this.items.splice(1,0, queuqElement)
          isAdd = true
          break;
        }
      }
      !isAdd && this.items.push(queuqElement)
    }
  }
}
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('a', 1)
priorityQueue.enqueue('v', 3)
priorityQueue.enqueue('c', 10)
priorityQueue.enqueue('t', 2)
priorityQueue.enqueue('d', 40)
priorityQueue.items
/*
Array(5) [ {…}, {…}, {…}, {…}, {…} ]
0: Object { element: "a", priority: 1 }
1: Object { element: "t", priority: 2 }
2: Object { element: "v", priority: 3 }
3: Object { element: "c", priority: 10 }
4: Object { element: "d", priority: 40 }
​
length: 5
*/
```
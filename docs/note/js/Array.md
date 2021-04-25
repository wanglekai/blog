# Array 对象
[[toc]]
## 判断一个变量是否为数组
* Array.isArray(variable)
* Object.prototype.toString.call(variable)
* variable.constructor.name
* variable instanceof Array
```js
var arr = [1, 2, 3];
typeof arr // => "object"

Array.isArray(arr) // => true
Object.prototype.toString.call(arr) // => "[object Array]"
arr.constructor.name // => "Array"
arr instanceof Array // => true
arr instanceof Object // => true
```
## 可改变原数组的方法
::: warning 提示
使用 push, pop, shift , unshift, splice, reverse, sort 方法将改变原数组
:::
### push(), pop()
* push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度
* pop方法用于删除数组的最后一个元素，并返回该元素。
* 对空数组使用pop方法，不会报错，而是返回undefined
* push和pop结合使用，就构成了“后进先出”的栈结构（stack）。
```js
var arr = [1,2,3];
arr.push(4) // => 1
arr // => [1,2,3,4]

arr.pop()  // => 4
arr // => [1,2,3]
```
### shift()，unshift()
* shift()方法用于删除数组的第一个元素，并返回该元素。
* unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度
* push()和shift()结合使用，就构成了“先进先出”的队列结构（queue）
```js
var a = ['a', 'b', 'c'];

a.shift() // => 'a'
a // => ['b', 'c']
a.unshift('x'); // => 4
a // => ['x', 'a', 'b', 'c']
```
### splice()
* arr.splice(start, count, addElement1, addElement2, ...);
* splice()方法用于删除原数组的一部分成员
* 并可以在删除的位置添加新的数组成员，返回值是被删除的元素
* splice的第一个参数是删除的起始位置（从0开始）
* 第二个参数是被删除的元素个数
* 如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
a.splice(0,1,'z') // ["a"]
a // => ["z", "b", "c", "d"]
a.splice(-1)  //  => ["d"]  等同于 a.pop()
a // => ["z", "b", "c"]
```
### sort()
* sort方法对数组成员进行排序，默认是按照字典顺序排序
* 想让sort方法按照自定义方式排序，可以传入一个函数作为参数。
```js
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']
[10111, 1101, 111].sort()
// [10111, 1101, 111]

[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
```
### reverse()
> reverse方法用于颠倒排列数组元素，返回改变后的数组。
```js
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```
## 不改变原数组的方法
::: tip 提示
join,concat,slice,valueOf,toString 这些方法不改变原数组
:::
### join()
* join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回
* 如果数组成员是undefined或null或空位，会被转成空字符串。
```js
var a = [1, 2, 3, 4];

a.join(' ') // => '1 2 3 4'
a.join(' | ') // => "1 | 2 | 3 | 4"
a.join() // => "1,2,3,4"
```
### concat()
* concat方法用于多个数组的合并
* 它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组
```js
[1,2,3].concat([4,5,6])
// => [1, 2, 3, 4, 5, 6]
```
### slice()
* arr.slice(start, end);
* slice()方法用于提取目标数组的一部分，返回一个新数组
* 省略第二个参数，则一直返回到原数组的最后一个成员
* slice()方法的一个重要应用，是将类似数组的对象转为真正的数组
```js
var a = ['a', 'b', 'c', 'd', 'e'];
a.slice(1) // ["b", "c", "d", "e"]
a.slice(1, 2) // ["b"]
a.slice(1,-1)  // ["b", "c", "d"]

Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']
```
### valueOf()，toString()
* 数组的 valueOf 方法返回数组本身。
* 数组的 toString 方法返回数组的字符串形式
```js
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
```
## 遍历数组的方法
::: tip 提示
map, forEach, filter, some, every 接收一个函数作为参数; 
该函数参数分别为：item, index, arr (当前成员、当前位置和数组本身)
:::
### map(), forEach()
* map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回
* map 和 forEach方法还可以接受第二个参数，用来绑定回调函数内部的this变量
* forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数
* forEach方法不返回值，只用来操作数据
* 数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法
```js
var numbers = [1, 2, 3];
var arr = numbers.map( item => item + 1 ) 
arr // [2, 3, 4]
```
```js
var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
```
```js
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```
::: warning 注意
forEach方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环。
:::
### filter(), some(), every()
* filter 方法用于过滤数组成员，满足条件的成员组成一个新数组返回
* some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false
* every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false
* 方法还可以接受第二个参数，用来绑定参数函数内部的this变量
```js
[1, 2, 3, 4, 5].filter(item => item > 3) // [4, 5]

[1,2,3,4].some(item => item > 2) // true
[1,2,3,4].every(item => item > 2) // false
```
```js
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
```
### reduce(), reduceRight()
* reduce 方法和 reduceRight 方法依次处理数组的每个成员，最终累计为一个值
* reduce 是从左到右处理（从第一个成员到最后一个成员）
* reduceRight 则是从右到左（从最后一个成员到第一个成员），其他完全一样
* params: callback, initialValue ; callback(one, two, index, arr) 
* 第二个参数相当于设定了默认值，处理空数组时尤其有用
```js
[1, 2, 3, 4, 5].reduce((a, b)=> a + b)  // => 15
[1, 2, 3, 4, 5].reduce((a, b)=> a + b , 10)  // => 25
```
### indexOf(), lastIndexOf()
* indexOf 方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
* indexOf 方法还可以接受第二个参数，表示搜索的开始位置。
* lastIndexOf 方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1
```js
var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1

var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
```
::: warning 注意
不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN,
方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值。
:::
```js
[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
```
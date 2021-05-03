---
title: this 使用场景
---
# js 中的 this 使用场景
[[toc]]
## 全局和普通函数中的 this
```js
// 浏览器中的 this
this === window  // true

// node 环境中的 this
this === global // true

// 普通函数中的 this
function log() {
  return (this.x)
}
log() // 10
```
## 构造函数中的 this
指向实例化对象 本身
```js
function Person(name) {
    this.name = name
    this.log = function () {
        return this
    }
}
var abc = new Person('abc')
abc.log()  // => Person {name: "abc", log: ƒ}
```
## 对象方法的中 this
如果函数作为对象的方法时，方法中的 this 指向该对象
```js
var obj = {
  x: 10,
  log: function() {
    return this.x
  }
}
obj.log() // => 10
```
::: warning 注意
注意：若是在对象方法中定义函数，那么情况就不同了
:::
```js
var obj = {
    x: 10,
    foo: function () {
        function f(){
            console.log(this);      //Window
            console.log(this.x);    //undefined
        }
        f();
    }
}
obj.foo();
//函数 f 虽然是在 obj.foo 内部定义的，但它仍然属于一个普通函数，this 仍指向 window
```
如果想要调用上层作用域中的变量 obj.x，可以使用 self 缓存外部 this 变量
```js
var obj = {
    x: 10,
    foo: function () {
        var self = this;
        function f(){
            console.log(self);      //{x: 10}
            console.log(self.x);    //10
        }
        f();
    }
}
obj.foo();
```
## 构造函数 prototype 属性
```js
function Foo(){
    this.x = 10;
}
Foo.prototype.getX = function () {
    console.log(this);        //Foo {x: 10, getX: function}
    console.log(this.x);      //10
}
var foo = new Foo();
foo.getX();
```
在 Foo.prototype.getX 函数中，this 指向的 foo 对象。不仅仅如此，即便是在整个原型链中，this 代表的也是当前对象的值。

## 函数用 call、apply或者 bind 调用
当一个函数被 call、apply 或者 bind 调用时，this 的值就取传入的对象的值
```js
var obj = {
    x: 10
}
function foo(){
    console.log(this);     //{x: 10}
    console.log(this.x);   //10
}
foo.call(obj);
foo.apply(obj);
foo.bind(obj)();
```
## 浏览器 HTML DOM 事件处理程序中的 this
在一个 HTML DOM 事件处理程序里，this 始终指向这个处理程序所绑定的 HTML DOM 节点

## 箭头函数中的 this
箭头函数完全修复了 this 的指向，this 总是指向词法作用域，也就是外层调用者 obj
```js
var obj = {
    x: 10,
    foo: function() {
        var fn = () => {
            return () => {
                return () => {
                    console.log(this);      //Object {x: 10}
                    console.log(this.x);    //10
                }
            }
        }
        fn()()();
    }
}
obj.foo();
```
由于 this 在箭头函数中已经按照词法作用域绑定了，所以，用 call()或者 apply()调用箭头函数时，无法对 this 进行绑定，即传入的第一个参数被忽略
---
title: 异步操作
autoGroup-1: 重要内容
---
# JavaScript 之异步操作
[[toc]]
## Promise 
 Promise 表示一个异步操作的最终结果
> A promise represents the eventual result of an asynchronous operation
### Promise 的三种状态
>状态变化只能是 pending => resolved 或 pending => rejected, 状态不可逆
* Pending: 表示还在执行
* Fulfilled (resolved): 执行成功
* Rejected: 执行失败
### 基本用法
创造了一个 Promise 实例
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
使用 promise
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});

// or
promise.then(()=>{
  // success
}).catch(error=> {
  // failure
}) 
```
then 方法返回的是一个新的Promise实例, 因此可以采用链式写法
```js
promise.then(()=>{
  // success
  return 'something'
}).then((params)=>{
  // then something
}).catch(error=> {
  // failure
}) 
```
### Promise 加载一张图片
```js
function loadImg (url) {
  return new Promise(function(resolve, reject){
    const imgElement = document.createElement('img')
    imgElement.onload = function () {
      resolve(imgElement)
    }
    imgElement.onerror = function () {
      reject(url)
    }
    imgElement.src = url
  })
}

const url = 'https://xxx.jpg'

loadImg(url).then(img=>{
  console.log(img)
  document.body.appendChild(img)
}).catch(url=>{
  const e = new Error('not finded url: ' +  url)
  console.log(e)
})
```
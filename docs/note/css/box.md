# 圣杯布局 和 双飞翼布局
## 圣杯布局
* 首先 要求是 三列布局中， 左右两侧固定宽， 中间内容的宽自适应并且要优先渲染
* 写法 中间内容写在最上面，依次是 左右两侧内容
```html
<div class="clear container">
  <main>main</main>
  <aside class="aside-left">aside-left</aside>
  <aside class="aside-right">aside-right</aside>
</div>
```
* 假设左右固定宽为  150px,  父元素 container 需要设内边距 padding: 0 150px;
* 由于 container 有内边距，所以 main  元素的宽不得小于 150 ， 150*2+150=450 ，所以 body 需要设置 min-width: 450px;
* mian , aside-left , aside-right , 设置浮动， float: left;  
* main 的宽为 100% ; left 和 right 设置相对定位
* aside-left 设置： marigin-left: -100%;  left: -150px;
* aside-right 设置： margin-right: -150px;
```css
.container>*{
  position: relative;
  float: left;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.container main {
  width: 100%;
  background-color: #000;
}
.container .aside-left {
  margin-left: -100%;
  left: -150px;
  width: 150px;
  background-color: red;
}
.container .aside-right {
  width: 150px;
  margin-right: -150px;
  background-color: blue;
}
```

## 双飞翼布局
* 相比圣杯布局，双飞翼布局在container多了一个子节点
* 为其左右两边设置margin-left 和 margin-right ，为left 和 right留出空间
* 双飞翼布局不是像圣杯布局那样使用相对定位，而是在middle内部新增一个子节点，并设置它的margin-left 和 margin-right 
* 这样left设置margin-left为100%之后就不会被遮挡了，而right只需要margin-left: 150px就可以
* 相比来说，双飞翼布局比圣杯布局更简单，没有用到定位
```html
<div class="clear container">
  <main>
    <div class="main-container">main</div>
  </main>
  <aside class="aside-left">aside-left</aside>
  <aside class="aside-right">aside-right</aside>
</div>
```
```css
.container>*{
  float: left;
}
.container main {
  width: 100%;
}
.container .aside-left {
  margin-left: -100%;
  width: 150px;
  background-color: red;
}
.container .aside-right {
  width: 150px;
  margin-left: -150px;
  background-color: blue;
}
.main-container {
  margin: 0 150px;
  background-color: #000;
}
```
# String 对象
[[toc]]
## charAt, charCodeAt, concat
* charAt 方法返回指定位置的字符，参数是从0开始编号的位置
* charCodeAt 方法返回字符串指定位置的 Unicode 码点（十进制表示）
* concat 方法用于连接两个字符串，返回一个新字符串，不改变原字符串
```js
var str = 'JavaScript'
str.charAt(4) // => "S"
str[0] //=> "J"

str.charCodeAt(0) // => 74

var j = "Java"
var s = "Script"
j.concat(s)  // => "JavaScript"
'a'.concat('b', 'c') // "abc"
```
## slice, substring, substr
* slice ,substring, substr 方法都用于从原字符串取出子字符串并返回
* 他们第一个参数都是开始位置(从0开始)
* slice ,substring 的第二个参数是结束位置, 而 substr 是长度
* substring 第二个参数为负数 无效
```js
'JavaScript'.slice(0, 4) // "Java"
'JavaScript'.slice(4) // "Script"
"JavaScript".slice(-1) // "t"
"JavaScript".slice(0, -1) // "JavaScrip"

'JavaScript'.substring(-1) // "JavaScript"
'JavaScript'.substr(0, -1) // ""
```
## indexOf, lastIndexOf
* indexOf方法用于确定一个字符串在另一个字符串中第一次出现的位置
* 返回结果是匹配开始的位置。如果返回-1，就表示不匹配
* indexOf 第二个参数，表示从该位置开始向后匹配
* lastIndexOf 从尾部开始匹配, 第二个参数表示从该位置起向前匹配
```js
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
'hello world'.indexOf('o', 6) // 7

'hello world'.lastIndexOf('o', 6) // 4
```
## toLowerCase, toUpperCase
* toLowerCase 将一个字符串全部转为小写,返回一个新字符串
* toUpperCase 则是全部转为大写,返回一个新字符串
```js
'Hello World'.toLowerCase() // "hello world"

'Hello World'.toUpperCase() // "HELLO WORLD"
```
## match, search, replace
* match 确定原字符串是否匹配某个子字符串，返回一个数组，无匹配, 返回 null
* search 基本等同于match，返回值为匹配的第一个位置。无匹配，则返回-1
* replace 替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式）
* match, search, replace 都可以使用正则表达式作为参数
```js
'cat, bat, sat, fat at'.match('at') 
// ["at", index: 1, input: "cat, bat, sat, fat at", groups: undefined]

'cat, bat, sat, fat'.match('xt') // null

'cat, bat, sat, fat'.search('at') // 1
'aaa'.replace('a', 'b') // "baa"
```
##  split, trim
* split 按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组
* trim 去除字符串两端的空格，返回一个新字符串
* 包括制表符（\t、\v）、换行符（\n）和回车符（\r）
```js
'a|b|c'.split('|') // ["a", "b", "c"]
'a|b|c'.split('') //  ["a", "|", "b", "|", "c"]
'a|b|c'.split() // ["a|b|c"]
// 第二个参数，限定返回数组的最大成员数。
'a|b|c'.split('|', 2) // ["a", "b"]
```
```js
'  hello world  '.trim() // "hello world"
var s = '\r\nabc \t'
/*
"
abc 	"
*/
s.trim() // "abc"
```
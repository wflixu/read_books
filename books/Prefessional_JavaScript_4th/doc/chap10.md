## 10.9 函数内部

### 10.9.1 arguments

arguments.callee;

### 10.9.2  this 

### 10.9.3 caller

### 10.9.4 new.target

## 10.10 函数属性和方法

属性：
- length
- prototype

方法：
- apply()
- call()
- bind()

## 10.11 函数表达式

匿名函数
拉姆达函数

声明函数不要放在逻辑判断中，函数表达式可以

## 10.12 递归

## 10.13 尾调优化

尾调用优化的条件：
- 代码在严格模式下
- 外部函数的返回值式对尾调用函数的调用
- 尾调用函数返回后不需要执行额外的逻辑
- 尾调用函数不是引用外部函数作用域中自由变量的闭包

## 10.14 闭包

闭包中的this 对象比较复杂

IE 浏览器中的内存泄露问题：
 内存泄漏问题

## 10.15 立即调用的函数表达式

IIFE 可以模拟块级作用域，且不会产生闭包问题，ES6之前很有用，之后没有那么必要了


## 10.16 私有变量

静态私有变量

模块模式

增强模块模式

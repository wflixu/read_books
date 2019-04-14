## 初始化一个项目
通过 create-react-appp 来初始化项目

## 增加一个新的react 组件

### jsx
jsx 中的元素，首字母小写是原生html元素，大写是自定义组件，
jsx 中的事件都控制在组件的范围，使用事件委托的方式，最终在dom树上添加了一个事件处理函数，在组件生命周期 componentDidUnmount 时候清除事件处理函数。

### 分解React 应用

npm run eject 项目目录中生成配置脚本文件，是不可逆的过程，
使用babel 转译js或jsx,转译成浏览器支持的es,这样可以使用ES6的语法来写代码。

### React 的工作方式
和react 相比，jQuery 开发模式 容易理解，直观易懂，但是对于庞大项目 这种模式结构复杂，难以维护。
React 的理念 UI = render(data);
纯函数： 没有任何副作用，输出完全依赖于输入的函数，两次函数调用如果输入相同，得到的结果也绝对相同。

react 利用虚拟dom 每次渲染只重新渲染最少的DOM元素

react 工作方式的优点  1. 避免构建复杂的程序结构，2.利用函数式编程解决用户界面渲染问题，提高了开发效率。

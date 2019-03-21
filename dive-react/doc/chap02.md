
## QA
1. 划分组件边界的原则
2. react 组件的数据种类
3. react 组件的生命周期

<hr/>

## 易于维护组件的设计要素

分而治之 的策略： 每个小的组件只关注实现单个功能，但是这些功能组合起来，能满足复杂的实际需求

高内聚，低耦合
把逻辑紧密相关的内容放在一个组件中，就是高内聚
不同组件之间的依赖关系尽量弱化，也就式每个组件要尽量独立。

## React 组件的数据
prop ,state

给prop 赋值，字符串和属性相同，其他类型的数据用{} 包起来。

读取prop值， 通过this.props 

 在constructor 中初始化，初始化state,通过this.setState({}) 更新state,

 prop 和 state 的区别

 * prop 用于定义外部接口，state用于记录内部状态
 * prop的赋值在外部使用组件时，state 的赋值在组件内部
 * 组件不应该改变prop的值，而state 存在的目的时让组件来改变的
 ## 组件的生命周期

 生命周期的三个过程
 1. 装在过程
   * constructor
        * 初始化state
        * 成员函数绑定this
   * componentWillMount
      可以在服务端调用
   * render
   * componentDidMount
    render函数被调用完之后，componentDidMount函数并不是会被立刻调用，componentDidMount被调用的时候，render函数返回的东西已经引发了渲染，组件已经被“装载”到了DOM树上。不可以再服务端调用
 2. 更新过程
    * componentWillReceiveProps（nextProps）
    实际上，只要是父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程，不管父组件传给子组件的props有没有改变，都会触发子组件的componentWill-ReceiveProps函数。

    * shouldComponentUpdate(nextProps,nextState)

    * componentWillUpdate
    * render
    * componentDidUpdate
 3. 卸载过程
  * omponentWillUnmount

## 组件向外传递数据
通过prop 属性为函数，传递给子组件，子组件条用prop 函数更新父组件的数据。


## react组件state和prop的局限

* 数据重复如何保持数据的一致性
* 顶层组件传递数据到最底层，通过prop 方式，中间组件不需要prop,但必须支持prop 属性，违反了低耦合的设计要求。


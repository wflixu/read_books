
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
   * render
   * componentDidMount
 2. 更新过程
 3. 卸载过程


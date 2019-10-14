# react 高级组件 

## 高阶组件
高阶组件是一个函数，以组件作为参数，返回一个输入组件不具备功能的新组件，也叫高阶组件工厂函数

高阶组件的意义：

* 有利于代码重用
* 修改现有React组件的行为

高阶组件分类：
* 代理方式的高阶组件
  * 操作prop
  * 访问ref
  * 抽取状态
  * 包装组件
* 继承方式的高阶组件
  * 操作prop
  * 操作生命周期 （使用继承模式高阶组件的场景）;

> **优先考虑组合，然后考虑继承**


高阶组件的显示名 displayName

React Mixin

Mixin 的功能是代码服用，由于太灵活，提倡组件内部的state, 与react 尽量把state 从组件中抽取出来的理念背道，所以逐渐被放弃








## 以函数为子组件

怎么用：
```javascript
const loggedinUser = 'mock user';
class AddUserProp extends React.Component { 
     render() {    const user = loggedinUser;  
       return this.props.children(user);  
 }}

AddUserProp.propTypes = {  
    children: React.PropTypes.func.isRequired
}

//使用

<AddUserProp>
  { (user) => <div>{user}</div> }
</AddUserProp>

// 1
<AddUserProp>
{
(user) => <Foo user={user} />
}
</AddUserProp>

//2
<AddUserProp>
{
(user) => <Bar currentUser={user} />
}
</AddUserProp>

```

以函数为子组件，就是组件实例的生命周期中，通过this.props.children 直接调用子组件。

高阶组件的问题是要求参数组件必须和自己有锲约的方式，才能使用，这样会带来很多的麻烦。
以函数为子组件，比较灵活，但无法做性能优化，因为没有更新都是一个新匿名函数，连接子组件和父组件。

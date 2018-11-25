# 单组件的性能优化

  shouldComponentUpdate (nextProps,nextState){
    return (nextProps.completed!==this.props.completed) || (nextProps.text !==this.props.text)
  }

  
  action 在子组件导入， 让组件处理自己的一切事务，更复合高内聚的要求。


# 多个react 组件的性能优化

组件的卸载阶段，只有一个生命周期函数componentWillUn-mount，这个函数做的事情只是清理componentDidMount添加的事件处理监听等收尾工作，做的事情比装载过程要少很多，
## 调和（reconciliation 过程）

一定要避免作为包裹功能的节点类型被随意改变，像上面的例子中，把div换成span只会带来没有必要的组件重新装载。

react 组件更新的过程：
 * shouldComponentUpdate  
 * componentWillReceiveProps   
 * componentWillUpdate   
 * render   
 * componentDidUpdate

 列表中的key
 key 设置index 是不合理的


# 利用reselect 提高数据选取性能

分两步：
1. 从输入参数state 抽取第一层结果，
2. 根据第一层结果计算出选择器需要返回得最终结果


范式化状态树




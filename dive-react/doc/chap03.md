## Flux

react 是用来替换jQuery，Flux是为了替换 backbone和ember 等框架的。
1. MVC框架的缺陷
不同模块间的依赖关系让系统变得脆弱而不可预测。

2. flux 

Action =====> Dispatcher ===> Store  ===>  View
                 ^                           ||
                 |                           || 
                 |<====== Action  <========= ||
3. flux 的优势
MVC框架的缺点式无法禁止view 和model之间的对话，flux 很好解决了这个问题，view只能通过get方法获取store 的状态，无法直接修改状态，view通过派发一个action对象给dispatcher来修改 Store 状态。
4. flux 的不足
* store之间的依赖关系
* 难以进行服务器渲染
* store混杂了逻辑和状态


## Redux 

redux 的三个基本原则
* 唯一数据源
* 保持状态只读
* 数据改变只通过纯函数完成





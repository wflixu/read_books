"use strict";
// function add (a:number, b:number) {
//     return a + b;
// }
var numberFilter = function (array, fn) {
    var res = [];
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (fn(element)) {
            res.push(element);
        }
    }
    return res;
};
// function map(array:unknown[],f:(item:unknown) => unknown):unknown[] {
//     let result = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = f(array[index]);
//         result[index] = element;
//     }
//     return result;
// }
function map(array, f) {
    var result = [];
    for (var index = 0; index < array.length; index++) {
        var element = f(array[index]);
        result[index] = element;
    }
    return result;
}
map(['a', 'b', 'c'], function (_) { return _ == 'a'; });
map(['a', 'b', 'c'], function (_) { return _ == 'a'; });
var myEvent = {
    target: document.querySelector('myButton'),
    type: 'click'
};
// 构建其他类型
// type TimeEvent<T> = {
//     event:MyEvent<T>,
//     from:Date,
//     to:Date,
// }
// // 泛型别名在函数签名中使用
// function triggerEvent <T>(event:MyEvent<T>):void {
// }
// type TreeNode = {
//     value: string;
// }
// type LeafNode = TreeNode & {
//     isLeaf: true
// }
// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode]
// }
// function mapNode<T extends TreeNode>(
//     node: T,
//     f: (value: string) => string
// ): T {
//     return {
//         ...node,
//         value: f(node.value)
//     }
// }
// let a :TreeNode = {value: 'a'}
// let b :LeafNode = {value: 'b', isLeaf:true}
// let c :InnerNode = {value: 'c', children:[b]}
// let a1 = mapNode(a, _ => _.toUpperCase())
// let b1 = mapNode(b, _ => _.toUpperCase())
// let c1 = mapNode(c, _ => _.toUpperCase())
// type HasSide = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };
// function logPerimeter<Shape extends HasSide & SidesHaveLength>(s: Shape) {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }
// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
//     return f(...args);
// }
// function call<T extends unknown[], R>(
//   f: (...args: T) => R,
//   ...args: T
// ): R{
//   return f(...args);
// }
// function fill(length: number, value: string): string[] {
//   return Array.from({ length }, () => value);
// }
// call(fill, 10, "a");
// call(fill, 10);
// call(fill, 10, '4', '4');
// // 泛型默认值
// type MyEvent<T = HTMLElement> = {
//     target: T,
//     type:string
// }
// // 泛型限制
// type MyEvent<T extends HTMLElement = HTMLElement> = {
//     target: T,
//     type:string
// }
// // 多个泛型，默认值放在最后面
// type MyEvent<U extends string,T extends HTMLElement = HTMLElement> = {
//     target: T,
//     type:U
// }
//# sourceMappingURL=chap4.js.map
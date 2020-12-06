# 17 事件
## 17.1 事件流
### 事件冒泡

### 事件捕获

## 17.2 事件处理程序

### HTML事件处理程序

## 17.3 事件对象

1. DOM事件对象
  - bubbles
  - cancelable
  - currentTarget
  - defaultPrevented 
  - detailed
  - eventPhase
  - preventDefault();
  - stopImmediatePropation()
  - stopPropagation();
  - target
  - trusted 
  - type 
  - View 

## 17.4 事件类型
  
1. 用户基面事件
    
  - load
  - unload
  - resize
  - scroll 
2. 焦点事件
  - focusout 
  - focusin 
  - blur 
  - focus
3. 鼠标和滚轮事件
  - click 
  - dbclick
  - mousedown 
  - mouseenter 不支持冒泡
  - mouseleave  不支持冒泡
  - mouseover 
  - mouseout 移动到的元素可以值原始元素的子元素 
  - mouseover 
  - mouseup

  下面几个事件关联，如果一个事件取消，后续事件将不会触发
   mousedown=>mouseup=>click => mousedown=>mouseup=>click =>dbclick 
   mousedown、mouseup 中的一个事件被取消，click 不会触发，

   MouseEvent 的属性：

  - 客户端坐标 clientX clientY 
  - 页面坐标 pageX ,pageY ,在页面没有滚动时，页面坐标和客户端坐标相同。
  - 屏幕坐标
  - 修饰键 shiftKey , ctrlKey, altKey, metaKey
  - 相关元素 mouseover,mouseout 事件对象存在 relatedTarget
  - 鼠标按键 button 属性 0 主键，1 中键，2 右键
  - 额外事件信息，  detail 
  - mouseWheel  wheelDelta 120  -120 代表上下滚动
  - 触屏设备
  - 无障碍问题


4. 键盘与输入事件

  - keydow 事件
  - keyup 事件
    - 键码
  - textinput 事件

5. 合成事件 

7. HTML5 事件

- contextmenu 事件
- beforeunload 事件
- DOMContentLoaded 事件
- readyStateChanged 事件
- pageshow和pagehide事件
- hashchange 事件

8. 设备事件

9. 触摸及手势事件

10. 事件参考 

## 17.5 内存与性能

1. 事件委托
2. 删除事件处理程序

## 17.6 模拟事件







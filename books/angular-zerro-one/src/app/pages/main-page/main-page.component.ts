import { Component, OnInit } from '@angular/core';


import * as AV from 'leancloud-storage';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(AV)
  }

  test(){





  }
  addTodo(){
    AV.init({
      appId: "awgkVY8XvUY5oWtvmzRH6ylj-gzGzoHsz",
      appKey: "GJnJ1a8KVnaVLquMKj6uSllD",
      serverURLs: "https://awgkvy8x.lc-cn-n1-shared.com"
    });
    console.log('start!!!!!!!!!!!')
          // 声明 class
      let Todo = AV.Object.extend('Todo');

      // 构建对象
      let todo = new Todo();

      // 为属性赋值
      todo.set('title',   '工程师周会');
      todo.set('content', '周二两点，全体成员');

      // 将对象保存到云端
      todo.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑

      console.log('保存成功。objectId：' + todo.id);
      }, function (error) {
      // 异常处理
      });
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  contents = 'assets/contents.jpg';
  module = 'assets/module.jpg';
  component = 'assets/component.jpg';
  titles = 'assets/title.jpg';

  public title = '我是一个标题';

  msg = '我是一个信息';

  public student: any = '我是一个的学生信息';

  public userinfo: any = {
    username: '狗总',
    userage: 45,
  };

  public message: any;

  public content: any = '<h3>我是一个h2标签</h3>';

  public arr = ['123', '234', '567', '789'];

  public userlist: any[] = [{
    username: '小张',
    age: 25,
  }, {
    username: '小王',
    age: 30,
  }];

  public funcinfo: any[] = [{
    who: '小李',
    thing: '打篮球',
  }, {
    who: '小宇',
    thing: '玩电脑游戏',
  }];

  public cars: any[] = [{
    cate: '大众',
    list: [{
      title: 'polo',
      price: '25w',
      speed: '180km',
    }, {
      title: '迈腾',
      price: '30w',
      speed: '200km',
    }, {
      title: '速腾',
      price: '15w',
      speed: '115km',
    }]
  },
  {
    cate: '丰田',
    list: [{
      title: '凯美瑞',
      price: '15w',
      speed: '240km',
    }, {
      title: '汉兰达',
      price: '29w',
      speed: '188km',
    }, {
      title: '陆逊',
      price: '100w',
      speed: '200km',
    }],
  }];


  constructor() {
    this.message = '这是给属性赋值--（也叫改变属性的值）';
    console.log(this.message);
    this.message = '改变message的值';
    console.log(this.message);
  }

  ngOnInit() {
  }

}

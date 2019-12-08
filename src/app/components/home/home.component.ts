import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picture = 'http://5b0988e595225.cdn.sohucs.com/images/20171229/5a199d35d55e429f9a3a4c9bb3c77684.gif';
  public collect = false;
  public list: any[] = [
    {
      title: '我是新闻1'
    },
    {
      title: '我是新闻2'
    },
    {
      title: ' 我是新闻3'
    },
  ];

  public flag: boolean = true;

  public orderStatus: number = 1;
  public today: any = new Date();
  public arr: any[] = ['ngClass演示3', 'ngClass演示3', 'ngClass演示3', 'ngClass演示3', 'ngClass演示3'];
  public attr: any = 'cyan';
  public title: any = '我是一个title';
  public keywords: any = '默認值';

  constructor() {

  }

  ngOnInit() {
  }
  run() {
    alert('这是一个自定义方法');
  }

  onClick() {
    alert('你是一个Sb');
  }

  getdate() {
    alert(this.title);
  }
  changedate() {
    this.title = '我是改变后的title';
  }
  keydown() {
    console.log('key')
  }
  keydownevent(e) {
    if (e.key == 'Enter') {
      console.log('按了一下回车键')
    }
    else (console.log(e.target.value))
  }
  keyup(e) {
    if (e.key == 'Enter') {
      console.log('输入框的值为:', e.target.value)
    }
    else { console.log(e.key) }
  }
  setDate(event) {
    let abc = event.target;
    abc.style.color = 'red';
    abc.value = '你是一个大傻逼'
  }
  set(event) {
    let acd = event.target;
    if (acd.value == '你是一个大傻逼') {
      console.log('敲回车');
      acd.value = '就是你错不了';
    } else console.log('其他键')
  }

  changeKey() {
    this.keywords = '改變後的值';
  }
  getKey() {
    console.log(this.keywords);
  }
}

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { noUndefined } from '@angular/compiler/src/util';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  keyWords: any = '';
  historyList: any = [null]; //怎样在列表初始化为空的时候实现功能

  constructor(public msg: NzMessageService) { }

  ngOnInit() {
  }

  doSearch() {

    this.historyList.push(this.keyWords);
    console.log(this.keyWords);
    this.keyWords = '';

  }
  keyup(e) {
    if (e.key == 'Enter') {
      this.doSearch()
    }
  }
}

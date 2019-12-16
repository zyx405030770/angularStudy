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
  historyList: any = ['']; //怎样在列表初始化为空的时候实现功能？

  constructor(public msg: NzMessageService) { }

  ngOnInit() {
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyWords) == -1) {
      this.historyList.push(this.keyWords);
    } this.keyWords = '';
  }

  keyup(e) {
    if (e.key == 'Enter') {
      this.doSearch()
    }
  }

  deleteHistory(key) {
    alert(key);
    this.historyList.splice(key, 1);
  }
}

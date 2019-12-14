import { Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  peoplelist: any = {
    username: '',
    sex: '1',
    citys: ['北京', '上海', '深圳', '重庆'],
    selectedCity: '重庆',
    hobby: [{
      title: '吃饭',
      checked: false,
    }, {
      title: '睡觉',
      checked: false,
    }, {
      title: '开车',
      checked: true,
    }],
    remark: ''
  }
  radioValue = 'A';

  constructor() { }

  ngOnInit() {
  }

  getValue() {
    console.log(this.peoplelist)
  }
}

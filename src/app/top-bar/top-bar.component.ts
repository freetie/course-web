import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  navLinks = [
    {
      title: 'コース一覧',
      path: '/course',
    }, {
      title: 'ビデオ管理',
      path: '/video',
    }, {
      title: '学生管理',
      path: '/student',
    }
  ];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

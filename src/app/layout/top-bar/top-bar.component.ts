import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  navLinks = [
    {
      title: 'コース一覧',
      path: '/course',
    },
    {
      title: 'ビデオ管理',
      path: '/video',
    },
    {
      title: '学生管理',
      path: '/student',
    },
  ];
  currentAccount: Account | undefined;
  constructor(public router: Router, public sessionService: SessionService) {
    this.sessionService.currentAccount.subscribe((data) => {
      this.currentAccount = data;
    });
  }

  ngOnInit(): void {
    this.sessionService.queryCurrentAccount();
  }
}

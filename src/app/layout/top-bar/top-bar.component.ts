import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { SessionService } from '../../service/session.service';

const defaultLinks = [
  {
    title: 'コース一覧',
    path: '/course',
  },
];

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  navLinks = defaultLinks;
  currentAccount: Account | undefined;
  constructor(public router: Router, public sessionService: SessionService) {
    this.sessionService.currentAccount.subscribe((data) => {
      this.currentAccount = data;
      if (data?.role === 'TEACHER') {
        this.navLinks = [
          ...defaultLinks,
          {
            title: 'ビデオ管理',
            path: '/video',
          },
        ];
      }
      if (data?.role === 'ADMIN') {
        this.navLinks = [
          ...defaultLinks,
          {
            title: '学生管理',
            path: '/student',
          },
        ];
      }
    });
  }

  ngOnInit(): void {
    this.sessionService.queryCurrentAccount();
  }
}

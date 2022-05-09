import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/entity/account';
import { SessionService } from '../../service/session.service';

const generateDefaultLinks = () => {
  return [
    {
      title: 'コース一覧',
      path: '/course',
    },
  ];
};

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  navLinks = generateDefaultLinks();
  currentAccount: Account | undefined;
  constructor(public router: Router, public sessionService: SessionService) {
    this.sessionService.currentAccount.subscribe((data) => {
      this.currentAccount = data;
      const navLinks = generateDefaultLinks();
      if (data?.role === 'TEACHER') {
        navLinks.push({
          title: 'ビデオ管理',
          path: '/video',
        });
      }
      if (data?.role === 'ADMIN') {
        navLinks.push({
          title: '学生管理',
          path: '/student',
        });
      }
      this.navLinks = navLinks;
    });
  }

  ngOnInit(): void {
    this.sessionService.queryCurrentAccount();
  }

  onLogout() {
    this.sessionService.logout().then(() => {
      this.router.navigateByUrl('/');
    });
  }
}

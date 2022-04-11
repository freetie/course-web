import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.sessionService.login(username, password).subscribe(() =>
      this.sessionService.queryCurrentAccount().then(() => {
        this.router.navigateByUrl('/');
      })
    );
  }
}

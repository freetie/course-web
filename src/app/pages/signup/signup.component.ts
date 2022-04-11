import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { username, password } = this.signupForm.value;
    this.accountService
      .signup(username, password)
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
}

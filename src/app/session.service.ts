import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Account {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  currentAccount: Account | undefined;
  constructor(private http: HttpClient) { }

  queryCurrentAccount() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const testAccount = {
          username: 'username',
          role: 'ADMIN',
        };
        this.currentAccount = testAccount;
        resolve(testAccount);
      }, 1000);
    });
  }
}

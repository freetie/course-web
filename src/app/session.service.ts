import { Injectable } from '@angular/core';

interface Account {
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  currentAccount: Account | undefined;
  constructor() {}

  queryCurrentAccount() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const testAccount = {
          username: 'username',
          roles: ['Admin'],
        };
        this.currentAccount = testAccount;
        resolve(testAccount);
      }, 1000);
    });
  }
}

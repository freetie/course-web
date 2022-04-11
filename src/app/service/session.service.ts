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
  constructor(private http: HttpClient) {}

  queryCurrentAccount() {
    return new Promise((resolve, reject) => {
      this.http.get<Account>('/session').subscribe({
        next: (data) => {
          this.currentAccount = data;
          resolve(data);
        },
        error: (err) => reject(err),
      });
    });
  }

  getCurrentAccount() {
    return this.currentAccount;
  }

  login(username: string, password: string) {
    return this.http.post('/session', { username, password });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.http.delete('/session').subscribe({
        next: () => {
          this.currentAccount = undefined;
          resolve(undefined);
        },
        error: reject,
      });
    });
  }
}

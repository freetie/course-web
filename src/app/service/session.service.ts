import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../entity/account';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  currentAccount = new BehaviorSubject<Account | undefined>(undefined);
  constructor(private http: HttpClient) {}

  queryCurrentAccount() {
    return new Promise((resolve, reject) => {
      this.http.get<Account>('/session').subscribe({
        next: (data) => {
          this.currentAccount.next(data);
          resolve(data);
        },
        error: (err) => reject(err),
      });
    });
  }

  getCurrentAccount() {
    return this.currentAccount.getValue();
  }

  login(username: string, password: string) {
    return this.http.post('/session', { username, password });
  }

  logout() {
    return new Promise((resolve, reject) => {
      this.http.delete('/session').subscribe({
        next: () => {
          this.currentAccount.next(undefined);
          resolve(undefined);
        },
        error: reject,
      });
    });
  }
}

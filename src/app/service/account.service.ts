import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedData } from '../entity';
import type { Account } from '../entity/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  signup(username: string, password: string) {
    return this.http.post('/account', { username, password });
  }

  queryStudents(page: number, size: number, username: string | undefined) {
    return this.http.get<PaginatedData<Account>>('/student', {
      params: {
        page,
        size,
        ...(username ? { username } : {}),
      },
    });
  }

  deleteAccount(id: number) {
    return this.http.delete(`/account/${id}`);
  }
}

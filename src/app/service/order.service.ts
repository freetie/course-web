import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../entity/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  queryOrdersByAccountId(accountId: number) {
    return this.http.get<Order[]>('/course/order', {
      params: { 'account-id': accountId },
    });
  }

  placeOrder(courseId: number, accountId: number) {
    return this.http.post('/course/order', {
      courseId,
      accountId,
    });
  }
}

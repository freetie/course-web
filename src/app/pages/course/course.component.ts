import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuyCourseDialogComponent } from './buy-course-dialog/buy-course-dialog.component';
import { Course } from '../../entity/course';
import { CourseService } from 'src/app/service/course.service';
import { OrderService } from 'src/app/service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from 'src/app/service/session.service';
import { Order } from 'src/app/entity/order';
import { Account } from 'src/app/entity/account';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  currentAccount: Account | undefined;
  courses: Course[] = [];
  orders: Order[] = [];
  querying = false;
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sessionService: SessionService,
    private courseService: CourseService,
    private orderService: OrderService
  ) {
    this.currentAccount = this.sessionService.getCurrentAccount();
    this.sessionService.currentAccount.subscribe((account) => {
      this.currentAccount = account;
      if (!account) {
        this.orders = [];
        return;
      }
      this.queryOrders();
    });
  }

  ngOnInit(): void {
    this.queryCourses();
  }
  queryCourses() {
    this.querying = true;
    this.courseService.queryCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.querying = false;
      },
      error: () => {
        this.querying = false;
      },
    });
  }
  queryOrders() {
    const currentAccount = this.sessionService.getCurrentAccount();
    this.orderService
      .queryOrdersByAccountId(currentAccount!.id)
      .subscribe((data) => {
        this.orders = data;
      });
  }
  isOwnCourse(courseId: number) {
    return this.orders.findIndex((order) => order.courseId === courseId) !== -1;
  }
  placeOrder(course: Course) {
    const currentAccount = this.sessionService.getCurrentAccount();
    if (!currentAccount) {
      this.snackBar.open('ログインしてください', undefined, {
        duration: 1500,
      });
      return;
    }
    const dialogRef = this.dialog.open(BuyCourseDialogComponent, {
      autoFocus: false,
      data: course,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.orderService
          .placeOrder(course.id, currentAccount.id)
          .subscribe(() => {
            this.queryOrders();
          });
      }
    });
  }
}

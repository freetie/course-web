import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuyCourseDialogComponent } from './buy-course-dialog/buy-course-dialog.component';
import { Course, testCourses } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  querying = false;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.queryCourses();
  }
  queryCourses() {
    return new Promise((resolve) => {
      this.querying = true;
      setTimeout(() => {
        this.courses = testCourses;
        this.querying = false;
        resolve(testCourses);
      }, 1000);
    });
  }
  buy(course: Course) {
    const dialogRef = this.dialog.open(BuyCourseDialogComponent, {
      autoFocus: false,
      data: course,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

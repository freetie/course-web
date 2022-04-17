import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../entity/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  queryCourses() {
    return this.http.get<Course[]>('/course');
  }

  createCourse(course: Partial<Course>) {
    return new Promise((resolve, reject) => {
      this.http.post(`/course`, course).subscribe({
        next: resolve,
        error: reject,
      });
    });
  }

  updateCourse(courseId: number, data: Partial<Course>) {
    return new Promise((resolve, reject) => {
      this.http.put(`/course/${courseId}`, data).subscribe({
        next: resolve,
        error: reject,
      });
    });
  }
}

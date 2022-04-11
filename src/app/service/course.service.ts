import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../entity/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  queryCourses() {
    return this.http.get<Course[]>('/course');
  }
}

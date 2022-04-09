import { Component, OnInit } from '@angular/core';
import { Course, testCourses } from '../course';
import { Video, testVideos } from '../video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  courses: Course[] = [];
  videos: { [courseId: string]: Video[] } = {};
  coursesQuerying = false;
  videosQueryingCourseId: number | undefined;
  displayedColumns = ['index', 'title', 'action'];

  constructor() { }

  ngOnInit(): void {
    this.queryCourses();
  }
  queryCourses() {
    return new Promise((resolve) => {
      this.coursesQuerying = true;
      setTimeout(() => {
        this.courses = testCourses;
        this.coursesQuerying = false;
        resolve(testCourses);
      }, 1000);
    });
  }

  onPanelOpened(course: Course) {
    if (!this.videos[course.id]) {
      this.queryVideos(course.id);
    }
  }

  queryVideos(courseId: number) {
    return new Promise((resolve) => {
      this.videosQueryingCourseId = courseId;
      setTimeout(() => {
        this.videos[courseId] = testVideos;
        this.videosQueryingCourseId = undefined;
        resolve(testVideos);
      }, 1000);
    });
  }

}

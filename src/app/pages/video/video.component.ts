import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseInfoDialogComponent } from './course-info-dialog/course-info-dialog.component';
import { VideoUploadDialogComponent } from './video-upload-dialog/video-upload-dialog.component'
import { Course, testCourses } from '../../entity/course';
import { Video, testVideos } from '../../entity/video';

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

  constructor(private dialog: MatDialog) { }

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

  createCourse() {
    const dialogRef = this.dialog.open(CourseInfoDialogComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  modifyCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseInfoDialogComponent, {
      autoFocus: false,
      data: course,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  uploadVideo(course: Course) {
    const dialogRef = this.dialog.open(VideoUploadDialogComponent, {
      autoFocus: false,
      data: course,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

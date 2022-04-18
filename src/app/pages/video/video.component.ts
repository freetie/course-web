import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseInfoDialogComponent } from './course-info-dialog/course-info-dialog.component';
import { VideoUploadDialogComponent } from './video-upload-dialog/video-upload-dialog.component';
import { Course } from '../../entity/course';
import { CourseService } from 'src/app/service/course.service';
import { Video } from '../../entity/video';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  courses: Course[] = [];
  videos: { [courseId: string]: Video[] } = {};
  coursesQuerying = false;
  videosQueryingCourseId: number | undefined;
  displayedColumns = ['index', 'title', 'action'];

  constructor(
    private dialog: MatDialog,
    private courseService: CourseService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.queryCourses();
  }
  queryCourses() {
    this.coursesQuerying = true;
    this.courseService.queryCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.coursesQuerying = false;
      },
      error: () => {
        this.coursesQuerying = false;
      },
    });
  }

  onPanelOpened(course: Course) {
    if (!this.videos[course.id]) {
      this.queryVideos(course.id);
    }
  }

  queryVideos(courseId: number) {
    this.videosQueryingCourseId = courseId;
    this.videoService
      .queryVideos(courseId)
      .then((res) => {
        this.videos[courseId] = res;
      })
      .finally(() => {
        this.videosQueryingCourseId = undefined;
      });
  }

  createCourse() {
    const dialogRef = this.dialog.open(CourseInfoDialogComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.queryCourses();
      }
    });
  }

  modifyCourse(course: Course) {
    const dialogRef = this.dialog.open(CourseInfoDialogComponent, {
      autoFocus: false,
      data: course,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  uploadVideo(course: Course) {
    const dialogRef = this.dialog.open(VideoUploadDialogComponent, {
      autoFocus: false,
      data: {
        courseId: course.id,
        index: this.videos[course.id]?.length || 0,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.queryVideos(course.id);
      }
    });
  }

  changeIndex(courseId: number, videoId: number, direction: string) {
    this.videoService.changeIndex(courseId, videoId, direction).then(() => {
      this.queryVideos(courseId);
    });
  }
}

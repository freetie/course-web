import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video, testVideos } from '../../../entity/video';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  videos: Video[] = [];
  querying = false;
  selectedVideo: Video | undefined;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.queryVideos(courseId);
  }

  queryVideos(courseId: number) {
    console.log(courseId)
    return new Promise((resolve) => {
      this.querying = true;
      setTimeout(() => {
        this.videos = testVideos;
        this.selectedVideo = testVideos[0];
        this.querying = false;
        resolve(testVideos);
      }, 1000);
    });
  }

  onSelectionChange(videoId: number) {
    this.selectedVideo = this.videos.find(item => item.id === videoId);
  }
}

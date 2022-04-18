import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from '../../../entity/video';
import { VideoService } from '../../../service/video.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  videos: Video[] = [];
  querying = false;
  selectedVideo: Video | undefined;
  selectedVideoUrl: string | undefined;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.queryVideos(courseId);
  }

  queryVideos(courseId: number) {
    this.querying = true;
    this.videoService
      .queryVideos(courseId)
      .then((videos) => {
        this.videos = videos;
        if (videos.length > 0) {
          this.selectedVideo = videos[0];
          this.videoService.queryVideoUrl(videos[0].id).then((url) => {
            this.selectedVideoUrl = url;
          });
        }
      })
      .finally(() => (this.querying = false));
  }

  onSelectionChange(videoId: number) {
    this.selectedVideoUrl = undefined;
    this.selectedVideo = this.videos.find((item) => item.id === videoId);
    this.videoService.queryVideoUrl(this.selectedVideo!.id).then((url) => {
      this.selectedVideoUrl = url;
    });
  }
}

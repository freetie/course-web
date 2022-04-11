import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from '../../../entity/video';
import { VideoService } from '../../../service/video.service';

@Component({
  selector: 'app-video-upload-dialog',
  templateUrl: './video-upload-dialog.component.html',
  styleUrls: ['./video-upload-dialog.component.css']
})
export class VideoUploadDialogComponent implements OnInit {
  videoForm = this.formBuilder.group({
    title: '',
  });
  selectedFile: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<VideoUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video | undefined,
    private formBuilder: FormBuilder,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

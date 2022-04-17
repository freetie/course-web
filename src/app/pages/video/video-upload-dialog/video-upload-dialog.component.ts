import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VideoService } from '../../../service/video.service';

@Component({
  selector: 'app-video-upload-dialog',
  templateUrl: './video-upload-dialog.component.html',
  styleUrls: ['./video-upload-dialog.component.css'],
})
export class VideoUploadDialogComponent implements OnInit {
  videoForm = this.formBuilder.group({
    title: '',
  });
  selectedFile: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<VideoUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { courseId: number; index: number },
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (!this.selectedFile || !this.videoForm.value.title) return;
    this.videoService
      .createVideo(
        this.data.courseId,
        this.videoForm.value.title,
        this.data.index,
        this.selectedFile
      )
      .then(() => {
        this.snackBar.open('アップロード成功', undefined, {
          duration: 1500,
        });
        this.dialogRef.close(true);
      });
  }
}

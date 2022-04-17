import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video, VideoUploadSignature } from '../entity/video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  private querySignature(courseId: number) {
    return new Promise<VideoUploadSignature>((resolve, reject) => {
      this.http
        .get<VideoUploadSignature>(`/course/${courseId}/signature`)
        .subscribe({
          next: resolve,
          error: reject,
        });
    });
  }

  private upload(signature: VideoUploadSignature, file: File) {
    return new Promise<string>((resolve, reject) => {
      console.log(signature);
      const formData = new FormData();
      formData.append('name', file.name);
      formData.append('key', `${signature.dir}\${filename}`);
      formData.append('policy', signature.policy);
      formData.append('OSSAccessKeyId', signature.accessid);
      formData.append('success_action_status', '200');
      formData.append('signature', signature.signature);
      formData.append('file', file);
      this.http.post(signature.host, formData).subscribe({
        next: () => resolve(`${signature.dir}${file.name}`),
        error: reject,
      });
    });
  }

  private saveInfo(
    courseId: number,
    title: string,
    index: number,
    path: string
  ) {
    return new Promise((resolve, reject) => {
      this.http
        .post(`/course/${courseId}/video`, {
          title,
          index,
          path,
        })
        .subscribe({
          next: resolve,
          error: reject,
        });
    });
  }

  createVideo(courseId: number, title: string, index: number, file: File) {
    return new Promise((resolve, reject) => {
      this.querySignature(courseId)
        .then((signature) => this.upload(signature, file))
        .then((path) => this.saveInfo(courseId, title, index, path))
        .then(resolve)
        .catch(reject);
    });
  }

  queryVideos(courseId: number) {
    return new Promise<Video[]>((resolve, reject) => {
      this.http.get<Video[]>(`/course/${courseId}/video`).subscribe({
        next: resolve,
        error: reject,
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  uploadVideo(formData: FormData) {
    const upload$ = this.http.post("/api/thumbnail-upload", formData);
    upload$.subscribe();
  }
}

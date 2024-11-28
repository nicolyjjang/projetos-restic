import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video-player/video-player.component';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/videos';

  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideoById(id: number): Observable<Video | undefined> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  updateViewCount(id: number, views: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { views: views });
  }
}
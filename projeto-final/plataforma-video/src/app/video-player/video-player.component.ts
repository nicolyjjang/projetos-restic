import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  url: string;
  uploadDate: string;
  views: number;
  uploadAt: string;
}

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  videoId: number | null = null;
  video$: Observable<Video | undefined> | null = null;
  viewCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    console.log('Componente VideoPlayer foi inicializado.');

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.videoId = id;
      
      if (this.videoId) {
        this.video$ = this.videoService.getVideoById(this.videoId);
        this.incrementViewCount(id);  
        this.scrollToVideo();
      }
    });
  }

  incrementViewCount(id: number): void {
    this.videoService.getVideoById(id).subscribe((video) => {
      if (video) {
        this.viewCount = (video.views || 0) + 1;  
        this.videoService.updateViewCount(id, this.viewCount).subscribe();
      }
    });
  }

  scrollToVideo(): void {
    const videoElement = document.getElementById('videoPlayerContainer');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }  
}
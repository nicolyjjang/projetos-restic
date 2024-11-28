import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  allVideos: Video[] = []; 
  filteredVideos: Video[] = []; 

  constructor(
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(
      (videos: Video[]) => {
        this.allVideos = videos;
        this.filteredVideos = videos;
        console.log('Vídeos carregados:', this.allVideos);  
      },
      (error) => {
        console.error('Erro ao carregar vídeos:', error);
      }
    );
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredVideos = this.allVideos.filter((video) =>
      video.title.toLowerCase().includes(query)
    );
  }

  onWatchClick(videoId: number): void {
    // Usando navegação programática para redirecionar
    this.router.navigate(['/video-player', videoId]);
  }
}

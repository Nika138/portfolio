import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  isLoaded: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }

  onImageLoad() {
    this.isLoaded = true;
  }
}

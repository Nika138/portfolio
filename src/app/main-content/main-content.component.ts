import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../components/projects/projects.component';
import { TechStackComponent } from '../components/tech-stack/tech-stack.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProjectsComponent,
    TechStackComponent,
    ContactsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  animations: [],
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

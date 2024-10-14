import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    MainContentComponent,
    RouterModule,
    TechStackComponent,
    ContactsComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [],
})
export class AppComponent {}

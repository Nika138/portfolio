import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ActiveSectionService } from './services/active-section.service';

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
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private activeSectionService: ActiveSectionService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSectionService.setActiveSection(entry.target.id);
        }
      });
    }, options);

    document.querySelectorAll('.section').forEach((section) => {
      this.observer.observe(section);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}

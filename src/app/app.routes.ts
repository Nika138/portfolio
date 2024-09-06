import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './pages/about/about.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'tech-stack',
    component: TechStackComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

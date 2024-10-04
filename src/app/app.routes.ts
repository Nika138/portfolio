import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  // { path: '**', component: NotFoundComponent },
];

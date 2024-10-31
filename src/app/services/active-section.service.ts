import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveSectionService {
  private activeSectionSource = new BehaviorSubject<string>('');
  activeSection$ = this.activeSectionSource.asObservable();

  setActiveSection(sectionId: string) {
    this.activeSectionSource.next(sectionId);
  }
}

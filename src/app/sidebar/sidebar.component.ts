import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ActiveSectionService } from '../services/active-section.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  activeSection: string = '';

  constructor(private activeSectionService: ActiveSectionService) {}

  ngOnInit() {
    this.activeSectionService.activeSection$.subscribe((sectionId) => {
      this.activeSection = sectionId;
    });
  }

  @Output() sectionClicked = new EventEmitter<string>();

  redirectToSection(sectionId: string): void {
    this.sectionClicked.emit(sectionId);
  }
}

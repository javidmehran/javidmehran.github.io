import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppId } from '../../models/window.types';
import { DesktopService } from '../../services/desktop.service';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [AsyncPipe, XpIconComponent],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
})
export class TaskbarComponent implements OnInit, OnDestroy {
  clock = '';
  private timer?: ReturnType<typeof setInterval>;

  constructor(public desktop: DesktopService) {}

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  toggleStart(): void {
    this.desktop.toggleStart();
  }

  activate(id: AppId): void {
    this.desktop.toggleTaskbarWindow(id);
  }

  private tick(): void {
    this.clock = new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });
  }
}

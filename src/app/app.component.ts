import { AsyncPipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { AboutAppComponent } from './components/apps/about-app.component';
import { CmdAppComponent } from './components/apps/cmd-app.component';
import { ContactAppComponent } from './components/apps/contact-app.component';
import { ExperienceAppComponent } from './components/apps/experience-app.component';
import { MediaAppComponent } from './components/apps/media-app.component';
import { MinesweeperAppComponent } from './components/apps/minesweeper-app.component';
import { ProjectsAppComponent } from './components/apps/projects-app.component';
import { RecycleAppComponent } from './components/apps/recycle-app.component';
import { SkillsAppComponent } from './components/apps/skills-app.component';
import { PhoneShellComponent } from './components/phone/phone-shell.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { XpIconComponent } from './components/xp-icon/xp-icon.component';
import { XpWindowComponent } from './components/xp-window/xp-window.component';
import { PROFILE } from './data/portfolio.data';
import { AppId } from './models/window.types';
import { DesktopService } from './services/desktop.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    TaskbarComponent,
    StartMenuComponent,
    XpWindowComponent,
    XpIconComponent,
    PhoneShellComponent,
    AboutAppComponent,
    ExperienceAppComponent,
    ProjectsAppComponent,
    SkillsAppComponent,
    ContactAppComponent,
    RecycleAppComponent,
    CmdAppComponent,
    MinesweeperAppComponent,
    MediaAppComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  readonly profile = PROFILE;
  isPhone = false;

  constructor(public desktop: DesktopService) {}

  ngOnInit(): void {
    this.updateViewport();
    setTimeout(() => {
      this.desktop.finishBoot();
      if (!this.isPhone) {
        setTimeout(() => this.desktop.openApp('about'), 350);
      }
    }, 2200);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateViewport();
  }

  private updateViewport(): void {
    const phone = window.matchMedia('(max-width: 820px)').matches;
    if (phone && !this.isPhone) {
      // Leaving desktop chrome — close floating windows.
      this.desktop.closeStart();
    }
    this.isPhone = phone;
  }

  onDesktopClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.start-menu') || target.closest('.start-btn')) return;
    this.desktop.closeStart();
  }

  openApp(id: AppId): void {
    this.desktop.openApp(id);
  }

  openExternal(url: string): void {
    this.desktop.closeStart();
    window.open(url, '_blank', 'noopener');
  }
}

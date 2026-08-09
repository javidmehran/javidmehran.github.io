import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { AppId } from '../../models/window.types';
import { AboutAppComponent } from '../apps/about-app.component';
import { CmdAppComponent } from '../apps/cmd-app.component';
import { ContactAppComponent } from '../apps/contact-app.component';
import { ExperienceAppComponent } from '../apps/experience-app.component';
import { MediaAppComponent } from '../apps/media-app.component';
import { MinesweeperAppComponent } from '../apps/minesweeper-app.component';
import { ProjectsAppComponent } from '../apps/projects-app.component';
import { RecycleAppComponent } from '../apps/recycle-app.component';
import { SkillsAppComponent } from '../apps/skills-app.component';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

type PhoneTile = {
  id?: AppId;
  href?: string;
  title: string;
  subtitle?: string;
  icon: string;
  size: 'small' | 'medium' | 'wide';
  color: string;
  live?: string;
};

@Component({
  selector: 'app-phone-shell',
  standalone: true,
  imports: [
    DatePipe,
    XpIconComponent,
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
  templateUrl: './phone-shell.component.html',
  styleUrl: './phone-shell.component.css',
})
export class PhoneShellComponent implements OnInit, OnDestroy {
  @Output() shutdown = new EventEmitter<void>();

  readonly profile = PROFILE;
  readonly firstName = PROFILE.name.split(' ')[0].toLowerCase();
  activeApp: AppId | null = null;
  now = new Date();
  private timer?: ReturnType<typeof setInterval>;

  readonly titles: Record<AppId, string> = {
    about: 'people',
    experience: 'office',
    projects: 'internet explorer',
    skills: 'notes',
    contact: 'email',
    recycle: 'recycle bin',
    cmd: 'command',
    minesweeper: 'games',
    media: 'music',
  };

  readonly tiles: PhoneTile[] = [
    {
      id: 'about',
      title: 'people',
      subtitle: PROFILE.name,
      icon: 'computer',
      size: 'wide',
      color: '#1BA1E2',
      live: PROFILE.title,
    },
    {
      id: 'projects',
      title: 'ie',
      subtitle: 'projects',
      icon: 'ie',
      size: 'medium',
      color: '#647687',
    },
    {
      id: 'experience',
      title: 'office',
      subtitle: 'experience',
      icon: 'documents',
      size: 'medium',
      color: '#D80073',
    },
    {
      id: 'skills',
      title: 'notes',
      subtitle: 'skills.txt',
      icon: 'notepad',
      size: 'medium',
      color: '#A200FF',
    },
    {
      id: 'contact',
      title: 'email',
      subtitle: 'say hello',
      icon: 'mail',
      size: 'medium',
      color: '#00ABA9',
    },
    {
      id: 'media',
      title: 'music',
      subtitle: 'now playing',
      icon: 'media',
      size: 'wide',
      color: '#F09609',
      live: 'Compile Until Dawn',
    },
    {
      id: 'minesweeper',
      title: 'games',
      icon: 'mines',
      size: 'medium',
      color: '#6D8764',
    },
    {
      id: 'cmd',
      title: 'command',
      icon: 'cmd',
      size: 'medium',
      color: '#825A2C',
    },
    {
      href: PROFILE.links.linkedin,
      title: 'linkedin',
      icon: 'linkedin',
      size: 'medium',
      color: '#0A66C2',
    },
    {
      href: PROFILE.links.githubNew,
      title: 'github',
      icon: 'github',
      size: 'medium',
      color: '#333333',
    },
    {
      id: 'recycle',
      title: 'recycle',
      icon: 'recycle',
      size: 'medium',
      color: '#76608A',
    },
  ];

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.now = new Date();
    }, 30000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  openTile(tile: PhoneTile): void {
    if (tile.href) {
      window.open(tile.href, '_blank', 'noopener');
      return;
    }
    if (tile.id) this.activeApp = tile.id;
  }

  goHome(): void {
    this.activeApp = null;
  }
}

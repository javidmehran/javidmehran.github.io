import { Component, EventEmitter, Output } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { AppId } from '../../models/window.types';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [XpIconComponent],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.css',
})
export class StartMenuComponent {
  @Output() openApp = new EventEmitter<AppId>();
  @Output() shutdown = new EventEmitter<void>();
  @Output() external = new EventEmitter<string>();

  readonly profile = PROFILE;

  readonly leftItems: { id?: AppId; label: string; icon: string; href?: string; subtitle?: string }[] = [
    { id: 'about', label: 'My Computer', icon: 'computer', subtitle: 'About Mehran' },
    { id: 'projects', label: 'Internet Explorer', icon: 'ie', subtitle: 'Browse projects' },
    { id: 'skills', label: 'Notepad', icon: 'notepad', subtitle: 'skills.txt' },
    { id: 'contact', label: 'Outlook Express', icon: 'mail', subtitle: 'Say hello' },
    { id: 'cmd', label: 'Command Prompt', icon: 'cmd', subtitle: 'whoami' },
    { id: 'minesweeper', label: 'Minesweeper', icon: 'mines', subtitle: 'Take a break' },
    { id: 'media', label: 'Windows Media Player', icon: 'media', subtitle: 'Dev playlist' },
    { label: 'LinkedIn', icon: 'linkedin', href: PROFILE.links.linkedin, subtitle: 'Professional profile' },
    { label: 'GitHub', icon: 'github', href: PROFILE.links.githubNew, subtitle: 'javidmehran' },
  ];

  readonly rightItems: { id?: AppId; label: string; icon: string; href?: string }[] = [
    { id: 'experience', label: 'My Documents', icon: 'documents' },
    { id: 'projects', label: 'My Recent Documents', icon: 'folder' },
    { id: 'about', label: 'My Computer', icon: 'computer' },
    { id: 'recycle', label: 'Recycle Bin', icon: 'recycle' },
    { id: 'media', label: 'Control Panel', icon: 'help' },
    { id: 'cmd', label: 'Search', icon: 'search' },
    { id: 'cmd', label: 'Run...', icon: 'run' },
  ];

  onLeftClick(item: (typeof this.leftItems)[number]): void {
    if (item.href) {
      this.external.emit(item.href);
      return;
    }
    if (item.id) this.openApp.emit(item.id);
  }

  onRightClick(item: (typeof this.rightItems)[number]): void {
    if (item.id) this.openApp.emit(item.id);
  }
}

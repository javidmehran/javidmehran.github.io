import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppDefinition, AppId, DesktopIcon, OpenWindow } from '../models/window.types';

export const APP_DEFS: Record<AppId, AppDefinition> = {
  about: {
    id: 'about',
    title: 'My Computer',
    icon: 'computer',
    width: 520,
    height: 420,
    startMenuGroup: 'programs',
  },
  experience: {
    id: 'experience',
    title: 'My Documents',
    icon: 'documents',
    width: 560,
    height: 460,
    startMenuGroup: 'programs',
  },
  projects: {
    id: 'projects',
    title: 'Internet Explorer - Projects',
    icon: 'ie',
    width: 680,
    height: 500,
    startMenuGroup: 'programs',
  },
  skills: {
    id: 'skills',
    title: 'Untitled - Notepad',
    icon: 'notepad',
    width: 500,
    height: 420,
    startMenuGroup: 'programs',
  },
  contact: {
    id: 'contact',
    title: 'Outlook Express',
    icon: 'mail',
    width: 520,
    height: 440,
    startMenuGroup: 'programs',
  },
  recycle: {
    id: 'recycle',
    title: 'Recycle Bin',
    icon: 'recycle',
    width: 480,
    height: 380,
    startMenuGroup: 'programs',
  },
  cmd: {
    id: 'cmd',
    title: 'Command Prompt',
    icon: 'cmd',
    width: 560,
    height: 360,
    startMenuGroup: 'programs',
  },
  minesweeper: {
    id: 'minesweeper',
    title: 'Minesweeper',
    icon: 'mines',
    width: 280,
    height: 360,
    startMenuGroup: 'programs',
  },
  media: {
    id: 'media',
    title: 'Windows Media Player',
    icon: 'media',
    width: 420,
    height: 340,
    startMenuGroup: 'programs',
  },
};

@Injectable({ providedIn: 'root' })
export class DesktopService {
  private nextZ = 10;
  private windowsSubject = new BehaviorSubject<OpenWindow[]>([]);
  private startOpenSubject = new BehaviorSubject(false);
  private focusedSubject = new BehaviorSubject<AppId | null>(null);
  private phaseSubject = new BehaviorSubject<'boot' | 'desktop' | 'shutdown'>('boot');

  readonly windows$ = this.windowsSubject.asObservable();
  readonly startOpen$ = this.startOpenSubject.asObservable();
  readonly focused$ = this.focusedSubject.asObservable();
  readonly phase$ = this.phaseSubject.asObservable();

  readonly desktopIcons: DesktopIcon[] = [
    { id: 'about', label: 'My Computer', icon: 'computer' },
    { id: 'experience', label: 'My Documents', icon: 'documents' },
    { id: 'projects', label: 'Internet\nExplorer', icon: 'ie' },
    { id: 'recycle', label: 'Recycle Bin', icon: 'recycle' },
    { id: 'skills', label: 'skills.txt', icon: 'notepad' },
    { id: 'contact', label: 'Outlook\nExpress', icon: 'mail' },
    { id: 'cmd', label: 'Command\nPrompt', icon: 'cmd' },
    { id: 'minesweeper', label: 'Minesweeper', icon: 'mines' },
  ];

  get windows(): OpenWindow[] {
    return this.windowsSubject.value;
  }

  get startOpen(): boolean {
    return this.startOpenSubject.value;
  }

  finishBoot(): void {
    this.phaseSubject.next('desktop');
  }

  toggleStart(force?: boolean): void {
    this.startOpenSubject.next(force ?? !this.startOpenSubject.value);
  }

  closeStart(): void {
    this.startOpenSubject.next(false);
  }

  openApp(id: AppId): void {
    this.closeStart();
    const existing = this.windows.find((w) => w.id === id);
    if (existing) {
      this.focusWindow(id);
      if (existing.minimized) {
        this.patchWindow(id, { minimized: false });
      }
      return;
    }

    const def = APP_DEFS[id];
    const offset = (this.windows.length % 6) * 22;
    const win: OpenWindow = {
      id,
      title: def.title,
      icon: def.icon,
      x: 80 + offset,
      y: 48 + offset,
      width: def.width,
      height: def.height,
      zIndex: ++this.nextZ,
      minimized: false,
      maximized: false,
    };
    this.windowsSubject.next([...this.windows, win]);
    this.focusedSubject.next(id);
  }

  closeWindow(id: AppId): void {
    const next = this.windows.filter((w) => w.id !== id);
    this.windowsSubject.next(next);
    if (this.focusedSubject.value === id) {
      const top = [...next].sort((a, b) => b.zIndex - a.zIndex)[0];
      this.focusedSubject.next(top?.id ?? null);
    }
  }

  minimizeWindow(id: AppId): void {
    this.patchWindow(id, { minimized: true });
    if (this.focusedSubject.value === id) {
      this.focusedSubject.next(null);
    }
  }

  toggleMaximize(id: AppId): void {
    const win = this.windows.find((w) => w.id === id);
    if (!win) return;
    this.patchWindow(id, { maximized: !win.maximized, minimized: false });
    this.focusWindow(id);
  }

  focusWindow(id: AppId): void {
    const win = this.windows.find((w) => w.id === id);
    if (!win) return;
    this.patchWindow(id, { zIndex: ++this.nextZ, minimized: false });
    this.focusedSubject.next(id);
  }

  moveWindow(id: AppId, x: number, y: number): void {
    this.patchWindow(id, { x: Math.max(0, x), y: Math.max(0, y) });
  }

  toggleTaskbarWindow(id: AppId): void {
    const win = this.windows.find((w) => w.id === id);
    if (!win) return;
    if (win.minimized || this.focusedSubject.value !== id) {
      this.focusWindow(id);
    } else {
      this.minimizeWindow(id);
    }
  }

  shutdown(): void {
    this.closeStart();
    this.windowsSubject.next([]);
    this.phaseSubject.next('shutdown');
  }

  restart(): void {
    this.phaseSubject.next('boot');
    setTimeout(() => this.finishBoot(), 2200);
  }

  private patchWindow(id: AppId, patch: Partial<OpenWindow>): void {
    this.windowsSubject.next(
      this.windows.map((w) => (w.id === id ? { ...w, ...patch } : w))
    );
  }
}

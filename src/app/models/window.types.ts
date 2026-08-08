export type AppId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'contact'
  | 'recycle'
  | 'cmd'
  | 'minesweeper'
  | 'media';

export interface DesktopIcon {
  id: AppId;
  label: string;
  icon: string;
}

export interface OpenWindow {
  id: AppId;
  title: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
}

export interface AppDefinition {
  id: AppId;
  title: string;
  icon: string;
  width: number;
  height: number;
  startMenuGroup?: 'programs' | 'links';
}

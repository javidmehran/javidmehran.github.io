import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-cmd-app',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="cmd" (click)="focusInput()">
      <pre>{{ output }}</pre>
      <div class="line">
        <span>C:\\Portfolio&gt;</span>
        <input
          #input
          [(ngModel)]="command"
          (keydown.enter)="run()"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
    </div>
  `,
  styles: [
    `
      .cmd {
        min-height: 100%;
        background: #000;
        color: #c0c0c0;
        font: 13px 'Lucida Console', 'Courier New', monospace;
        padding: 8px;
      }
      pre {
        margin: 0 0 8px;
        white-space: pre-wrap;
      }
      .line {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #c0c0c0;
        font: inherit;
        outline: none;
      }
    `,
  ],
})
export class CmdAppComponent implements OnInit {
  output = '';
  command = '';
  private readonly profile = PROFILE;

  ngOnInit(): void {
    this.output = [
      'Microsoft Windows XP [Version 5.1.2600]',
      '(C) Copyright 1985-2001 Microsoft Corp.',
      '',
      'Type HELP for available commands.',
      '',
    ].join('\n');
  }

  focusInput(): void {
    const el = document.querySelector('.cmd input') as HTMLInputElement | null;
    el?.focus();
  }

  run(): void {
    const raw = this.command.trim();
    const cmd = raw.toLowerCase();
    this.output += `C:\\Portfolio>${raw}\n`;
    this.command = '';

    if (!cmd) return;

    const replies: Record<string, string> = {
      help: [
        'Available commands:',
        '  WHOAMI     Display current user identity',
        '  ABOUT      Short bio',
        '  SKILLS     List core skills',
        '  LINKS      Open social coordinates',
        '  GITHUB     Show GitHub accounts',
        '  CLS        Clear screen',
        '  EXIT       Close tip (use the X button)',
        '',
      ].join('\n'),
      whoami: `${this.profile.name}\\SoftwareEngineer\n`,
      about: `${this.profile.bio}\n`,
      skills: 'TypeScript, React Native, Angular, C++, Assembly, Kotlin, systems curiosity\n',
      links: [
        `LinkedIn  ${this.profile.links.linkedin}`,
        `GitHub    ${this.profile.links.githubNew}`,
        `Classic   ${this.profile.links.githubOld}`,
        `Instagram ${this.profile.links.instagram}`,
        '',
      ].join('\n'),
      github: [
        `New: ${this.profile.links.githubNew}`,
        `Old: ${this.profile.links.githubOld}`,
        '',
      ].join('\n'),
      cls: '__CLEAR__',
      dir: 'ABOUT.SYS  PROJECTS.EXE  SKILLS.TXT  CONTACT.MSG  MINESWEEPER.EXE\n',
      ver: 'Windows XP Portfolio Edition\n',
    };

    if (cmd === 'cls') {
      this.output = '';
      return;
    }

    if (cmd === 'exit') {
      this.output += 'Unable to exit process from shell. Use the red X, friend.\n';
      return;
    }

    this.output += (replies[cmd] ?? `'${raw}' is not recognized as an internal or external command.\n`) + '\n';
  }
}

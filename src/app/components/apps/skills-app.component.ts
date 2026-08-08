import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills-app',
  standalone: true,
  template: `
    <div class="notepad">
      <div class="menu">File Edit Format View Help</div>
      <pre>{{ text }}</pre>
    </div>
  `,
  styles: [
    `
      .notepad {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
      }
      .menu {
        padding: 3px 8px;
        background: #ece9d8;
        border-bottom: 1px solid #aca899;
        letter-spacing: 0.5px;
      }
      pre {
        flex: 1;
        margin: 0;
        padding: 10px 12px;
        background: #fff;
        font: 13px 'Lucida Console', 'Courier New', monospace;
        white-space: pre-wrap;
        line-height: 1.45;
      }
    `,
  ],
})
export class SkillsAppComponent {
  readonly text = this.buildText();

  private buildText(): string {
    const lines = [
      'skills.txt - Notepad',
      '====================',
      '',
      'Mehran Javid / Software Engineer',
      '',
    ];
    for (const group of SKILL_GROUPS) {
      lines.push(`[${group.title}]`);
      lines.push(...group.items.map((item) => `  - ${item}`));
      lines.push('');
    }
    lines.push('// Saved successfully to C:\\\\Portfolio\\\\skills.txt');
    return lines.join('\n');
  }
}

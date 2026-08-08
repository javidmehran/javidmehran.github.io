import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp-icon',
  standalone: true,
  template: `
    <span class="xp-icon" [style.width.px]="size" [style.height.px]="size" [attr.data-icon]="name" aria-hidden="true">
      @switch (name) {
        @case ('computer') {
          <svg viewBox="0 0 32 32"><rect x="3" y="4" width="26" height="18" rx="1" fill="#7aa2c9" stroke="#1e3a5f"/><rect x="5" y="6" width="22" height="14" fill="#c5e0f5"/><rect x="10" y="24" width="12" height="2" fill="#6b6b6b"/><rect x="8" y="26" width="16" height="3" fill="#9a9a9a" stroke="#555"/></svg>
        }
        @case ('documents') {
          <svg viewBox="0 0 32 32"><path d="M6 5h14l6 6v16H6V5z" fill="#f4e4a8" stroke="#8a7a3a"/><path d="M20 5v6h6" fill="#efe0a0" stroke="#8a7a3a"/><rect x="10" y="14" width="12" height="2" fill="#c9b86a"/><rect x="10" y="18" width="10" height="2" fill="#c9b86a"/></svg>
        }
        @case ('ie') {
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#1f6feb"/><ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="#9fd0ff" stroke-width="2"/><circle cx="16" cy="16" r="5" fill="#f5f7fa"/><path d="M8 10c3-4 13-4 16 0" stroke="#fff" stroke-width="1.5" fill="none"/></svg>
        }
        @case ('recycle') {
          <svg viewBox="0 0 32 32"><path d="M10 8l-3 10h18l-3-10H10z" fill="#9aa3ad" stroke="#555"/><path d="M12 18v8h8v-8" fill="#b8c0c8" stroke="#555"/><path d="M14 10l2 5 2-5M13 21h6" stroke="#3a7d3a" stroke-width="1.4" fill="none"/></svg>
        }
        @case ('notepad') {
          <svg viewBox="0 0 32 32"><rect x="7" y="3" width="18" height="26" rx="1" fill="#fffef5" stroke="#555"/><rect x="10" y="1" width="3" height="5" fill="#d4d0c8" stroke="#666"/><rect x="15" y="1" width="3" height="5" fill="#d4d0c8" stroke="#666"/><rect x="20" y="1" width="3" height="5" fill="#d4d0c8" stroke="#666"/><rect x="10" y="10" width="12" height="1.5" fill="#333"/><rect x="10" y="14" width="10" height="1.5" fill="#333"/><rect x="10" y="18" width="11" height="1.5" fill="#333"/></svg>
        }
        @case ('mail') {
          <svg viewBox="0 0 32 32"><rect x="3" y="8" width="26" height="18" rx="1" fill="#f0f4ff" stroke="#345"/><path d="M3 8l13 10L29 8" fill="none" stroke="#1f4f9a" stroke-width="1.6"/><path d="M3 26l9-8M29 26l-9-8" stroke="#1f4f9a" fill="none"/></svg>
        }
        @case ('cmd') {
          <svg viewBox="0 0 32 32"><rect x="2" y="5" width="28" height="22" rx="1" fill="#000"/><rect x="2" y="5" width="28" height="4" fill="#1a1a1a"/><path d="M7 14l4 3-4 3M13 20h8" stroke="#0f0" stroke-width="1.6" fill="none"/></svg>
        }
        @case ('mines') {
          <svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" fill="#c0c0c0" stroke="#555"/><circle cx="16" cy="16" r="7" fill="#222"/><path d="M16 6v4M16 22v4M6 16h4M22 16h4M9 9l3 3M20 20l3 3M23 9l-3 3M12 20l-3 3" stroke="#222" stroke-width="1.5"/><circle cx="14" cy="14" r="1.2" fill="#fff"/></svg>
        }
        @case ('media') {
          <svg viewBox="0 0 32 32"><rect x="3" y="6" width="26" height="20" rx="2" fill="#1d3550"/><rect x="6" y="9" width="14" height="10" fill="#5dade2"/><circle cx="23" cy="20" r="4" fill="#f4d03f"/><circle cx="11" cy="21" r="3" fill="#f4d03f"/></svg>
        }
        @case ('folder') {
          <svg viewBox="0 0 32 32"><path d="M4 9h8l2 3h14v14H4V9z" fill="#e6c35c" stroke="#8a6b20"/><path d="M4 12h24v14H4z" fill="#f0d878"/></svg>
        }
        @case ('help') {
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#2f80ed"/><text x="16" y="22" text-anchor="middle" font-size="16" font-family="Tahoma" fill="#fff" font-weight="700">?</text></svg>
        }
        @case ('search') {
          <svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="7" fill="none" stroke="#1f4f9a" stroke-width="2.5"/><path d="M18 18l8 8" stroke="#c0392b" stroke-width="3" stroke-linecap="round"/></svg>
        }
        @case ('run') {
          <svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" fill="#dfe6f0" stroke="#333"/><rect x="6" y="14" width="14" height="6" fill="#fff" stroke="#666"/><path d="M22 12l6 5-6 5V12z" fill="#2d7d32"/></svg>
        }
        @case ('linkedin') {
          <svg viewBox="0 0 32 32"><rect x="3" y="3" width="26" height="26" rx="3" fill="#0a66c2"/><text x="16" y="23" text-anchor="middle" font-size="14" font-family="Arial" fill="#fff" font-weight="700">in</text></svg>
        }
        @case ('github') {
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#24292f"/><path d="M16 8c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.55-.17.55-.38v-1.3c-2.2.48-2.7-1.06-2.7-1.06-.36-.9-.9-1.14-.9-1.14-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.9.87 2.36.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0116 11.2c.68 0 1.36.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.49.55.38A8.01 8.01 0 0024 16c0-4.4-3.6-8-8-8z" fill="#fff"/></svg>
        }
        @case ('start') {
          <svg viewBox="0 0 24 24"><rect x="1" y="1" width="10" height="10" fill="#f65314"/><rect x="13" y="1" width="10" height="10" fill="#7cbb00"/><rect x="1" y="13" width="10" height="10" fill="#00a1f1"/><rect x="13" y="13" width="10" height="10" fill="#ffbb00"/></svg>
        }
        @default {
          <svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" fill="#ddd" stroke="#666"/></svg>
        }
      }
    </span>
  `,
  styles: [
    `
      .xp-icon {
        display: inline-flex;
        flex-shrink: 0;
        line-height: 0;
      }
      .xp-icon svg {
        width: 100%;
        height: 100%;
        display: block;
        overflow: visible;
      }
    `,
  ],
})
export class XpIconComponent {
  @Input({ required: true }) name!: string;
  @Input() size = 32;
}

import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [XpIconComponent],
  template: `
    <div class="mail">
      <div class="toolbar">New | Reply | Forward | Send/Receive</div>
      <div class="compose">
        <div class="row"><label>To:</label><span>recruiters&#64;internet.com; collaborators&#64;everywhere.dev</span></div>
        <div class="row"><label>From:</label><span>{{ profile.name }} &lt;mehran.javid12&#64;gmail.com&gt;</span></div>
        <div class="row"><label>Subject:</label><span>Let's build something excellent</span></div>
        <div class="body">
          <p>Hi there,</p>
          <p>
            I'm {{ profile.name }}, a {{ profile.title }} at {{ profile.company }} based in
            {{ profile.location }}. If you want to talk code, products, or weird Assembly side quests —
            my inbox (and DMs) are open.
          </p>
          <div class="links">
            <a [href]="profile.links.linkedin" target="_blank" rel="noopener">
              <app-xp-icon name="linkedin" [size]="22" /> LinkedIn
            </a>
            <a [href]="profile.links.githubNew" target="_blank" rel="noopener">
              <app-xp-icon name="github" [size]="22" /> GitHub (new)
            </a>
            <a [href]="profile.links.githubOld" target="_blank" rel="noopener">
              <app-xp-icon name="github" [size]="22" /> GitHub (classic)
            </a>
            <a [href]="profile.links.instagram" target="_blank" rel="noopener">
              Instagram &#64;mehrunova
            </a>
            <a [href]="profile.links.npm" target="_blank" rel="noopener">npm &#64;mehranjavid</a>
          </div>
          <p>Best,<br />Mehran</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .mail {
        min-height: 100%;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
        display: flex;
        flex-direction: column;
      }
      .toolbar {
        padding: 4px 8px;
        background: #ece9d8;
        border-bottom: 1px solid #aca899;
      }
      .compose {
        flex: 1;
        background: #fff;
      }
      .row {
        display: grid;
        grid-template-columns: 70px 1fr;
        gap: 8px;
        padding: 6px 10px;
        border-bottom: 1px solid #ece9d8;
      }
      label {
        color: #555;
        font-weight: 700;
      }
      .body {
        padding: 14px 16px;
        line-height: 1.5;
      }
      .links {
        display: grid;
        gap: 8px;
        margin: 14px 0;
      }
      .links a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #215dc6;
        width: fit-content;
      }
    `,
  ],
})
export class ContactAppComponent {
  readonly profile = PROFILE;
}

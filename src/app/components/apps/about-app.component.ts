import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-about-app',
  standalone: true,
  imports: [XpIconComponent],
  template: `
    <div class="about">
      <aside class="sidebar">
        <div class="sys-icon">
          <app-xp-icon name="computer" [size]="48" />
        </div>
        <p>System Tasks</p>
        <button type="button" class="linkish">View system information</button>
        <button type="button" class="linkish">Add or remove programs</button>
        <button type="button" class="linkish">Change a setting</button>
      </aside>
      <section class="main">
        <div class="hero">
          <img [src]="profile.avatarUrl" [alt]="profile.name" class="avatar" />
          <div>
            <h2>{{ profile.name }}</h2>
            <p class="role">{{ profile.title }} · {{ profile.company }}</p>
            <p class="loc">📍 {{ profile.location }}</p>
          </div>
        </div>
        <div class="panel">
          <h3>General</h3>
          <p>{{ profile.bio }}</p>
          <p class="quote">“{{ profile.tagline }}”</p>
        </div>
        <div class="panel props">
          <div><span>OS</span><strong>Windows XP Professional</strong></div>
          <div><span>Owner</span><strong>{{ profile.name }}</strong></div>
          <div><span>Computer</span><strong>MEHRAN-DEV</strong></div>
          <div><span>Processor</span><strong>Curiosity × Persistence</strong></div>
          <div><span>Memory</span><strong>Unlimited coffee cache</strong></div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .about {
        display: grid;
        grid-template-columns: 160px 1fr;
        min-height: 100%;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
        color: #1a1a1a;
      }
      .sidebar {
        background: linear-gradient(180deg, #7498c8, #7ba2d2 30%, #c7d7ea);
        padding: 12px;
        border-right: 1px solid #7a95b5;
      }
      .sys-icon {
        margin-bottom: 12px;
      }
      .sidebar p {
        font-weight: 700;
        color: #215dc6;
        margin-bottom: 8px;
      }
      .linkish {
        display: block;
        width: 100%;
        text-align: left;
        background: none;
        border: 0;
        color: #215dc6;
        padding: 4px 0;
        cursor: pointer;
        font: inherit;
        text-decoration: underline;
      }
      .main {
        padding: 14px 16px;
        background: #fff;
      }
      .hero {
        display: flex;
        gap: 14px;
        align-items: center;
        margin-bottom: 14px;
      }
      .avatar {
        width: 72px;
        height: 72px;
        border-radius: 4px;
        border: 2px solid #7ba2d2;
        object-fit: cover;
      }
      h2 {
        font: 700 18px 'Trebuchet MS', Tahoma, sans-serif;
        margin: 0 0 4px;
      }
      .role {
        margin: 0;
        color: #215dc6;
        font-weight: 700;
      }
      .loc {
        margin: 4px 0 0;
        color: #444;
      }
      .panel {
        border: 1px solid #d4d0c8;
        background: #f8f6ef;
        padding: 10px 12px;
        margin-bottom: 10px;
      }
      .panel h3 {
        margin: 0 0 6px;
        font-size: 12px;
        color: #215dc6;
      }
      .panel p {
        margin: 0 0 8px;
        line-height: 1.45;
      }
      .quote {
        font-style: italic;
        color: #555;
      }
      .props div {
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 8px;
        padding: 3px 0;
        border-bottom: 1px dotted #ccc;
      }
      .props span {
        color: #666;
      }
    `,
  ],
})
export class AboutAppComponent {
  readonly profile = PROFILE;
}

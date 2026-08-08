import { Component } from '@angular/core';
import { PROFILE, PROJECTS, Project } from '../../data/portfolio.data';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-projects-app',
  standalone: true,
  imports: [XpIconComponent],
  template: `
    <div class="ie">
      <div class="toolbar">
        <button type="button" disabled>Back</button>
        <button type="button" disabled>Forward</button>
        <button type="button" (click)="filter = 'all'">Refresh</button>
        <span class="sep"></span>
        <button type="button" (click)="filter = 'new'">New GitHub</button>
        <button type="button" (click)="filter = 'old'">Classic GitHub</button>
      </div>
      <div class="address">
        <label>Address</label>
        <div class="bar">
          <app-xp-icon name="ie" [size]="14" />
          https://mehran.dev/projects
        </div>
        <a class="go" [href]="profile.links.githubNew" target="_blank" rel="noopener">Go</a>
      </div>
      <div class="content">
        <header class="banner">
          <div>
            <h2>Mehran's Project Explorer</h2>
            <p>Hand-picked repos from both GitHub eras — new and classic.</p>
          </div>
          <div class="accounts">
            <a [href]="profile.links.githubNew" target="_blank" rel="noopener">
              <app-xp-icon name="github" [size]="20" /> javidmehran
            </a>
            <a [href]="profile.links.githubOld" target="_blank" rel="noopener">
              <app-xp-icon name="github" [size]="20" /> mehranjavid
            </a>
          </div>
        </header>
        <div class="grid">
          @for (project of visible; track project.url) {
            <a class="card" [href]="project.url" target="_blank" rel="noopener">
              <div class="card-top">
                <strong>{{ project.name }}</strong>
                <span class="badge">{{ project.account === 'new' ? 'NEW' : 'CLASSIC' }}</span>
              </div>
              <p>{{ project.description }}</p>
              <div class="meta">
                <span>{{ project.language || 'Multi' }}</span>
                <span>★ {{ project.stars }}</span>
                <span>{{ project.tags.join(' · ') }}</span>
              </div>
            </a>
          }
        </div>
      </div>
      <footer>Done · Internet</footer>
    </div>
  `,
  styles: [
    `
      .ie {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
      }
      .toolbar,
      .address {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        background: #ece9d8;
        border-bottom: 1px solid #aca899;
      }
      .toolbar button,
      .go {
        border: 1px solid #003c74;
        background: linear-gradient(180deg, #fff, #ece9d8);
        padding: 2px 8px;
        font: inherit;
        cursor: pointer;
        color: #000;
        text-decoration: none;
      }
      .toolbar button:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .sep {
        width: 1px;
        height: 18px;
        background: #aca899;
        margin: 0 4px;
      }
      .bar {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 6px;
        background: #fff;
        border: 1px solid #7f9db9;
        padding: 3px 6px;
      }
      .content {
        flex: 1;
        padding: 12px;
        background: linear-gradient(180deg, #fff 0%, #eef4ff 100%);
      }
      .banner {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 14px;
        padding-bottom: 10px;
        border-bottom: 2px solid #215dc6;
      }
      h2 {
        margin: 0 0 4px;
        font: 700 18px 'Trebuchet MS', Tahoma, sans-serif;
        color: #215dc6;
      }
      .banner p {
        margin: 0;
        color: #444;
      }
      .accounts {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .accounts a {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #215dc6;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .card {
        display: block;
        text-decoration: none;
        color: inherit;
        background: #fff;
        border: 1px solid #b8c6d9;
        padding: 10px;
        box-shadow: 1px 1px 0 #fff inset;
      }
      .card:hover {
        border-color: #215dc6;
        background: #f5f9ff;
      }
      .card-top {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 6px;
      }
      .badge {
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        background: #215dc6;
        padding: 1px 5px;
      }
      .card p {
        margin: 0 0 8px;
        line-height: 1.4;
        color: #333;
        min-height: 48px;
      }
      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        color: #666;
        font-size: 11px;
      }
      footer {
        padding: 3px 8px;
        background: #ece9d8;
        border-top: 1px solid #aca899;
      }
    `,
  ],
})
export class ProjectsAppComponent {
  readonly profile = PROFILE;
  readonly projects = PROJECTS;
  filter: 'all' | 'new' | 'old' = 'all';

  get visible(): Project[] {
    if (this.filter === 'all') return this.projects;
    return this.projects.filter((p) => p.account === this.filter);
  }
}

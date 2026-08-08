import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-experience-app',
  standalone: true,
  imports: [XpIconComponent],
  template: `
    <div class="docs">
      <div class="toolbar">
        <span>File</span><span>Edit</span><span>View</span><span>Favorites</span><span>Tools</span><span>Help</span>
      </div>
      <div class="address">
        <label>Address</label>
        <div class="bar">C:\\Users\\Mehran\\My Documents\\Career</div>
      </div>
      <div class="body">
        <aside>
          <p class="section">Files Stored on This Computer</p>
          @for (item of folders; track item) {
            <div class="folder-row">
              <app-xp-icon name="folder" [size]="28" />
              <span>{{ item }}</span>
            </div>
          }
        </aside>
        <section>
          @for (job of experience; track job.company) {
            <article class="job">
              <header>
                <app-xp-icon name="documents" [size]="28" />
                <div>
                  <h3>{{ job.role }}</h3>
                  <p>{{ job.company }} · {{ job.location }}</p>
                  <p class="period">{{ job.period }}</p>
                </div>
              </header>
              <ul>
                @for (h of job.highlights; track h) {
                  <li>{{ h }}</li>
                }
              </ul>
            </article>
          }
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .docs {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
      }
      .toolbar {
        display: flex;
        gap: 14px;
        padding: 4px 10px;
        background: #ece9d8;
        border-bottom: 1px solid #d4d0c8;
      }
      .address {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 8px;
        background: #ece9d8;
        border-bottom: 1px solid #aca899;
      }
      .bar {
        flex: 1;
        background: #fff;
        border: 1px solid #7f9db9;
        padding: 3px 6px;
      }
      .body {
        display: grid;
        grid-template-columns: 180px 1fr;
        flex: 1;
      }
      aside {
        background: linear-gradient(180deg, #7498c8, #c7d7ea);
        padding: 12px;
      }
      .section {
        color: #215dc6;
        font-weight: 700;
        margin: 0 0 10px;
      }
      .folder-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      section {
        padding: 12px;
        background: #fff;
      }
      .job {
        border: 1px solid #d4d0c8;
        background: #faf8f1;
        padding: 12px;
        margin-bottom: 12px;
      }
      .job header {
        display: flex;
        gap: 10px;
        margin-bottom: 8px;
      }
      h3 {
        margin: 0;
        font: 700 14px 'Trebuchet MS', Tahoma, sans-serif;
      }
      .job p {
        margin: 2px 0 0;
        color: #333;
      }
      .period {
        color: #215dc6 !important;
        font-weight: 700;
      }
      ul {
        margin: 0;
        padding-left: 18px;
        line-height: 1.45;
      }
    `,
  ],
})
export class ExperienceAppComponent {
  readonly experience = EXPERIENCE;
  readonly folders = ['Resume.doc', 'Projects', 'Talks', 'Certificates'];
}

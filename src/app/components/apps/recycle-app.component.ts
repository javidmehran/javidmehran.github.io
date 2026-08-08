import { Component } from '@angular/core';
import { RECYCLE_ITEMS } from '../../data/portfolio.data';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-recycle-app',
  standalone: true,
  imports: [XpIconComponent],
  template: `
    <div class="recycle">
      <div class="toolbar">File Edit View Favorites Tools Help</div>
      <div class="body">
        <p class="hint">These items are not permanently deleted. Double-click your ego to restore.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Original Location</th>
              <th>Date Deleted</th>
            </tr>
          </thead>
          <tbody>
            @for (item of items; track item.name) {
              <tr>
                <td>
                  <span class="name">
                    <app-xp-icon name="documents" [size]="16" />
                    {{ item.name }}
                  </span>
                </td>
                <td>{{ item.reason }}</td>
                <td>Yesterday</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .recycle {
        min-height: 100%;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
      }
      .toolbar {
        padding: 4px 8px;
        background: #ece9d8;
        border-bottom: 1px solid #aca899;
      }
      .body {
        padding: 10px;
      }
      .hint {
        margin: 0 0 10px;
        color: #444;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        text-align: left;
        padding: 6px 8px;
        border-bottom: 1px solid #ece9d8;
        vertical-align: top;
      }
      th {
        background: #ece9d8;
        font-weight: 700;
      }
      .name {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
    `,
  ],
})
export class RecycleAppComponent {
  readonly items = RECYCLE_ITEMS;
}
